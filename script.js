// Textos que se muestran en cada idioma. Las claves corresponden a los atributos data-i18n del HTML.
const translations = {
  // Traducciones al español.
  es: {
    // Seccción de encabezado.
    navAbout: "Sobre mí", navSkills: "Habilidades", navProjects: "Proyectos", navContact: "Contacto",
    availability: "Estudiante de Ingeniería de Sistemas y Computación", heroHello: "Hola, soy",
    heroSubtitle: "Estoy aprendiendo a construir soluciones con código, un proyecto a la vez.",
    seeProjects: "Ver mis proyectos", aboutMe: "Conóceme",  
    
    // Sección de "Un poco sobre mí".
    aboutLabel: "UN POCO SOBRE MÍ",
    aboutTitleStart: "Aprendiendo hoy,",
    aboutTitleEnd: "construyendo mañana.",
    aboutText: "Soy estudiante de Ingeniería de Sistemas y Computación de la Universidad Nacional de Colombia y estoy fortaleciendo mis bases en programación y desarrollo de software, \
    para más adelante poder ser un ingeniero LM. Este espacio reúne mis proyectos, lo que voy aprendiendo y mi progreso como desarrollador.",
    aboutPoint1: "Aprendizaje constante", aboutPoint2: "Proyectos prácticos", aboutPoint3: "Mejora progresiva",

    // Sección de habilidades o herramientas.
    skillsLabel: "HERRAMIENTAS", skillsTitle: 'Tecnologías que estoy <span class="gradient-text">explorando.</span>',
    learning: "En aprendizaje", 
    
    // Sección de proyectos. Puedes cambiar los títulos y descripciones por tus propios proyectos. 
    projectsLabel: "TRABAJO SELECCIONADO",
    projectsTitle: 'Proyectos <span class="gradient-text">en construcción.</span>', allRepos: "Todos mis repositorios ↗",
      // Proyecto 1: Generador de códigos QR.
    qrTitle: "Generador de códigos QR",
    qrDescription: "Aplicación desarrollada en Python que genera códigos QR a partir de enlaces ingresados por la terminal. \
    Proyecto en evolución con el objetivo de facilitar su distribución mediante un ejecutable independiente.",
      // Proyecto 2: Portafolio personal.
    portfolioTitle: "Portafolio personal",
    portfolioDescription: "Sitio web personal desarrollado con HTML, CSS y JavaScript para presentar mi perfil académico, \
    documentar mi aprendizaje y compartir mis proyectos de programación.",
      // Proyecto 3: Calculadora del PAPA.
    papaTitle: "Calculadora del PAPA — UNAL",
    papaDescription: "Programa de terminal desarrollado en Python para calcular el Promedio Aritmético Ponderado Acumulado (PAPA), \
    recreando la fórmula de cálculo utilizada en el contexto académico de la Universidad Nacional.",
      // Etiquetas y textos de estado de los proyectos.
    floatingChip: "Siempre aprendiendo", inProgress: "En desarrollo",
    tagLearning: "En desarrollo", viewCode: "Ver código",
    
    // Sección de contacto.
    contactLabel: "¿CONECTAMOS?", contactTitle: 'Cada proyecto es <span class="gradient-text">un nuevo comienzo.</span>',
    contactText: "Estoy construyendo mis habilidades y abierto a aprender, colaborar y compartir ideas.",
    writeMe: "Escríbeme", footerText: "Hecho con curiosidad y código.", backTop: "Volver arriba ↑"
  },


  // Traducciones al inglés.
  en: {
    // Header section.
    navAbout: "About", navSkills: "Skills", navProjects: "Projects", navContact: "Contact",
    availability: "Computer Systems Engineering student", heroHello: "Hi, I'm",
    heroSubtitle: "I'm learning to build solutions with code, one project at a time.",
    seeProjects: "Explore projects", aboutMe: "About me",

    // About me section.
    aboutLabel: "A LITTLE ABOUT ME",
    aboutTitleStart: "Learning today,",
    aboutTitleEnd: "building for tomorrow.",
    aboutText: "I'm a Systems and Computer Engineering student at the National University of Colombia, \
    strengthening my foundations in programming and software development so I can become an LM engineer in the future. \
    This space brings together my projects, what I'm learning, and my progress as a developer.",
    aboutPoint1: "Continuous learning", aboutPoint2: "Hands-on projects", aboutPoint3: "Steady improvement",

    // Skills and tools section.
    skillsLabel: "TOOLKIT", skillsTitle: 'Technologies I’m <span class="gradient-text">exploring.</span>',
    skillsIntro: "Edit this section to show only the technologies you know or are currently learning.",

    // Projects section. Replace the titles and descriptions with your own projects.
    projectsLabel: "SELECTED WORK",
    projectsTitle: 'Projects <span class="gradient-text">in progress.</span>',
    allRepos: "All repositories ↗",
    project1Title: "Python project", project1Text: "Describe a program you built, the problem it solves, and what you learned while developing it.",
    project2Title: "My first website", project2Text: "Add a page or exercise where you practiced structure, styling, responsive design, or accessibility.",
    project3Title: "Practice or challenge", project3Text: "Show a well-explained class assignment, an automation, or an idea you're developing.",

      // Project 1: QR Code Generator.
    qrTitle: "QR Code Generator",
    qrDescription: "A Python application that generates QR codes from links entered in the terminal. \
    The project is evolving, with the goal of making it easier to distribute as a standalone executable.",

      // Project 2: Personal portfolio.
    portfolioTitle: "Personal portfolio",
    portfolioDescription: "A personal website built with HTML, CSS, and JavaScript to present my academic profile, \
    document my learning, and share my programming projects.",

      // Project 3: PAPA Calculator.
    papaTitle: "PAPA Calculator — UNAL",
    papaDescription: "A Python terminal program that calculates the Cumulative Weighted Average (PAPA), \
    recreating the formula used in the academic context of the National University of Colombia.",

      // Project labels and status text.
    learning: "Learning",
    floatingChip: "Always learning",
      inProgress: "In development",
      tagBeginner: "Starter project", tagLearning: "In progress", viewCode: "View code",
    projectNote: "Tip: a few well-documented projects are better than many without context. Replace these examples with your real projects.",

    // Contact section.
    contactLabel: "LET'S CONNECT", contactTitle: 'Every project is <span class="gradient-text">a new beginning.</span>',
    contactText: "I'm building my skills and always open to learning, collaborating, and sharing ideas.",
    writeMe: "Get in touch", footerText: "Made with curiosity and code.", backTop: "Back to top ↑"
  }
};

// Idioma activo; la página empieza en español.
let currentLanguage = "es";
// Botón que permite alternar entre español e inglés.
const languageToggle = document.querySelector("#language-toggle");

// Actualiza el idioma de la página y todos los elementos marcados para traducción.
function setLanguage(language) {
  // Guarda el idioma seleccionado y lo informa al navegador (por ejemplo, para accesibilidad).
  currentLanguage = language;
  document.documentElement.lang = language;

  // Busca los elementos con una clave de traducción y reemplaza su contenido.
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    // innerHTML permite conservar etiquetas como <span> incluidas en algunas traducciones.
    // Si la clave no existe, se conserva el texto original del HTML.
    if (translations[language][key]) element.innerHTML = translations[language][key];
  });

  // El texto del botón indica el idioma al que se puede cambiar.
  languageToggle.textContent = language === "es" ? "EN" : "ES";
  // Actualiza el nombre accesible del botón según el idioma actual.
  languageToggle.setAttribute("aria-label", language === "es" ? "Switch to English" : "Cambiar a español");
}

// Al pulsar el botón, cambia al idioma opuesto al que está activo.
languageToggle.addEventListener("click", () => setLanguage(currentLanguage === "es" ? "en" : "es"));

// Muestra automáticamente el año actual en el pie de página.
document.querySelector("#year").textContent = new Date().getFullYear();
