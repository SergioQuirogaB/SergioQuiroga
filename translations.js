const translations = {
    es: {
        // Navegación
        'nav-home': 'Inicio',
        'nav-about': 'Sobre mí',
        'nav-skills': 'Habilidades',
        'nav-projects': 'Proyectos',
        'nav-contact': 'Contacto',
        
        // Hero Section
        'hero-title': 'Sergio Quiroga',
        'hero-subtitle': 'Desarrollador Full Stack Innovador',
        'hero-description': 'Creando experiencias digitales extraordinarias con tecnologías de vanguardia',
        
        // About Section
        'about-title': 'Sobre Mí',
        'about-subtitle': 'Transformando ideas en realidades digitales con pasión y precisión',
        'about-role': 'Desarrollador Full Stack Apasionado',
        'about-description-1': 'Con 2 años de experiencia en el desarrollo de software, me especializo en crear soluciones innovadoras que combinan funcionalidad excepcional con diseño vanguardista.',
        'about-description-2': 'Mi expertise abarca desde el backend robusto con .NET y PHP, hasta interfaces intuitivas con Vue.js y tecnologías modernas de frontend. También tengo experiencia en automatizaciones con Python. Me destaco por mi comunicación efectiva, trabajo en equipo y enfoque en la resolución de problemas.',
        'about-projects': 'Proyectos',
        'about-experience': 'Años Exp.',
        
        // Skills Section
        'skills-title': 'Habilidades & Tecnologías',
        'skills-subtitle': 'Dominando las tecnologías más avanzadas del mercado',
        'skills-frontend': 'Frontend Development',
        'skills-backend': 'Backend Development',
        'skills-databases': 'Bases de Datos',
        'skills-operating-systems': 'Sistemas Operativos',
        
        // Projects Section
        'projects-title': 'Proyectos Destacados',
        'projects-subtitle': 'Soluciones innovadoras que marcan la diferencia',
        
        // Proyecto 1
        'project1-title': 'Sistema de Agendamiento',
        'project1-description': 'Plataforma web avanzada para gestión de citas con automatización.',
        
        // Proyecto 2
        'project2-title': 'Sistema POS Inteligente',
        'project2-description': 'Punto de venta con análisis en tiempo real y gestión inteligente de inventario.',
        
        // Proyecto 3
        'project3-title': 'Plugin Mantis',
        'project3-description': 'Este plugin envía mensajes automáticos tras cierto tiempo. Ideal para automatizar notificaciones en MantisBT.',
        
        // Proyecto 4
        'project4-title': 'API Azure - Cost Dashboard',
        'project4-description': 'Servicio que almacena datos de costos de suscripciones de Azure en una base de datos y los visualiza con Power BI.',
        
        // Proyecto 5
        'project5-title': 'AutoMailer Interactivo',
        'project5-description': 'Aplicación web para el envío automatizado de correos con interfaz intuitiva, desarrollada con Flask y manejo de datos en JSON.',
        
        // Proyecto 6
        'project6-title': 'Seguimiento de Certificados MV',
        'project6-description': 'Aplicación web para el control y seguimiento de certificados de máquinas virtuales, con interfaz moderna y gestión dinámica de datos.',
        
        // Botones de proyectos
        'project-private': 'Privado',
        'project-code': 'Código',
        
        // Contact Section
        'contact-title': '¿Tienes un proyecto en mente?',
        'contact-subtitle': 'Hagamos realidad tus ideas juntos',
        'contact-email': 'Email',
        'contact-phone': 'Teléfono',
        'contact-location': 'Ubicación',
        
        // Footer
        'footer-rights': 'Todos los derechos reservados.',
        'footer-developed': 'Desarrollado con enfoque en calidad e innovación ❤️'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title': 'Sergio Quiroga',
        'hero-subtitle': 'Innovative Full Stack Developer',
        'hero-description': 'Creating extraordinary digital experiences with cutting-edge technologies',
        
        // About Section
        'about-title': 'About Me',
        'about-subtitle': 'Transforming ideas into digital realities with passion and precision',
        'about-role': 'Passionate Full Stack Developer',
        'about-description-1': 'With 2 years of experience in software development, I specialize in creating innovative solutions that combine exceptional functionality with cutting-edge design.',
        'about-description-2': 'My expertise ranges from robust backend with .NET and PHP, to intuitive interfaces with Vue.js and modern frontend technologies. I also have experience in Python automation. I stand out for my effective communication, teamwork, and problem-solving approach.',
        'about-projects': 'Projects',
        'about-experience': 'Years Exp.',
        
        // Skills Section
        'skills-title': 'Skills & Technologies',
        'skills-subtitle': 'Mastering the most advanced technologies in the market',
        'skills-frontend': 'Frontend Development',
        'skills-backend': 'Backend Development',
        'skills-databases': 'Databases',
        'skills-operating-systems': 'Operating Systems',
        
        // Projects Section
        'projects-title': 'Featured Projects',
        'projects-subtitle': 'Innovative solutions that make a difference',
        
        // Project 1
        'project1-title': 'Appointment System',
        'project1-description': 'Advanced web platform for appointment management with automation.',
        
        // Project 2
        'project2-title': 'Smart POS System',
        'project2-description': 'Point of sale with real-time analysis and intelligent inventory management.',
        
        // Project 3
        'project3-title': 'Mantis Plugin',
        'project3-description': 'This plugin sends automatic messages after a certain time. Ideal for automating notifications in MantisBT.',
        
        // Project 4
        'project4-title': 'Azure API - Cost Dashboard',
        'project4-description': 'Service that stores Azure subscription cost data in a database and visualizes it with Power BI.',
        
        // Project 5
        'project5-title': 'Interactive AutoMailer',
        'project5-description': 'Web application for automated email sending with intuitive interface, developed with Flask and JSON data handling.',
        
        // Project 6
        'project6-title': 'VM Certificate Tracking',
        'project6-description': 'Web application for controlling and tracking virtual machine certificates, with modern interface and dynamic data management.',
        
        // Project buttons
        'project-private': 'Private',
        'project-code': 'Code',
        
        // Contact Section
        'contact-title': 'Have a project in mind?',
        'contact-subtitle': 'Let\'s make your ideas a reality together',
        'contact-email': 'Email',
        'contact-phone': 'Phone',
        'contact-location': 'Location',
        
        // Footer
        'footer-rights': 'All rights reserved.',
        'footer-developed': 'Developed with a focus on quality and innovation ❤️'
    }
};

// Función para cambiar el idioma
function changeLanguage(lang) {
    // Guardar la preferencia de idioma
    localStorage.setItem('preferred-language', lang);
    
    // Actualizar todos los elementos con atributos data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Actualizar el idioma del documento
    document.documentElement.lang = lang;
    
    // Actualizar el estado de los botones de idioma
    document.querySelectorAll('[data-lang]').forEach(button => {
        const buttonLang = button.getAttribute('data-lang');
        if (buttonLang === lang) {
            button.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
            button.classList.add('bg-blue-500', 'text-white');
        } else {
            button.classList.remove('bg-blue-500', 'text-white');
            button.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
        }
    });
}

// Inicializar el idioma al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('preferred-language') || 'es';
    changeLanguage(savedLanguage);
}); 