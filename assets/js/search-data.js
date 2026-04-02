// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum Vitæ et Studiorum of Ariel S. Boiardi",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-starting-an-exciting-new-project",
          title: 'Starting an exciting new project!',
          description: "",
          section: "News",},{id: "news-back-from-ictam2024",
          title: 'Back from ICTAM2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_ICTAM/";
            },},{id: "news-i-am-happy-to-announce-that-today-i-am-starting-a-new-position-as-a-postdoctoral-scholar-at-the-okinawa-institute-of-science-and-technology-oist-in-the-group-of-prof-eliot-fried",
          title: 'I am happy to announce that today I am starting a new position...',
          description: "",
          section: "News",},{id: "projects-double-barrier-options-with-fem",
          title: 'Double barrier options with FEM',
          description: "Pricing double barrier options with the Finite Element Method.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/FEM-BBoptions/";
            },},{id: "projects-iga-energetic-bem",
          title: 'IGA-Energetic BEM',
          description: "An Isogeometric approach to the Energetic Boundary Element Method.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/IGA-EnergeticBEM/";
            },},{id: "projects-hierarchical-b-splines",
          title: 'Hierarchical B-splines',
          description: "An adaptive discretization method for one-dimensional advection-diffusion problems based on hierarchical B-splines.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/adAHBsplineFEM/";
            },},{id: "projects-adaptive-fem",
          title: 'Adaptive FEM',
          description: "An adaptive discretization method for one-dimensional advection-diffusion problems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/adFEM/";
            },},{id: "projects-experimental-and-theoretical-analysis-of-euler-elastica",
          title: 'Experimental and theoretical analysis of Euler elastica',
          description: "Comparison of Euler elastica theoretical solution with experiments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/elastica/";
            },},{id: "projects-equilibrium-and-dynamics-of-the-ising-model",
          title: 'Equilibrium and dynamics of the Ising model',
          description: "Analysis of the Ising model out of equilibrium by Monte Carlo simulations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ising_quench/";
            },},{id: "projects-newton-solver-chaos-and-fractals",
          title: 'Newton solver, chaos and fractals',
          description: "Chaotic dynamics and fractal geometry of the stable sets of the newton solver",
          section: "Projects",handler: () => {
              window.location.href = "/projects/newton_fractals/";
            },},{id: "teachings-applied-mathematics-an-introduction-to-scientific-computing-by-numerical-analysis",
          title: 'Applied mathematics: An introduction to scientific computing by numerical analysis',
          description: "Tutoring and coding support for the SISSA course on scientific computing through numerical analysis.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/applied-mathematics-scientific-computing-2024/";
            },},{id: "teachings-esercizi-di-analisi-numerica",
          title: 'Esercizi di Analisi Numerica',
          description: "Lab session materials for the Numerical Analysis course in the B.Sc. in Mathematics.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/esercizi-di-analisi-numerica-2020/";
            },},{id: "teachings-esercizi-di-calcolo-numerico",
          title: 'Esercizi di Calcolo Numerico',
          description: "Exercise sessions for the Numerical Analysis course in the B.Sc. in Computer Science.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/esercizi-di-calcolo-numerico-2021/";
            },},{id: "teachings-tutor-analisi-i",
          title: 'Tutor Analisi I',
          description: "Tutoring sessions for Mathematical Analysis I for the B.Sc. in Industrial Engineering.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/tutor-analisi-i-2024/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
