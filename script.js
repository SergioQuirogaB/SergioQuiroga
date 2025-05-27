// Inicializar AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true
});

// Pantalla de carga
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loading').style.opacity = '0';
    setTimeout(() => {
      document.getElementById('loading').style.display = 'none';
    }, 500);
  }, 1500);
});

// Cursor personalizado
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursor-follower');

document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
  cursorFollower.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
});

// Indicador de scroll
window.addEventListener('scroll', () => {
  const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  document.getElementById('scroll-indicator').style.width = scrolled + '%';
});

// Botón de scroll hacia arriba
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Menú móvil
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Cambio de tema (claro/oscuro)
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const icon = themeToggle.querySelector('i');
  
  if (body.classList.contains('dark')) {
    icon.className = 'fas fa-sun text-xl';
  } else {
    icon.className = 'fas fa-moon text-xl';
  }
  
  // Reinicializar partículas con el nuevo esquema de colores
  initParticles();
});

// Desplazamiento suave para la navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Animación de escritura
const typingText = document.querySelector('.typing-animation');
const texts = [
  'Desarrollador Full Stack Innovador',
  'Especialista en C# .NET',
  'Vue.js & PHP',
  'SQL Server & Oracle DB'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentText = texts[textIndex];
  
  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentText.length) {
    setTimeout(() => { 
      isDeleting = true; 
    }, 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
  }

  const typingSpeed = isDeleting ? 50 : 100;
  setTimeout(typeWriter, typingSpeed);
}

// Iniciar animación de escritura después de cargar la página
setTimeout(typeWriter, 2000);

// Configuración de Particles.js
function initParticles() {
  const isDark = document.body.classList.contains('dark');
  const particleColor = isDark ? '#9ca3af' : '#374151';
  
  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: particleColor },
      shape: { type: 'circle' },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: particleColor, opacity: 0.4, width: 1 },
      move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: {
      detect_on: 'canvas',
      events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true }
    },
    retina_detect: true
  });
}

// Inicializar partículas
initParticles();

// Efecto parallax
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelectorAll('.parallax');
  
  parallax.forEach(element => {
    const speed = element.dataset.speed;
    const yPos = -(scrolled * speed / 100);
    element.style.transform = `translate3d(0, ${yPos}px, 0)`;
  });
});

// Animar barras de habilidades cuando estén en vista
const observerOptions = {
  threshold: 0.7
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillBars = entry.target.querySelectorAll('.skill-progress');
      
      skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
          bar.style.width = width;
        }, 300);
      });
    }
  });
}, observerOptions);

// Observar las secciones de habilidades
document.querySelectorAll('#habilidades .glass').forEach(section => {
  observer.observe(section);
});