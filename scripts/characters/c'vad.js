function showAbility(ability) {
    const title = document.getElementById("ability-title");
    const description = document.getElementById("ability-description");
    const buttons = document.querySelectorAll(".ability-btn");

    const abilities = {
        "Q": {
            name: "Snowball Barrage",
            desc: "Hurls a snowball, dealing damage."
        },
        "W": {
            name: "Rock Throw",
            desc: "Lets you pick another set of ability. Each sub-ability deals damage on their own.\n\n1: Pebble deals small amount of damage in small amount of energy.\n\n2: Stone deals good amount of damage in good amount of energy.\n\n3: Boulder deals great amount of damage, and stuns for one round by 10% chance."
        },
        "E": {
            name: "Blizzard",
            desc: "Summons a blizzard, dealing damage for two consecutive rounds."
        },
        "R": {
            name: "Avalanche",
            desc: "Stomps the ground, causing avalanche dealing damage to enemy. This ability can inflict the caster dealing damage to himself."
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
        1: "../../../img/Mayhem/splash_arts/c'vad.png",
        // 2: "../../../img/Mayhem/skin_splash_arts/darkflame blazen.png",
        // 3: "skin3.jpg",
        // 4: "skin4.jpg",
    };

    skinImg.src = skinImages[skinNumber];

    buttons.forEach(btn => btn.classList.remove("active"));

    event.target.classList.add("active");
}