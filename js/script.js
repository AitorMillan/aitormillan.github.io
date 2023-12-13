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
    const OFFSET_TOP = 100; // Ajusta este valor si es necesario

    function changeLinkState() {
        let index = sections.length;

        // Comprobamos si hemos llegado al final de la página para resaltar la sección de contacto
        const pageBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - OFFSET_TOP;

        if (pageBottom) {
            // Resaltar la sección de contacto
            navLinks.forEach((link) => link.classList.remove('active'));
            document.querySelector('#navbar a[href="#contacto"]').classList.add('active');
        } else {
            while(--index && window.pageYOffset + OFFSET_TOP < sections[index].offsetTop) {}

            navLinks.forEach((link) => link.classList.remove('active'));

            let activeSection = sections[index];
            let activeLink;

            // Si estamos en 'Tecnologías' o 'Formación', resaltamos 'Sobre Mí'
            if(activeSection && (activeSection.id === 'tecnologias' || activeSection.id === 'formacion')) {
                activeLink = document.querySelector('#navbar a[href="#sobre-mi"]');
            } else {
                // De lo contrario, resaltamos la sección correspondiente
                activeLink = document.querySelector('#navbar a[href="#' + (activeSection ? activeSection.id : '') + '"]');
            }

            if(activeLink) {
                activeLink.classList.add('active');
            }
        }
    }

    // Escuchamos el evento de desplazamiento para cambiar el estado del enlace
    window.addEventListener('scroll', changeLinkState);

    // Llamamos a la función una vez para establecer el estado inicial
    changeLinkState();
});
