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

        const img = document.getElementById("myImage");

        img.addEventListener("mouseover", function () {
            img.src = "images/images/services/person-taking-care-office.jpg"; // Change to the new image
        });

        img.addEventListener("mouseout", function () {
            img.src = "images/images/services/people-taking-care-office-cleaning.jpg"; // Revert to the original image
        });