// Former code is for reverie.html. Reverted to video poster.
document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bg-music");
    audio.volume = 0.5;

    const playMusic = () => {
        audio.play().catch(error => console.error("Autoplay failed:", error));
        document.removeEventListener("click", playMusic);
    };

    document.addEventListener("click", playMusic);
});