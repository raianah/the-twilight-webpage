function showAbility(ability) {
    const title = document.getElementById("ability-title");
    const description = document.getElementById("ability-description");
    const buttons = document.querySelectorAll(".ability-btn");

    const abilities = {
        "P": {
            name: "Cursed Fortune",
            desc: "Lets you earn +Luck Points for unlocking Scavenge."
        },
        "Q": {
            name: "Sharp Edge",
            desc: "Stabs the enemy, dealing damage for two consecutive rounds, and gains +Luck Points."
        },
        "W": {
            name: "Cursed Artifact",
            desc: "Releases the curse to harm, dealing damage to the enemy and gains +Luck Points. This ability can inflict the caster dealing damage to himself."
        },
        "E": {
            name: "Scavenge",
            desc: "Consumes collected Luck Points to obtain one of the following artifacts: Health Potion, Elixir Potion, and Moonlight Amulet.\n\nHealth Potion requires atleast 35 to obtain.\nElixir Potion requires atleast 65 Luck Points to obtain.\nMoonlight Amulet requires atleast 80 Luck Points to obtain."
        },
        "R": {
            name: "Sand Blow",
            desc: "Blows a handful of sand, dealing damage and loses enemy luck points. This ability can inflict the caster dealing damage to himself."
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
        1: "../../../img/Mayhem/splash_arts/ezio.png",
        // 2: "../../../img/Mayhem/skin_splash_arts/soulblade demona.png",
        // 3: "skin3.jpg",
        // 4: "skin4.jpg",
    };

    skinImg.src = skinImages[skinNumber];

    buttons.forEach(btn => btn.classList.remove("active"));

    event.target.classList.add("active");
}