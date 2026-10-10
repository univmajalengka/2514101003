document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Promosi DIPI CAFE Siap!");

    // Smooth Scroll Navigasi
    const navLinks = document.querySelectorAll('.nav-links a, .btn-hero');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});