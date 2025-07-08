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

    // Gallery Modal Logic
    const galleryModal = document.getElementById('galleryModal');
    if (galleryModal) {
        const carouselInner = galleryModal.querySelector('.carousel-inner');
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        // Populate carousel with images from the gallery
        galleryItems.forEach((item, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');
            if (index === 0) {
                carouselItem.classList.add('active');
            }
            
            const img = document.createElement('img');
            img.src = item.src;
            img.classList.add('d-block', 'w-100');
            img.alt = item.alt;

            carouselItem.appendChild(img);
            carouselInner.appendChild(carouselItem);
        });

        // Activate the correct slide when a gallery item is clicked
        galleryModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const slideIndex = parseInt(button.getAttribute('data-bs-slide-to'));
            
            const carousel = new bootstrap.Carousel(document.getElementById('galleryCarousel'));
            carousel.to(slideIndex);
        });
    }

});