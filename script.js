// Implementación de desplazamiento suave para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#navbar a');
    const OFFSET_TOP = 50; // Ajusta este valor si es necesario

    function changeLinkState() {
        let index = sections.length;

        while(--index && window.scrollY + OFFSET_TOP < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        // Asegúrate de que exista un enlace correspondiente a la sección actual antes de intentar agregar la clase 'active'
        const activeSection = sections[index];
        if (activeSection) {
            const activeLink = document.querySelector('#navbar a[href="#' + activeSection.id + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    }

    changeLinkState();
    window.addEventListener('scroll', changeLinkState);
});
