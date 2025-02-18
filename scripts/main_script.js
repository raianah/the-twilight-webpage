function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    mobileMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function scrollToGames() {
    console.log("scrollToGames() function triggered!");
    
    const yOffset = 970;

    window.scroll({
        top: yOffset,
        behavior: 'smooth'
    });
}