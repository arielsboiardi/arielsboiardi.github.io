---
layout: page
title: Newton solver, chaos and fractals
description: Chaotic dynamics and fractal geometry of the stable sets of the newton solver
img: assets/projects/newton_fractals/featured.png
importance: 1
category: 
related_publications: false
---

<div class="publications">
	<ol class="bibliography">
		<li>
			<div class="links">
				<a href="https://github.com/arielsboiardi/NewFract" class="btn btn-sm z-depth-0" role="button">Code</a>
			</div>
		</li>
	</ol>
</div>


Studying stability properties of the classical Newton solver during the course fo Numerical Mathematics, I took the opportunity to explore the mesmerizing structure of its stable sets, and the chaotic dynamics that lead to the complex roots of polynomials. 

The study has been conducted in MATLAB with some artistic freedom in the choice of colors and shades.

The image below represents the stable sets of the Newton solver looking for the complex roots of the polynomial
$$ x^2(x^3-1). $$

{% include figure.liquid loading="eager" path="assets/projects/newton_fractals/featured.png" class="rounded mx-auto d-block" width="75%"%}

If we move one of the coincident roots just a bit we get 

{% include figure.liquid loading="eager" path="assets/projects/newton_fractals/Newton_multi_radici-separate_3M.jpg" class="rounded mx-auto d-block" width="75%" %}

The so called relaxed newton method instead only converges (fast) to the double root, and avoids the others

{% include figure.liquid loading="eager" path="assets/projects/newton_fractals/Newton_relax_1M.jpg" class="rounded mx-auto d-block" width="75%" %}

The code is of course available at the link under the title, but might need some fixing: the colors in my code are selected from an hard coded list for better artistic results, but of the roots are too many it may run out of colors. 
Feel free to contribute if you want.