function showAbility(ability) {
    const title = document.getElementById("ability-title");
    const description = document.getElementById("ability-description");
    const buttons = document.querySelectorAll(".ability-btn");

    const abilities = {
        "Q": {
            name: "Rocket Blast",
            desc: "Amari fires a rocket missile that deal damage to enemy. This ability can inflict the caster dealing damage to herself."
        },
        "W": {
            name: "Black Scythe",
            desc: "Amari slashes the enemy using the Black Scythe, dealing damage."
        },
        "E": {
            name: "Telekinesis",
            desc: "Amari controls the enemy movement, dealing damage for two consecutive rounds."
        },
        "R": {
            name: "Starspike",
            desc: "Amari spawns a starspike that embraces to an enemy, dealing damage."
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
        1: "../../../img/Mayhem/splash_arts/amari.png",
        // 2: "skin2.jpg",
        // 3: "skin3.jpg",
        // 4: "skin4.jpg",
    };

    skinImg.src = skinImages[skinNumber];

    buttons.forEach(btn => btn.classList.remove("active"));

    event.target.classList.add("active");
}