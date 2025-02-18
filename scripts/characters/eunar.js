function showAbility(ability) {
    const title = document.getElementById("ability-title");
    const description = document.getElementById("ability-description");
    const buttons = document.querySelectorAll(".ability-btn");

    const abilities = {
        "Q": {
            name: "Hammer of Guilt",
            desc: "Pins down with the hammer, dealing damage and stuns for one round by 10% chance."
        },
        "W": {
            name: "Destiny",
            desc: "Bends time and possibility, changing the enemy's destiny to ruins dealing damage for two consecutive rounds."
        },
        "E": {
            name: "Redemption",
            desc: "Redeems the enemy, saving or deal damage to the enemy. This ability can inflict the caster dealing damage to herself."
        },
        "R": {
            name: "Spark!",
            desc: "Combines all light forms to form a powerful spark of light dealing damage."
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
        1: "../../../img/Mayhem/splash_arts/eunar.png",
        // 2: "../../../img/Mayhem/skin_splash_arts/soulblade demona.png",
        // 3: "skin3.jpg",
        // 4: "skin4.jpg",
    };

    skinImg.src = skinImages[skinNumber];

    buttons.forEach(btn => btn.classList.remove("active"));

    event.target.classList.add("active");
}