function showAbility(ability) {
    const title = document.getElementById("ability-title");
    const description = document.getElementById("ability-description");
    const buttons = document.querySelectorAll(".ability-btn");

    const abilities = {
        "Q": {
            name: "Call of the Divine",
            desc: "Calls the divine and strikes forward dealing damage and stuns for one round by 10%, and 5% when empowered."
        },
        "W": {
            name: "Lightbringer",
            desc: "Ignites the sparkling spectrum, dealing damage."
        },
        "E": {
            name: "Radiance",
            desc: "Fires a bolt of pure light that deals damage to enemy. This ability can inflict the caster dealing damage to herself."
        },
        "R": {
            name: "Ascension",
            desc: "Ascends to the heaven, gaining permanent bonus damage and HP."
        }
    };

    title.innerText = abilities[ability].name;
    description.innerText = abilities[ability].desc;

    buttons.forEach(btn => btn.classList.remove("active"));

    event.target.classList.add("active");
}

function showSkin(skinNumber) {
    const skinImg = document.getElementById("skin-img");
    const buttons = document.querySelectorAll(".skin-btn");

    const skinImages = {
        1: "../../../img/Mayhem/splash_arts/clarann.png",
        // 2: "../../../img/Mayhem/skin_splash_arts/darkflame blazen.png",
        // 3: "skin3.jpg",
        // 4: "skin4.jpg",
    };

    skinImg.src = skinImages[skinNumber];

    buttons.forEach(btn => btn.classList.remove("active"));

    event.target.classList.add("active");
}