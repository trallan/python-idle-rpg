class Player {
    constructor(name, health, mana, level, experience, gold) {
        this.name = name;
        this.health = health;
        this.mana = mana;
        this.level = level;
        this.experience = experience;
        this.gold = gold;

        this.skills = {
            magic: 0,
            sword: 0,
            axe: 0,
            club: 0,
            distance: 0
        };
    }
};

class Enemy {
    constructor(name, health, mana, attack, loot, zones){
        this.name = name;
        this.health = health;
        this.mana = mana;
        this.attack = attack;
        this.loot = loot;
        this.zones = zones;
    }
}

class Item {
    constructor(name, atk, def, slot, levelReq){
        this.name = name;
        this.atk = atk;
        this.def = def;
        this.slot = slot;
        this.levelReq = levelReq;
    }
}

// Create items
let woodenSword = new Item("Wooden Sword", 10, 0, "hand", 5);
let woodenArmor = new Item("Wooden Armor", 0, 5, "chest", 5);

// Create a player
let newPlayer = new Player("Player", 100, 0, 1, 0, 0);

// Create enemies
let goblin = new Enemy("Goblin", 50, 0, 5, [{gold: 10}, {items: [woodenSword, woodenArmor]}], ["woods"]);

// Store enemies in a list
let enemies = [goblin];


// Initiate player to the browser
function loadPlayer(){
    document.querySelector("#player-name").textContent = newPlayer.name;
    document.querySelector("#player-health").textContent = newPlayer.health;
    document.querySelector("#player-mana").textContent = newPlayer.mana;
    document.querySelector("#player-level").textContent = newPlayer.level;
    document.querySelector("#player-experience").textContent = newPlayer.experience;
    document.querySelector("#player-gold").textContent = newPlayer.gold;
}

// When entering a zone, load enemies for that zone
function loadEnemyList(currentZone){
    const zoneEnemies = enemies.filter(enemy => enemy.zones.includes(currentZone));
    const li = document.createElement("li");
    const button = document.createElement("button");
    let enemyName = "";

    zoneEnemies.forEach(enemy => {
        enemyName = enemy.name;
    })

}






