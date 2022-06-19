---
title: FAATNA20>22
draft: false

event: FAATNA20>22
event_url: http://web.unibas.it/faatna22/

location: Matera, Italy
address:
  street: Via Lanera, 20
  city: Matera
  region: MT
  postcode: '75100'
  country: Italy

summary: "IGA-Energetic BEM for the numerical solution of 2D wave scattering problem in the space-time domain"
abstract: "
  The Energetic Boundary Element Method (BEM) was proposed in 2009 for the numerical solution of 2D exterior wave propagation problems.
  The hyperbolic differential model is transformed, using the fundamental solution of the wave operator, into a Boundary Integral Equation (BIE), which is then written into an energy-dependent weak form and discretized by a Galerkin-type approach. 
  Compared to other space-time discretizations of the wave equation, the energetic weak form offers desirable accuracy and stability properties.

  Taking into account the model problem of 2D soft scattering of acoustic waves by open arcs represented by B-spline (or NURBS) curves, 
  in this talk we discuss some recent advances in the coupling of Energetic BEM with the powerful Isogeometric Analysis (IGA) approach for what concerns discretization in space variables. 
  Indeed, IGA, proposed by T. J. R. Hughes and collaborators in the context of the FEM to ``bridge the gap'' between design and analysis using B-splines and NURBS as shape functions, naturally fits into BEMs, allowing an exact representation of curvilinear boundaries. 

  In this contribution numerical issues for an efficient integration of the singular kernel related to the fundamental solution of the wave operator and dependent on the propagation wavefront, will be described,
  highlighting the new challenges posed by the presence of curvilinear boundaries. 
  Extensive numerical experiments will show, from a numerical point of view, convergence and accuracy of the proposed method as well as the superiority of IGA-Energetic BEM compared to the standard version of the method, based on lagrangian shape functions.
  Simulations on long time intervals allow to observe the consistency of the proposed method with the stationary IGA-BEM. 
"


# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: "2022-07-05"
date_end: "2022-07-08"
all_day: false

# Schedule page publish date (NOT talk date).
publishDate: "2017-01-01T00:00:00Z"

authors: []
tags: []

# Is this a featured talk? (true/false)
featured: true

# image:
#   caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/bzdhc5b3Bxs)'
#   focal_point: Right

# links:
# - icon: twitter
#   icon_pack: fab
#   name: Follow
#   url: https://twitter.com/georgecushen
# url_code: ""
# url_pdf: ""
# url_slides: ""
# url_video: ""

# Markdown Slides (optional).
#   Associate this talk with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: example

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects:
- iga-energetic_bem
---
{{< cite page="/publication/aimiboiardi22_mdpi" view="1" >}}

<!-- 
{{% callout note %}}
Click on the **Slides** button above to view the built-in slides feature.
{{% /callout %}}

Slides can be added in a few ways:

- **Create** slides using Wowchemy's [*Slides*](https://wowchemy.com/docs/managing-content/#create-slides) feature and link using `slides` parameter in the front matter of the talk file
- **Upload** an existing slide deck to `static/` and link using `url_slides` parameter in the front matter of the talk file
- **Embed** your slides (e.g. Google Slides) or presentation video on this page using [shortcodes](https://wowchemy.com/docs/writing-markdown-latex/).

Further event details, including [page elements](https://wowchemy.com/docs/writing-markdown-latex/) such as image galleries, can be added to the body of this page. -->
