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
const currentEquipmentStatus = [woodenSword, ironSword, steelSword, royalSword, worldSword, basicStaff, enchantedStaff, 
    aquamarineStaff, royalStaff, worldStaff, handAxe, combatAxe, greatAxe, royalAxe, worldAxe, goldMail, copperMail, 
    ironMail, mythrilMail, worldMail, silkRobe, LeatherRobe, enchantedRobe, mythrilRobe, worldRobe, stonePlate, 
    bronzePlate, steelPlate, mythrilPlate, worldPlate, redAgateAmulet, garnetAmulet, rubyAmulet, redDiamondAmulet,
    redWorldAmulet, azuriteAmulet, lapisLazuliAmulet, blueSapphireAmulet, blueDiamondAmulet, blueWorldAmulet,
    yellowTopazAmulet, citrineAmulet, amberAmulet, yellowDiamondAmulet, yellowWorldAmulet];
const currentItemsStatus = [];


//Functions
function load(_playerCharacter, _HP, _MP, _Attack, _Defense, _Speed, _woodenSword, _ironSword, _steelSword, _royalSword, 
    _worldSword, _basicStaff, _enchantedStaff, _aquamarineStaff, _royalStaff, _worldStaff, _handAxe, _combatAxe, _greatAxe,
    _royalAxe, _worldAxe, _goldMail, _copperMail, _ironMail, _mythrilMail, _worldMail, _silkRobe, _LeatherRobe, _enchantedRobe, 
    _mythrilRobe, _worldRobe, _stonePlate, _bronzePlate, _steelPlate, _mythrilPlate, _worldPlate, _redAgateAmulet, _garnetAmulet, 
    _rubyAmulet, _redDiamondAmulet, _redWorldAmulet, _azuriteAmulet, _lapisLazuliAmulet, _blueSapphireAmulet, _blueDiamondAmulet, 
    _blueWorldAmulet, _yellowTopazAmulet, _citrineAmulet, _amberAmulet, _yellowDiamondAmulet, _yellowWorldAmulet) {
    
    //character
    playerCharacter = isNaN(_playerCharacter) ? 0 : _playerCharacter;
    HP = isNaN(_HP) ? 0 : _HP;
    MP = isNaN(_MP) ? 0 : _MP;
    Attack = isNaN(_Attack) ? 0 : _Attack;
    Defense = isNaN(_Defense) ? 0 : _Defense;
    Speed = isNaN(_Speed) ? 0 : _Speed;

    //weapons
    woodenSword = isNaN(_woodenSword) ? 0 : _woodenSword;
    ironSword = isNaN(_ironSword) ? 0 : _ironSword;
    steelSword = isNaN(_steelSword) ? 0 : _steelSword;
    royalSword = isNaN(_royalSword) ? 0 : _royalSword;
    worldSword = isNaN(_worldSword) ? 0 : _worldSword;

    basicStaff = isNaN(_basicStaff) ? 0 : _basicStaff;
    enchantedStaff = isNaN(_enchantedStaff) ? 0 : _enchantedStaff;
    aquamarineStaff = isNaN(_aquamarineStaff) ? 0 : _aquamarineStaff;
    royalStaff = isNaN(_royalStaff) ? 0 : _royalStaff;
    worldStaff = isNaN(_worldStaff) ? 0 : _worldStaff;

    handAxe = isNaN(_handAxe) ? 0 : _handAxe;
    combatAxe = isNaN(_combatAxe) ? 0 : _combatAxe;
    greatAxe = isNaN(_greatAxe) ? 0 : _greatAxe;
    royalAxe = isNaN(_royalAxe) ? 0 : _royalAxe;
    worldAxe = isNaN(_worldAxe) ? 0 : _worldAxe;

    //armors
    goldMail = isNaN(_copperMail) ? 0 : _copperMail;
    copperMail = isNaN(_copperMail) ? 0 : _copperMail;
    ironMail = isNaN(_ironMail) ? 0 : _ironMail;
    mythrilMail = isNaN(_mythrilMail) ? 0 : _mythrilMail;
    worldMail = isNaN(_worldMail) ? 0 : _worldMail;

    silkRobe = isNaN(_silkRobe) ? 0 : _silkRobe;
    leatherRobe = isNaN(_LeatherRobe) ? 0 : _LeatherRobe;
    enchantedRobe = isNaN(_enchantedRobe) ? 0 : _enchantedRobe;
    mythrilRobe = isNaN(_mythrilRobe) ? 0 : _mythrilRobe;
    worldRobe = isNaN(_worldRobe) ? 0 : _worldRobe;

    stonePlate = isNaN(_stonePlate) ? 0 : _stonePlate;
    bronzePlate = isNaN(_bronzePlate) ? 0 : _bronzePlate;
    steelPlate = isNaN(_steelPlate) ? 0 : _steelPlate;
    mythrilPlate = isNaN(_mythrilPlate) ? 0 : _mythrilPlate;
    worldAxe = isNaN(_worldAxe) ? 0 : _worldAxe;

    //amulets
    redAgateAmulet = isNaN(_redAgateAmulet) ? 0 : _redAgateAmulet;
    garnetAmulet = isNaN(_garnetAmulet) ? 0 : _garnetAmulet;
    rubyAmulet = isNaN(_rubyAmulet) ? 0 : _rubyAmulet;
    redDiamondAmulet = isNaN(_redDiamondAmulet) ? 0 : _redDiamondAmulet;
    redWorldAmulet = isNaN(_redWorldAmulet) ? 0 : _redWorldAmulet;

    azuriteAmulet = isNaN(_azuriteAmulet) ? 0 : _azuriteAmulet;
    lapisLazuliAmulet = isNaN(_lapisLazuliAmulet) ? 0 : _lapisLazuliAmulet;
    blueSapphireAmulet = isNaN(_blueSapphireAmulet) ? 0 : _blueSapphireAmulet;
    blueDiamondAmulet = isNaN(_blueDiamondAmulet) ? 0 : _blueDiamondAmulet;
    blueWorldAmulet = isNaN(_blueWorldAmulet) ? 0 : _blueWorldAmulet;

    yellowTopazAmulet = isNaN(_yellowTopazAmulet) ? 0 : _yellowTopazAmulet;
    citrineAmulet = isNaN(_citrineAmulet) ? 0 : _citrineAmulet;
    amberAmulet = isNaN(_amberAmulet) ? 0 : _amberAmulet;
    yellowDiamondAmulet = isNaN(_yellowDiamondAmulet) ? 0 : _yellowDiamondAmulet;
    yellowWorldAmulet = isNaN(_yellowWorldAmulet) ? 0 : _yellowWorldAmulet;



}
/*
_redAgateAmulet, _garnetAmulet, _rubyAmulet, 
    _redDiamondAmulet,_redWorldAmulet, _azuriteAmulet, _lapisLazuliAmulet, _blueSapphireAmulet, _blueDiamondAmulet, 
    _blueWorldAmulet, _yellowTopazAmulet, _citrineAmulet, _amberAmulet, _yellowDiamondAmulet, _yellowWorldAmulet
*/

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

