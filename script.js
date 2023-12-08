// Implementación de desplazamiento suave para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

setTimeout(function() {

    $('#inicio h1').fitText(1, { minFontSize: '42px', maxFontSize: '68.8px' });

}, 100);
  

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#navbar a');
    const OFFSET_TOP = 50; // Ajusta este valor si es necesario

    function changeLinkState() {
        let index = sections.length;

        while(--index && window.scrollY + OFFSET_TOP < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));

        const activeSection = sections[index];
        let activeLink;
        
        // Verificar si la sección activa es "tecnologías"
        if (activeSection && (activeSection.id === 'tecnologias' || activeSection.id == 'formacion')) {
            // Cambiar el enlace activo a "sobre-mi"
            activeLink = document.querySelector('#navbar a[href="#sobre-mi"]');
        } else {
            // Seleccionar el enlace correspondiente a la sección activa
            activeLink = document.querySelector('#navbar a[href="#' + activeSection.id + '"]');
        }

        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    changeLinkState();
    window.addEventListener('scroll', changeLinkState);
});
