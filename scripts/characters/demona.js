function showAbility(ability) {
    const title = document.getElementById("ability-title");
    const description = document.getElementById("ability-description");
    const buttons = document.querySelectorAll(".ability-btn");

    const abilities = {
        "P": {
            name: "Absorb",
            desc: "Demona's gem of life absorbs enemy damage, and uses it in her next attack as bonus damage."
        },
        "Q": {
            name: "Dancing Rage",
            desc: "Demona enrages and strikes the enemy using his dancing pose, dealing damage and inflicts herself +1 Evasiveness."
        },
        "W": {
            name: "Gem of Life",
            desc: "Demona's gem of life heals her by 30% of enemy's inflicted damage."
        },
        "E": {
            name: "Agile Strike",
            desc: "Demona's agility increases, attacking the enemy front and behind dealing damage for two consecutive rounds."
        },
        "R": {
            name: "Blink Execution",
            desc: "Demona wields her light sword and slashes the enemy in a blink, dealing damage. This ability can inflict the caster dealing damage to herself."
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
        1: "../../../img/Mayhem/splash_arts/demona.png",
        2: "../../../img/Mayhem/skin_splash_arts/soulblade demona.png",
        // 3: "skin3.jpg",
        // 4: "skin4.jpg",
    };

    skinImg.src = skinImages[skinNumber];

    buttons.forEach(btn => btn.classList.remove("active"));

    event.target.classList.add("active");
}