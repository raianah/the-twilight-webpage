function showAbility(ability) {
    const title = document.getElementById("ability-title");
    const description = document.getElementById("ability-description");
    const buttons = document.querySelectorAll(".ability-btn");

    const abilities = {
        "Q": {
            name: "Mass Destruction",
            desc: "Destroys the platform dealing damage to enemy. This ability can inflict the caster dealing damage to himself."
        },
        "W": {
            name: "Shattered Souls",
            desc: "Consumes collected Souls to deal massive damage to the enemy and stuns for one round by 100% chance."
        },
        "E": {
            name: "Fragments of Soul",
            desc: "Extracts the enemy soul, dealing damage and grants +1 Soul by 50% chance."
        },
        "R": {
            name: "Burning Spirit",
            desc: "Burns enemy soul dealing damage for two consecutive rounds."
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