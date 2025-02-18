function showAbility(ability) {
    const title = document.getElementById("ability-title");
    const description = document.getElementById("ability-description");
    const buttons = document.querySelectorAll(".ability-btn");

    const abilities = {
        "Q": {
            name: "Captive Blossom",
            desc: "Throws a sticky blossom bomb, and detonates dealing damage. This ability can inflict the caster dealing damage to herself."
        },
        "W": {
            name: "Flurry Petals",
            desc: "Rapidly throws 3 sharp petals dealing damage for three consecutive rounds."
        },
        "E": {
            name: "Battle Cry",
            desc: "Raises compassion towards battle, gaining morale. If morale reaches 80% or more, the next ability will deal more damage."
        },
        "R": {
            name: "Red Spear",
            desc: "Throws a red large spear dealing damage."
        }
    };

    title.innerText = abilities[ability].name;
    description.innerText = abilities[ability].desc;

    buttons.forEach(btn => btn.classList.remove("active"));

    // Set the active button
    event.target.classList.add("active");
}

function showSkin(skinNumber) {
    const skinImg = document.getElementById("skin-img");
    const buttons = document.querySelectorAll(".skin-btn");

    const skinImages = {
        1: "../../../img/Mayhem/splash_arts/arra.png",
        // 2: "skin2.jpg",
        // 3: "skin3.jpg",
        // 4: "skin4.jpg",
    };

    skinImg.src = skinImages[skinNumber];

    buttons.forEach(btn => btn.classList.remove("active"));

    event.target.classList.add("active");
}