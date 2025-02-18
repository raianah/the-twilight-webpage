function showAbility(ability) {
    const title = document.getElementById("ability-title");
    const description = document.getElementById("ability-description");
    const buttons = document.querySelectorAll(".ability-btn");

    const abilities = {
        "Q": {
            name: "Formation",
            desc: "Canvul and his little shards collides, dealing damage to enemy and inflicts +1 Little Shards. This ability can inflict the caster dealing damage to himself."
        },
        "W": {
            name: "Shard Rush",
            desc: "Canvul orders his little shards, hurling themselves to the enemy dealing damage for two consecutive rounds and inflicts +1 Little Shards."
        },
        "E": {
            name: "Defensive Mirror",
            desc: "Canvul places his defensive little shard, creating a barrier that generates +1 Evasiveness."
        },
        "R": {
            name: "Contract",
            desc: "Canvul retracts all inflicted little shards, dealing damage based on the inflicted Little Shards and heals himself by 20% of total inflicted damage."
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