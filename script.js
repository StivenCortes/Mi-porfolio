const translations = {
  es: {
    navAbout: "Sobre mí", navSkills: "Habilidades", navProjects: "Proyectos", navContact: "Contacto",
    availability: "Estudiante de Ingeniería de Sistemas y Computación", heroHello: "Hola, soy",
    heroSubtitle: "Estoy aprendiendo a construir soluciones con código, un proyecto a la vez.",
    seeProjects: "Ver mis proyectos", aboutMe: "Conóceme", aboutLabel: "UN POCO SOBRE MÍ",
    aboutTitle: 'Aprendiendo hoy, <span class="gradient-text">construyendo para mañana.</span>',
    aboutText: "Soy estudiante de Ingeniería de Sistemas y Computación y estoy fortaleciendo mis bases en programación y desarrollo de software. Este espacio reúne mis proyectos, lo que voy aprendiendo y mi progreso como desarrollador.",
    aboutPoint1: "Aprendizaje constante", aboutPoint2: "Proyectos prácticos", aboutPoint3: "Mejora progresiva",
    skillsLabel: "HERRAMIENTAS", skillsTitle: 'Tecnologías que estoy <span class="gradient-text">explorando.</span>',
    skillsIntro: "Edita esta sección para mostrar solo las tecnologías que conoces o estás aprendiendo actualmente.",
    learning: "En aprendizaje", projectsLabel: "TRABAJO SELECCIONADO",
    projectsTitle: 'Proyectos <span class="gradient-text">en construcción.</span>', allRepos: "Todos mis repositorios ↗",
    project1Title: "Proyecto en Python", project1Text: "Describe aquí un programa que hayas creado, qué problema resuelve y qué aprendiste al desarrollarlo.",
    project2Title: "Mi primer sitio web", project2Text: "Añade una página o práctica donde hayas trabajado estructura, estilos, diseño adaptable o accesibilidad.",
    project3Title: "Práctica o reto", project3Text: "Puedes mostrar un ejercicio académico bien explicado, una automatización o una idea que estés desarrollando.",
    tagBeginner: "Proyecto inicial", tagLearning: "En progreso", viewCode: "Ver código",
    projectNote: "Consejo: es mejor presentar pocos proyectos bien explicados que muchos sin contexto. Cambia estos ejemplos por tus proyectos reales.",
    contactLabel: "¿CONECTAMOS?", contactTitle: 'Cada proyecto es <span class="gradient-text">un nuevo comienzo.</span>',
    contactText: "Estoy construyendo mis habilidades y abierto a aprender, colaborar y compartir ideas.",
    writeMe: "Escríbeme", footerText: "Hecho con curiosidad y código.", backTop: "Volver arriba ↑"
  },
  en: {
    navAbout: "About", navSkills: "Skills", navProjects: "Projects", navContact: "Contact",
    availability: "Computer Systems Engineering student", heroHello: "Hi, I'm",
    heroSubtitle: "I'm learning to build solutions with code, one project at a time.",
    seeProjects: "Explore projects", aboutMe: "About me", aboutLabel: "A LITTLE ABOUT ME",
    aboutTitle: 'Learning today, <span class="gradient-text">building for tomorrow.</span>',
    aboutText: "I'm a Computer Systems Engineering student strengthening my foundations in programming and software development. This space brings together my projects, what I'm learning, and my progress as a developer.",
    aboutPoint1: "Continuous learning", aboutPoint2: "Hands-on projects", aboutPoint3: "Steady improvement",
    skillsLabel: "TOOLKIT", skillsTitle: 'Technologies I’m <span class="gradient-text">exploring.</span>',
    skillsIntro: "Edit this section to show only the technologies you know or are currently learning.",
    learning: "Learning", projectsLabel: "SELECTED WORK",
    projectsTitle: 'Projects <span class="gradient-text">in progress.</span>', allRepos: "All repositories ↗",
    project1Title: "Python project", project1Text: "Describe a program you built, the problem it solves, and what you learned while developing it.",
    project2Title: "My first website", project2Text: "Add a page or exercise where you practiced structure, styling, responsive design, or accessibility.",
    project3Title: "Practice or challenge", project3Text: "Show a well-explained class assignment, an automation, or an idea you're developing.",
    tagBeginner: "Starter project", tagLearning: "In progress", viewCode: "View code",
    projectNote: "Tip: a few well-documented projects are better than many without context. Replace these examples with your real projects.",
    contactLabel: "LET'S CONNECT", contactTitle: 'Every project is <span class="gradient-text">a new beginning.</span>',
    contactText: "I'm building my skills and always open to learning, collaborating, and sharing ideas.",
    writeMe: "Get in touch", footerText: "Made with curiosity and code.", backTop: "Back to top ↑"
  }
};

let currentLanguage = "es";
const languageToggle = document.querySelector("#language-toggle");

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) element.innerHTML = translations[language][key];
  });
  languageToggle.textContent = language === "es" ? "EN" : "ES";
  languageToggle.setAttribute("aria-label", language === "es" ? "Switch to English" : "Cambiar a español");
}

languageToggle.addEventListener("click", () => setLanguage(currentLanguage === "es" ? "en" : "es"));
document.querySelector("#year").textContent = new Date().getFullYear();
