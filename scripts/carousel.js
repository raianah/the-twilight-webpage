document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel-image");
    let index = 0;

    function nextImage() {
        images[index].classList.remove("active"); // Hide current image
        index = (index + 1) % images.length; // Move to next image
        images[index].classList.add("active"); // Show new image
    }

    setInterval(nextImage, 5000); // Change image every 5 seconds
});
