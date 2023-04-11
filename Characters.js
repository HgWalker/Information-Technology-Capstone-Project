//Declarations
let playerCharacter = ""; //Variable to set character

//Stats
let HP; //Variable to hold Health Points
let MP; //Variable to hold Mana Points
let Attack; //Variable to hold Attack Points
let Defense; //Variable to hold Defense Points
let Speed; //Variable to hold Speed Points

//Equipment
let weaponName = "";
let weaponStats;
let armorName = "";
let armorStats;
let amuletName = "";
let amuletStats;

//Equipment status identfiers
let woodenSword = 0;
let ironSword = 0;
let steelSword = 0;
let royalSword = 0;
let worldSword = 0;

let basicStaff = 0;
let enchantedStaff = 0;
let aquamarineStaff = 0;
let royalStaff = 0;
let worldStaff = 0;

let handAxe = 0;
let combatAxe = 0;
let greatAxe = 0;
let royalAxe = 0;
let worldAxe = 0;

//armor status
let goldMail = 0;
let copperMail = 0;
let ironMail = 0;
let mythrilMail = 0;
let worldMail = 0;

let silkRobe = 0;
let leatherRobe = 0;
let enchantedRobe = 0;
let mythrilRobe = 0;
let worldRobe = 0;

let stonePlate = 0;
let bronzePlate = 0;
let steelPlate = 0;
let mythrilPlate = 0;
let worldPlate = 0;

//amulet status
let redAgateAmulet = 0;
let garnetAmulet = 0;
let rubyAmulet = 0;
let redDiamondAmulet = 0;
let redWorldAmulet = 0;

let azuriteAmulet = 0;
let lapisLazuliAmulet = 0;
let blueSapphireAmulet = 0;
let blueDiamondAmulet = 0;
let blueWorldAmulet = 0;

let yellowTopazAmulet = 0;
let citrineAmulet = 0;
let amberAmulet = 0;
let yellowDiamondAmulet = 0;
let yellowWorldAmulet = 0;

//Menu arrays
const currentEquipmentStatus = [woodenSword, ironSword, royalSword, worldSword, basicStaff, enchantedStaff, 
    aquamarineStaff, royalStaff, worldStaff, handAxe, combatAxe, greatAxe, royalAxe, worldAxe, goldMail, copperMail, 
    ironMail, mythrilMail, worldMail, silkRobe, LeatherRobe, enchantedRobe, mythrilRobe, worldRobe, stonePlate, 
    bronzePlate, steelPlate, mythrilPlate, worldPlate, redAgateAmulet, garnetAmulet, rubyAmulet, redDiamondAmulet,
    redWorldAmulet, azuriteAmulet, lapisLazuliAmulet, blueSapphireAmulet, blueDiamondAmulet, blueWorldAmulet,
    yellowTopazAmulet, citrineAmulet, amberAmulet, yellowDiamondAmulet, yellowWorldAmulet];
const currentItemsStatus = [];


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
    if(armorName === "World Robe") {
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
    if(amuletName === "Red Agate Amulet") {
        amuletStats = 1;
    }

    //Garnet
    if(amuletName === "Garnet Amulet") {
        amuletStats = 2;
    }

    //Ruby
    if(amuletName === "Ruby Amulet") {
        amuletStats = 3;
    }

    //Red Diamond
    if(amuletName === "Red Diamond Amulet") {
        amuletStats = 4;
    }

    //World
    if(amuletName === "Red World Amulet") {
        amuletStats = 5;
    }
}

function BlueAmulets() {
    //Azurite
    if(amuletName === "Azurite Amulet") {
        amuletStats = 3;
    }

    //Lapis Lazuli
    if(amuletName === "Lapis Lazuli Amulet") {
        amuletStats = 6;
    }

    //Blue Sapphire
    if(amuletName === "Blue Sapphire Amulet") {
        amuletStats = 9;
    }

    //Blue Diamond
    if(amuletName === "Blue Diamond Amulet") {
        amuletStats = 12;
    }

    //World
    if(amuletName === "Blue World Amulet") {
        amuletStats = 15;
    }
}

function YellowAmulets() {
    //Agate
    if(amuletName === "Yellow Topaz Amulet") {
        amuletStats = 2;
    }

    //Garnet
    if(amuletName === "Citrine Amulet") {
        amuletStats = 4;
    }

    //Ruby
    if(amuletName === "Amber Amulet") {
        amuletStats = 6;
    }

    //Yellow Diamond
    if(amuletName === "Yellow Diamond Amulet") {
        amuletStats = 8;
    }

    //World
    if(amuletName === "Yellow World Amulet") {
        amuletStats = 10;
    }
}


//character menu
function addObject {
    for(let i = 0; i < currentEquipmentStatus.length; i++) {
        if(currentEquipmentStatus[i] === 1) {

        }
    }
}

