function toggleDescription() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more-text");
    const seeMoreLess = document.getElementById("see-more-less");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        seeMoreLess.innerText = " See More";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        seeMoreLess.innerText = " See Less";
    }
}
