document.addEventListener("DOMContentLoaded", function() {

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Gallery Modal Logic (event delegation ve sadeleştirme)
    const galleryModal = document.getElementById('galleryModal');
    const galleryCarousel = document.getElementById('galleryCarousel');
    if (galleryModal && galleryCarousel) {
        galleryModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            if (!button) return;
            const slideIndex = parseInt(button.getAttribute('data-bs-slide-to'));
            if (!isNaN(slideIndex)) {
                const carousel = bootstrap.Carousel.getOrCreateInstance(galleryCarousel);
                carousel.to(slideIndex);
            }
        });
    }

});