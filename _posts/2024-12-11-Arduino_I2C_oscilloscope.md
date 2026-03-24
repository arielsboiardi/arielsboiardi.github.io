---
layout: post
title: Arduino I2C controller for the TI DLPC350
date: 2024-12-11 00:00:00
description: Some notes on controlling a DLP projector with an Arduino through I2C protocol
tags: arduino microcontroller electronics 
categories: project
related_publications: boiardi_minimal_2024
---

In the last week I have been programming an Arduino Nano ESP32 to control a DLP projector over the I2C protocol. I post here some notes on this ongoing work. 


### Premises

The projector is the [Wintech PRO4500](https://www.ti.com/tool/WDST-3P-PRO4500#overview) we use at [SAMBA Lab](http://samba.sissa.it/) for the grayscale photolithography of soft active materials such as polymer gels (as described e.g. in {% cite boiardi_minimal_2024 %}).
This device is based on Texas Instrument’s DLP LightCrafter 4500 that utilizes the DLP4500 WXGA DMD (digital micromirror array) and Texas Instrument’s DLPC350 controller. 

The [technical documentation](https://www.ti.com/lit/ug/dlpu010g/dlpu010g.pdf) from TI suggests two ways to interface with the projector: I2C and USB; I opted for I2C for simplicity, also considering that my project does not have high bandwidth requirements.

The DLPC350 operates at 3.3V, as stated [here](https://www.ti.com/lit/ug/dlpu011f/dlpu011f.pdf), therefore the I2C connected needs to be driven with a 3.3V signal. 
For this reason, the Arduino Nano ESP32 was selected as a controller, as it natively operates at 3.3V.

### The I2C protocol 

The source for this section is a [document](https://www.ti.com/lit/an/sbaa565/sbaa565.pdf) from Texas Instruments, which contains way more detail that needed for my project. 

I2C (Inter-Integrated Circuit) is a two-wire serial communication protocol using a serial data line (SDA) and a serial clock line (SCL).
Multiple controllers and target devices can be simultaneously connected on the same I2C bus. 
Each target node is identified by a unique 7 bit address. 

The SCL line is primarily controlled by the controller device and is used to synchronously data on the network; multiple clock speeds are supported. The serial data line SDA  is used to transmit data to or from target devices. At a given time only one device can be transmitting data on the I2C bus. 

To avoid contention of the line, I2C communication is initiated from the controller device with an I2C START condition.
To do this, the controller device first pulls the SDA low and then pulls the SCL low. This sequence indicates that the controller device is claiming the I2C bus for communication, forcing other controller devices on the bus to hold their communication.
When the controller device has completed communication, the SCL releases high and then the SDA releases high. This indicates an I2C STOP condition.

<div align="center">
  {% include figure.liquid loading="eager" path="assets/posts/I2C_Arduino/START_STOP.png" class="rounded" zoomable=true width="50%" %}
  <div class=caption>
    I2C START and STOP [<a href="https://www.ti.com/lit/an/sbaa565/sbaa565.pdf" target="_blank">source Texas Instruments</a>]
  </div>
</div>

After the communication has been initiated, a sequence of ones and zeros for serial communication. 
SDA is used for the data bits while SCL is the serial clock that times the bit sequence. 
A logical one is sent when the SDA releases the line, allowing the pullup resistor to pull the line to a high level. 
A logical zero is sent when SDA pulls down on the line, setting a low level near ground.

The ones and zeros are received when SCL is pulsed. 
For a valid bit, SDA does not change between a rising edge and the falling edge of SCL for that bit.
Changes of the SDA between the rising and falling edges of the SCL can be interpreted as a START or STOP condition on the I2C bus.

The first data sent is the 7bit address of the target node, and the 8th bit of the first _frame_ is used to indicate the mode. 
If this bit is 1, the controller is asking to read data from the target device. If this bit is 0, the controller asks to write data to the target device.

After any communication byte, an extra 9th bit is used to verify the communication was successful. 
The target device pulls down the SDA during the SCL pulse to indicate to the controller that the address was received. This is known as an acknowledge (ACK) bit. If this bit is high, then no target device received the address and the communication was unsuccessful.

All subsequent data is sent one byte at a time in data frames separated by ACK bits. 

## Step 1: Testing the I2C signal

While writing the code for the Arduino, I wanted to test the I2C signal, before connecting it to the projector. 
The testing was done with a second Arduino, acting as a target node as the projector, and reading the signal from with an oscilloscope ([R&S®HMO1002](https://www.rohde-schwarz.com/products/test-and-measurement/oscilloscopes/rs-hmo1002-oscilloscope_63493-61541.html)). 

### First messages through I2C

Let us try to send a `0x00` byte over the I2C protocol, here is the code 

```c++
#include <Arduino.h>
#include <Wire.h>

#define I2C_ADDRESS 0x1A

void setup() {
  Wire.begin(); // I2C0 
}

void loop() {
  Wire.beginTransmission(I2C_ADDRESS); //begin transmit to device 0x1A
  Wire.write(0x00); //send data
  Wire.endTransmission(); //stop transmit
  delay(100);
}
```

The message can be read from a reader arduino programmed with the following code: 

```c++
#include <Arduino.h>
#include <Wire.h>

#define I2C_ADDRESS 0x1A

void wireEvent(int howMany) {
  Serial.print("Received on I2C: ");
  while (Wire.available()) {
    byte c = Wire.read(); // receive byte as a character
	Serial.print(c, HEX);
	Serial.println("");
  }
}

void setup() {
	Serial.begin(9600);
	
	// Initialize I2C communication
	Serial.println("Initializing I2C communication...");
	Wire.begin(I2C_ADDRESS);
	Wire.onReceive(wireEvent);
}

void loop() {

}
```

But measuring the signal with the oscilloscope, we just detected the beginning of the transaction, and no message is sent:

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/posts/I2C_Arduino/SCR11.PNG" class="rounded" zoomable=true %}
    <div class="caption">
      Without target node <code>0x1A</code> on the bus.
    </div>
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/posts/I2C_Arduino/SCR12.PNG" class="rounded" zoomable=true %}
    <div class="caption">
      With target node <code>0x1A</code> on the bus.
    </div>
  </div>
</div>

This is because, __without the acknowledgement from the target node, the controller does not send the message__.

Connecting both oscilloscope and reader node to the controller, we can indeed read the message with the arduino and see the right signal on the oscilloscope

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/posts/I2C_Arduino/oscilloscope_arduino_hello.jpg" class="rounded" zoomable=true %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/posts/I2C_Arduino/SCR02.PNG" class="rounded" zoomable=true %}
  </div>
</div>

In the above picture, the data sent by the controller node is `Wire.write("Hello Oscilloscope");` and the oscilloscope is decoding the signal in ASCII instead of HEX.

### On the structure of I2C transactions

The structure of I2C transactions is reported in the left figure below; in this section I will compare this structure with the traces measured with the oscilloscope. For more details (still practical) on I2C protocol read [here](https://docs.arduino.cc/learn/communication/wire/).

{% comment %} 
<div align="center">
  {% include figure.liquid loading="eager" path="https://docs.arduino.cc/static/9d32a6e488d79f211470b15f06644a31/4ef49/I2C.png" class="rounded" zoomable=true width="50%" %}
  <div class="caption">
    An I2C Message
  </div>
</div> 
{% endcomment %}

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="https://docs.arduino.cc/static/9d32a6e488d79f211470b15f06644a31/4ef49/I2C.png" class="rounded" zoomable=true %}
    <div class="caption">
      An I2C Message [source <a href="https://docs.arduino.cc/learn/communication/wire/" target="_blank">Arduino</a>]
    </div>  
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/posts/I2C_Arduino/SCR08.PNG" class="rounded" zoomable=true %}
    <div class="caption">
      Signal recorded from oscilloscope
    </div> 
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/posts/I2C_Arduino/SCR09.PNG" class="rounded" zoomable=true %}
    <div class="caption">
      Details
    </div> 
  </div>
</div>

## Step 2: Addressing a specific register subaddress

To get or set the state of the projector, I need to read or write (respectively) specific registers of its controller, as stated in the programmer's guide. Each register address requires a certain number of data bytes, typically four. Thus, a register address is followed by variable length data. These bytes contain the value read or written into this register, with the most significant byte first.

To move the read/write pointer head head to the correct address, the transaction stars with a write containing the register sub-address. 
The subaddress also contains a read/write bit in the most significant bit position. 
For read functions, bit 7 is set to 0. For write functions, bit 7 is set to 1. 

Therefore, each transaction (even those only comprising reading a register) starts in write mode, in order to send the subaddress to the target node. 
After START, 7bit address, and a 0bit for write mode, the subaddress byte is sent, pointing to the register containing the command of the desired DLPC350 function. 

If the controller wants to __write__ on the selected register, the transaction proceeds with other data frames containing the data to be written. 
If in the other hand, the transaction is a __read__, the controller needs to send another I2C START condition followed by the target address with the I2C read/write bit set to 1. 

### Read: _Get projector hardware status_

Let us try to read the byte at address `0x20`, containing the hardware status of the projector, as stated in the table below.
Looking at the trace from the oscilloscope, we can confirm that the projector initialized successfully and no error is detected.   

```c++

  // Move reding pointer to register 0x20
  Wire.beginTransmission(I2C_ADDRESS); // begin transmit to device 1
  Wire.write(0x20); // send register address 
  Wire.endTransmission(); // end writing without sending stop bit

  // Read 2 bytes from register 0x20
  Wire.requestFrom(I2C_ADDRESS, 2); // request 1 byte from slave device

```

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/posts/I2C_Arduino/hardware_status_table.png" class="rounded" zoomable=true %}
    <div class=caption>
      Hardware Status Register
    </div> 
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/posts/I2C_Arduino/SCR15.PNG" class="rounded" zoomable=true %}
    <div class="caption">
      Signal recorded from oscilloscope
    </div> 
  </div>
</div>


### Write: _Turning the LED on and off_

Finally we are at the point where we can turn the LED of the projector on and off, which is was essentially the first goal (we'll see if we need more granular control for future photolithographic techniques).

This is done by changing the content of register `0x10`, which contains the status od thre RBG LEDs. Actually our projector only has a blue LED, so the relevant bit to flip to turn it on and of is bit 2 of the register. 

```c++ 
Wire.beginTransmission(I2C_ADDRESS); // begin transmit to device 1
Wire.write(0x90); // register 0x10 with bit 7 set to 1 for write mode
Wire.write(0x04); // turn on blue led
// Wire.write(0x00); // turn off blue led
Wire.endTransmission(); // end writing without sending stop bit
```

We can also change the intensity of the light by setting the PWM duty cycle of the LED power supply by setting the 3 _LED Driver Current Control_ bytes at register `0x4B`. 

### Setting the image
For the moment, the images to be projected are sent thought HDMI, but for the future I might need to look into individually addressing each micromirror to dynamically change the projected patterns. 