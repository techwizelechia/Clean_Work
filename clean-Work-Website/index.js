     const images = [
            "images/images/slideshow/afro1.jpg", "images/images/slideshow/afro2.jpg", "images/images/slideshow/afro3.jpg"
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


