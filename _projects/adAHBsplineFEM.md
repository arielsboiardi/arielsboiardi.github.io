---
layout: page
title: Hierarchical B-splines
description: An adaptive discretization method for one-dimensional advection-diffusion problems based on hierarchical B-splines. 
img: assets/projects/adAHBsplineFEM/featured.png
importance: 10
category: 
related_publications: false
---
<div class="publications">
	<ol class="bibliography">
		<li>
			<div class="links">
				<a href="https://github.com/arielsboiardi/adAHBsplineFEM" class="btn btn-sm z-depth-0" role="button">Code</a>
				<a href="{{site.baseurl}}/assets/projects/adAHBsplineFEM/Hierarchical_Bsplines_ad_problems.pdf" class="btn btn-sm z-depth-0" role="button">PDF</a>
			</div>
		</li>
	</ol>
</div>

This was the final project for the course of Numerical Mathematics extending the results from my B.Sc. Thesis IA using Hierarchical B-Splines.

<h4 style="text-align: center;">
	Abstract
</h4>
In this work we present an adaptive discretization method for one
dimensional advection-diffusion problems based on hierarchical Bsplines. After reviewing the basic theory of hierarchical B-splines
and their use in FEM and similar methods, we develop algorithms
for the implementation of said technique. Numerical examples are
provided to test the algorithms and their MATLAB implementations.

{% include figure.liquid loading="eager" path="https://github.com/arielsboiardi/adAHBsplineFEM/blob/master/figures/ad_evolution_base.gif?raw=true" class="rounded mx-auto d-block" width="75%" %}