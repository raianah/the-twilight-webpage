function showAbility(ability) {
    const title = document.getElementById("ability-title");
    const description = document.getElementById("ability-description");
    const buttons = document.querySelectorAll(".ability-btn");

    const abilities = {
        "Q": {
            name: "Poison Waste",
            desc: "Charpot throws a poison bomb that explodes upon impact, dealing damage to the enemy for two consecutive rounds and inflicts +1 Poison Mark."
        },
        "W": {
            name: "Venom Injection",
            desc: "Charpot injects a venomous liquid to the enemy, dealing damage and stunning for one round by 10% and inflicts +1 Poison Mark."
        },
        "E": {
            name: "Big Explosion",
            desc: "Charpot deploys his big bomb, dealing damage to the enemy and inflicts +1 Poison Mark. This ability can inflict the caster dealing damage to herself."
        },
        "R": {
            name: "Toxic Contamination",
            desc: "Charpot unleashes her bio-weapon, contaminating the enemy dealing 60% of damage (+ Additional DMG from Poison Marks) dealt."
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
        1: "../../../img/Mayhem/splash_arts/canvul.png",
        // 2: "../../../img/Mayhem/skin_splash_arts/darkflame blazen.png",
        // 3: "skin3.jpg",
        // 4: "skin4.jpg",
    };

    skinImg.src = skinImages[skinNumber];

    buttons.forEach(btn => btn.classList.remove("active"));

    event.target.classList.add("active");
}