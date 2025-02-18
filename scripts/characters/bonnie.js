function showAbility(ability) {
    const title = document.getElementById("ability-title");
    const description = document.getElementById("ability-description");
    const buttons = document.querySelectorAll(".ability-btn");

    const abilities = {
        "P": {
            name: "Sewing Process",
            desc: "For every ability casted, gains +1 Needle Stack (25% chance of obtaining). If the stack reached 3 counts, the next ability will empower, dealing more damage and stuns for 1 round by 100% chance.\n\nIf your next ability is empowered, it will show the upgraded ability names."
        },
        "Q": {
            name: "Cutline / Tied Up",
            desc: "Cutline: Strikes using the scissors, dealing damage.\n\nTied Up: Ties up by the string, dealing more damage and consumes collected +1 Needle Stack."
        },
        "W": {
            name: "Dance Within / Thread Dance",
            desc: "Dance Within: Dances with the enemy, dealing damage and restores +3-7 HP.\n\nThread Dance: Ties up the enemy with his self-moving string, dancing to death dealing damage and restores +8-15 HP."
        },
        "E": {
            name: "Needle Shot / Ribbon Strike",
            desc: "Needle Shot: Fires two needles, dealing damage for two consecutive rounds.\n\nRibbon Strike: Shackles the enemy by a ribbon, tying them up dealing damage for three consecutive rounds."
        },
        "R": {
            name: "Loose Thread / OMEGA!",
            desc: "Loose Thread: Explodes a piece of string, dealing damage to enemy. This ability can inflict the caster dealing damage to herself.\n\nOMEGA!: Bonnie unleashes his inner power, releasing a gigantic focused energy to enemy dealing damage. This ability can inflict the caster dealing damage to herself."
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