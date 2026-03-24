---
layout: page
title: Adaptive FEM
description: An adaptive discretization method for one-dimensional advection-diffusion problems. 
img: assets/projects/adFEM/featured.png
importance: 10
category: 
related_publications: false
---

<div class="publications">
	<ol class="bibliography">
		<li>
			<div class="links">
				<a href="https://github.com/arielsboiardi/adAFEM" class="btn btn-sm z-depth-0" role="button">Code</a>
				<a href="{{site.baseurl}}/assets/projects/adFEM/FEM_adattivo_problemi_diffusione_trasporto.pdf" class="btn btn-sm z-depth-0" role="button">PDF</a>
			</div>
		</li>
	</ol>
</div>

This was my B.Sc Thesis. The attached document is in italian, a translation of the abstract is reported below. 

<h4 style="text-align: center;">
	Abstract
</h4>

Numerous differential problems arising from physics and engineering models present solutions with strong gradients in localized regions of the domain, or other local singularities. In general, to approximate such solutions characterized by abrupt variations, an adaptive approach, based on targeted refinements of the discretization, is more efficient compared to methods that involve uniform refinement.

One of the most widespread tools for the numerical resolution of partial differential equations with boundary conditions is finite element analysis (FEA), which is still the basis of much of the software used in the industrial field for structural analysis and simulation in continuum mechanics, fluid dynamics, and other technical fields. The foundation of the finite element method (FEM) can be traced back to the Ritz and Galerkin methods, which proposed a systematic approach for the approximation of variational problems in finite-dimensional spaces. The peculiarity of FEM is that it allows decomposing the problem into local contributions, thanks to an appropriate construction of the approximation space. By expanding the approximation space, we improve its ability to express the solution of the problem, but also increase the complexity of the numerical resolution of the problem.

In this thesis work, we compared the classic finite element method with its subsequent development in an adaptive direction. Over the last 35 years, automatic adaptive discretization methods have been extensively studied within the FEM framework, with the aim of ideally obtaining approximations within a given tolerance while maintaining the most efficient discretization possible. The idea of the adaptive finite element method (AFEM) is to refine the approximation space to make it more flexible only where necessary. This is made possible by the fact that the functions that make up the approximation space in the finite element method have a close relationship with the geometry of the domain. The main tool in the adaptive method is the residual error estimates, easily calculable quantities that provide global and local information on the error made in the approximation. We tackled one-dimensional transport and diffusion problems with these methods, whose solutions, for some parameter choices, present marked boundary layers, thus representing a good benchmark to verify the potential of the adaptive FEM.

{% include figure.liquid loading="eager" path="https://github.com/arielsboiardi/adAFEM/blob/master/demo.gif?raw=true" class="rounded mx-auto d-block" width="75%" %}