const images = ["images/images/slideshow/afro1.jpg", "images/images/slideshow/afro2.jpg", "images/images/slideshow/afro3.jpg"];
        let index = 0;

        function changeImage() {
            index = (index + 1) % images.length;
            document.getElementById("slide").src = images[index];
        }

        setInterval(changeImage, 3000); // Change image every 3 seconds
