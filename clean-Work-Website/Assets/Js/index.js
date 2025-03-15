     const images = [
           "../images/slideshow/afro-woman-cleaning-window-with-rag-home.jpg" , "../images/slideshow/afro-woman-cleaning-window-with-rag-home.jpg" , "../images/slideshow/unrecognizable-cleaner-walking-into-hotel-room-with-tools-detergents.jpg"
        ];

        let currentIndex = 0;
        const slider = document.querySelector(".background-slider");

        function changeBackground() {
            slider.style.backgroundImage = `url(${images[currentIndex]})`;
            currentIndex = (currentIndex + 1) % images.length;
        }

        // Initial background setup
        changeBackground();

        // Change background every 3 seconds
        setInterval(changeBackground, 3000);

       