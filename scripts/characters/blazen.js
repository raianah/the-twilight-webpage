function showAbility(ability) {
    const title = document.getElementById("ability-title");
    const description = document.getElementById("ability-description");
    const buttons = document.querySelectorAll(".ability-btn");

    const abilities = {
        "Q": {
            name: "Infernal Chains",
            desc: "Pulls the enemy by the glowing hot chains, dealing damage and stuns for one round by 10% chance."
        },
        "W": {
            name: "Ignite",
            desc: "Ignites the enemy, dealing damage for two consecutive rounds."
        },
        "E": {
            name: "Lava Pillar",
            desc: "Stomps the ground, causing the lava to rise and flow dealing damage to enemy. This ability can inflict the caster dealing damage to himself."
        },
        "R": {
            name: "Fireball",
            desc: "Hurls a fireball, dealing damage."
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
        1: "../../../img/Mayhem/splash_arts/blazen.png",
        2: "../../../img/Mayhem/skin_splash_arts/darkflame blazen.png",
        // 3: "skin3.jpg",
        // 4: "skin4.jpg",
    };

    skinImg.src = skinImages[skinNumber];

    buttons.forEach(btn => btn.classList.remove("active"));

    event.target.classList.add("active");
}