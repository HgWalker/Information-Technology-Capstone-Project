//Declarations
let playerCharacter = ""; //Variable to set character

//Stats
let HP; //Variable to hold Health Points
let MP; //Variable to hold Mana Points
let Attack; //Variable to hold Attack Points
let Defense; //Variable to hold Defense Points
let Speed; //Variable to hold Speed Points

//Enemy stats
let slimeHP; //Variable to hold Health Points of the enemy type slime
let slimeMP; //Variable to hold Mana Points of the enemy type slime
let slimeAttack; //Variable to hold Attack Points of the enemy type slime
let slimeDefense; //Variable to hold Defense Points of the enemy type slime
let slimeSpeed; //Variable to hold Speed Points of the enemy type slime

let greatSlimeHP; //Variable to hold Health Points of the enemy type great slime
let greatSlimeMP; //Variable to hold Mana Points of the enemy type great slime
let greatSlimeAttack; //Variable to hold Attack Points of the enemy type great slime
let greatSlimeDefense; //Variable to hold Defense Points of the enemy type great slime
let greatSlimeSpeed; //Variable to hold Speed Points of the enemy type great slime

let direWolfHP; //Variable to hold Health Points of the enemy type dire wolf
let direWolfMP; //Variable to hold Mana Points of the enemy type dire wolf
let direWolfAttack; //Variable to hold Attack Points of the enemy type dire wolf
let direWolfDefense; //Variable to hold Defense Points of the enemy type dire wolf
let direWolfSpeed; //Variable to hold Speed Points of the enemy type dire wolf

let darkElfHP; //Variable to hold Health Points of the enemy type dark elf
let darkElfMP; //Variable to hold Mana Points of the enemy type dark elf
let darkElfAttack; //Variable to hold Attack Points of the enemy type dark elf
let darkElfDefense; //Variable to hold Defense Points of the enemy type dark elf
let darkElfSpeed; //Variable to hold Speed Points of the enemy type dark elf




//Items
let weaponName = "";
let weaponStats;
let armorName = "";
let armorStats;
let amuletName = "";
let amuletStats;


//Functions
function selectCharacterKai() {
    playerCharacter = "Kai";
    setKai();
}

function selectCharacterLuna() {
    playerCharacter = "Luna";
    setLuna();
}

function selectCharacterTerrin() {
    playerCharacter = "Terrin";
    setTerrin();
}

function setKai() {
    HP = 8;
    MP = 8;
    Attack = 10;
    Defense = 5;
    Speed = 5;
    
}

function setLuna() {
    HP = 5;
    MP = 10;
    Attack = 8;
    Defense = 5;
    Speed = 8;
    
}

function setTerrin() {
    HP = 8;
    MP = 5;
    Attack = 8;
    Defense = 10;
    Speed = 5;
    
}

//weapons
function swords() {
    //wood
    if(weaponName === "Wooden Sword") {
        weaponStats = 3;
    }

    //iron
    if(weaponName === "Iron Sword") {
        weaponStats = 6;
    }

    //Steel
    if(weaponName === "Steel Sword") {
        weaponStats = 9;
    }

    //Royal
    if(weaponName === "Royal Sword") {
        weaponStats = 12;
    }

    //World
    if(weaponName === "World Sword") {
        weaponStats = 15;
    }
}

function staff() {
    //Basic
    if(weaponName === "Basic Staff") {
        weaponStats = 2;
    }

    //Enchanted
    if(weaponName === "Enchanted Staff") {
        weaponStats = 4;
    }

    //Amber
    if(weaponName === "Aquamarine Staff") {
        weaponStats = 6;
    }

    //Royal
    if(weaponName === "Royal Staff") {
        weaponStats = 8;
    }

    //World
    if(weaponName === "World Staff") {
        weaponStats = 10;
    }
}

function Axes() {
    //Basic
    if(weaponName === "Hand Axe") {
        weaponStats = 1;
    }

    //Enchanted
    if(weaponName === "Combat Axe") {
        weaponStats = 2;
    }

    //Amber
    if(weaponName === "Great Axe") {
        weaponStats = 3;
    }

    //Royal
    if(weaponName === "Royal Axe") {
        weaponStats = 4;
    }

    //World
    if(weaponName === "World Axe") {
        weaponStats = 5;
    }
}

//Armors
function chainMail() {
    //Gold
    if(armorName === "Gold Mail") {
        armorStats = 2;
    }

    //Copper
    if(armorName === "Copper Mail") {
        armorStats = 4;
    }

    //Iron
    if(armorName === "Iron Mail") {
        armorStats = 6;
    }

    //Royal
    if(armorName === "Mythril Mail") {
        armorStats = 8;
    }

    //World
    if(armorName === "World Mail") {
        armorStats = 10;
    }
}


function Robes() {
    //Silk
    if(armorName === "Silk Robe") {
        armorStats = 1;
    }

    //Leather
    if(armorName === "Leather Robe") {
        armorStats = 2;
    }

    //Enchanted
    if(armorName === "Enchanted Robe") {
        armorStats = 3;
    }

    //Royal
    if(armorName === "Mythril Robe") {
        armorStats = 4;
    }

    //World
    if(armorName === "World Mail") {
        armorStats = 5;
    }
}

function Plate() {
    //Stone
    if(armorName === "Stone Plate") {
        armorStats = 3;
    }

    //Bronze
    if(armorName === "Bronze Plate") {
        armorStats = 6;
    }

    //Steel
    if(armorName === "Steel Plate") {
        armorStats = 9;
    }

    //Royal
    if(armorName === "Mythril Plate") {
        armorStats = 12;
    }

    //World
    if(armorName === "World Plate") {
        armorStats = 15;
    }
}


//amulets
function RedAmulets() {
    //Agate
    if(armorName === "Red Agate Amulet") {
        armorStats = 1;
    }

    //Garnet
    if(armorName === "Garnet Amulet") {
        armorStats = 2;
    }

    //Ruby
    if(armorName === "Ruby Amulet") {
        armorStats = 3;
    }

    //Red Diamond
    if(armorName === "Red Diamond Amulet") {
        armorStats = 4;
    }

    //World
    if(armorName === "Red World Amulet") {
        armorStats = 5;
    }
}

function BlueAmulets() {
    //Azurite
    if(armorName === "Azurite Amulet") {
        armorStats = 3;
    }

    //Lapis Lazuli
    if(armorName === "Lapis Lazuli Amulet") {
        armorStats = 6;
    }

    //Blue Sapphire
    if(armorName === "Blue Sapphire Amulet") {
        armorStats = 9;
    }

    //Blue Diamond
    if(armorName === "Blue Diamond Amulet") {
        armorStats = 12;
    }

    //World
    if(armorName === "Blue World Amulet") {
        armorStats = 15;
    }
}

function YellowAmulets() {
    //Agate
    if(armorName === "Yellow Topaz Amulet") {
        armorStats = 2;
    }

    //Garnet
    if(armorName === "Citrine Amulet") {
        armorStats = 4;
    }

    //Ruby
    if(armorName === "Amber Amulet") {
        armorStats = 6;
    }

    //Yellow Diamond
    if(armorName === "Yellow Diamond Amulet") {
        armorStats = 8;
    }

    //World
    if(armorName === "Yellow World Amulet") {
        armorStats = 10;
    }
}

//enemy stats
function setSlime() {
    slimeHP = 5;
    slimeMP = 10;
    slimeAttack = 5;
    slimeDefense = 8;
    slimeSpeed = 5;
    
}

function setGreatSlime() {
    greatSlimeHP = 10;
    greatSlimeMP = 10;
    greatSlimeAttack = 8;
    greatSlimeDefense = 10;
    greatSlimeSpeed = 4;
    
}

function setDireWolf() {
    direWolfHP = 8;
    direWolfMP = 5;
    direWolfAttack = 10;
    direWolfDefense = 5;
    direWolfSpeed = 10;
    
}

function setDarkElf() {
    darkElfHP = 8;
    darkElfMP = 10;
    darkElfAttack = 5;
    darkElfDefense = 5;
    darkElfSpeed = 8;
    
}


