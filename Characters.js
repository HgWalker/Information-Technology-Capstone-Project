//Declarations
let playerCharacter; //Variable to set character
let walkInterval;

//move variables
let moveingLeftRight = 0;
let leftHold;
let rightHold;

let moveingUpDown = 0;
let upHold;
let downHold;

//Stats
let Hp; //Variable to hold Health Points
let Mp; //Variable to hold Mana Points
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
/*
#LunaImg {
    position: absolute;
    margin-top: 330px;
    right: 75%;
}

#TerrinImg {
    position: absolute;
    margin-top: 330px;
    right: 75%;
}
*/
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

//Potions
let HpPotion = 0;
let MpPotion = 0;

//Charms
let CharmHaste = 0;
let CharmStrength = 0;

//Wand
let ShieldWand = 0; 

/*
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

//
let golemHP; //Variable to hold Health Points of the enemy type golem
let golemMP; //Variable to hold Mana Points of the enemy type golem
let golemAttack; //Variable to hold Attack Points of the enemy type golem
let golemDefense; //Variable to hold Defense Points of the enemy type golem
let golemSpeed; //Variable to hold Speed Points of the enemy type golem

let SolarHP; //Variable to hold Health Points of the enemy type Solar
let SolarMP; //Variable to hold Mana Points of the enemy type Solar
let SolarAttack; //Variable to hold Attack Points of the enemy type Solar
let SolarDefense; //Variable to hold Defense Points of the enemy type Solar
let SolarSpeed; //Variable to hold Speed Points of the enemy type Solar

let VanHP; //Variable to hold Health Points of the enemy type dark elf
let VanMP; //Variable to hold Mana Points of the enemy type dark elf
let VanAttack; //Variable to hold Attack Points of the enemy type dark elf
let VanDefense; //Variable to hold Defense Points of the enemy type dark elf
let VanSpeed; //Variable to hold Speed Points of the enemy type dark elf

let IgnessHP; //Variable to hold Health Points of the enemy type griffin
let IgnessMP; //Variable to hold Mana Points of the enemy type griffin
let IgnessAttack; //Variable to hold Attack Points of the enemy type griffin
let IgnessDefense; //Variable to hold Defense Points of the enemy type griffin
let IgnessSpeed; //Variable to hold Speed Points of the enemy type griffin


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

function setGolem() {
    GolemHP = 5;
    GolemMP = 8;
    GolemAttack = 10;
    GolemDefense = 10;
    GolemSpeed = 5;
    
}

function setHydra() {
    HydraHP = 10;
    HydraMP = 10;
    HydraAttack = 10;
    HydraDefense = 10;
    HydraSpeed = 10;
    
}

function setGriffin() {
    griffinHP = 5;
    griffinMP = 10;
    griffinAttack = 8;
    griffinDefense = 5;
    griffinSpeed = 10;

}

//Bosses
function setVan() {
    VanHP = 15;
    VanMP = 15;
    VanAttack = 15;
    VanDefense = 15;
    VanSpeed = 15;
    
}

function setSolar() {
    SolarHP = 20;
    SolarMP = 20;
    SolarAttack = 20;
    SolarDefense = 20;
    SolarSpeed = 20;
    
}

function setIgness() {
    IgnessHP = 25;
    IgnessMP = 25;
    IgnessAttack = 25;
    IgnessDefense = 25;
    IgnessSpeed = 25;

}
*/

//enemy stats
   let slimeHP = 5;
   let slimeMP = 10;
   let slimeAttack = 5;
   let slimeDefense = 8;
   let slimeSpeed = 5;
   /*

   let greatSlimeHP = 10;
   let greatSlimeMP = 10;
   let greatSlimeAttack = 8;
   let greatSlimeDefense = 10;
   let greatSlimeSpeed = 4;
    
   let direWolfHP = 8;
   let direWolfMP = 5;
   let direWolfAttack = 10;
   let direWolfDefense = 5;
   let direWolfSpeed = 10;

   let darkElfHP = 8;
   let darkElfMP = 10;
   let darkElfAttack = 5;
   let darkElfDefense = 5;
   let darkElfSpeed = 8;

   let GolemHP = 5;
   let GolemMP = 8;
   let GolemAttack = 10;
   let GolemDefense = 10;
   let GolemSpeed = 5;

   let HydraHP = 10;
   let HydraMP = 10;
   let HydraAttack = 10;
   let HydraDefense = 10;
   let HydraSpeed = 10;
    
   let griffinHP = 5;
   let griffinMP = 10;
   let griffinAttack = 8;
   let griffinDefense = 5;
   let griffinSpeed = 10;

   let VanHP = 15;
   let VanMP = 15;
   let VanAttack = 15;
   let VanDefense = 15;
   let VanSpeed = 15;
    
   let SolarHP = 20;
   let SolarMP = 20;
   let SolarAttack = 20;
   let SolarDefense = 20;
   let SolarSpeed = 20;
    
   let IgnessHP = 25;
   let IgnessMP = 25;
   let IgnessAttack = 25;
   let IgnessDefense = 25;
   let IgnessSpeed = 25;

*/

//Menu arrays
const currentEquipmentStatus = [woodenSword, ironSword, steelSword, royalSword, worldSword, basicStaff, enchantedStaff, 
    aquamarineStaff, royalStaff, worldStaff, handAxe, combatAxe, greatAxe, royalAxe, worldAxe, goldMail, copperMail, 
    ironMail, mythrilMail, worldMail, silkRobe, leatherRobe, enchantedRobe, mythrilRobe, worldRobe, stonePlate, 
    bronzePlate, steelPlate, mythrilPlate, worldPlate, redAgateAmulet, garnetAmulet, rubyAmulet, redDiamondAmulet,
    redWorldAmulet, azuriteAmulet, lapisLazuliAmulet, blueSapphireAmulet, blueDiamondAmulet, blueWorldAmulet,
    yellowTopazAmulet, citrineAmulet, amberAmulet, yellowDiamondAmulet, yellowWorldAmulet];
const currentItemsStatus = [];


//Functions 
$(document).ready(function()
{
    process();
});

function load(_playerCharacter, _Hp, _Mp, _Attack, _Defense, _Speed, _woodenSword, _ironSword, _steelSword, _royalSword, 
    _worldSword, _basicStaff, _enchantedStaff, _aquamarineStaff, _royalStaff, _worldStaff, _handAxe, _combatAxe, _greatAxe,
    _royalAxe, _worldAxe, _goldMail, _copperMail, _ironMail, _mythrilMail, _worldMail, _silkRobe, _leatherRobe, _enchantedRobe, 
    _mythrilRobe, _worldRobe, _stonePlate, _bronzePlate, _steelPlate, _mythrilPlate, _worldPlate, _redAgateAmulet, _garnetAmulet, 
    _rubyAmulet, _redDiamondAmulet, _redWorldAmulet, _azuriteAmulet, _lapisLazuliAmulet, _blueSapphireAmulet, _blueDiamondAmulet, 
    _blueWorldAmulet, _yellowTopazAmulet, _citrineAmulet, _amberAmulet, _yellowDiamondAmulet, _yellowWorldAmulet) {
    
    console.log("load save");
    //character
    playerCharacter = isNaN(_playerCharacter) ? 0 : _playerCharacter;
    Hp = isNaN(_Hp) ? 0 : _Hp;
    Mp = isNaN(_Mp) ? 0 : _Mp;
    Attack = isNaN(_Attack) ? 0 : _Attack;
    Defense = isNaN(_Defense) ? 0 : _Defense;
    Speed = isNaN(_Speed) ? 0 : _Speed;
    console.log("playerCharacter is "+ playerCharacter);

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
    leatherRobe = isNaN(_leatherRobe) ? 0 : _leatherRobe;
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


        console.log(playerCharacter);

    setTheCharacter();
    //set image
    //if(playerCharacter)



}
/*
_redAgateAmulet, _garnetAmulet, _rubyAmulet, 
    _redDiamondAmulet,_redWorldAmulet, _azuriteAmulet, _lapisLazuliAmulet, _blueSapphireAmulet, _blueDiamondAmulet, 
    _blueWorldAmulet, _yellowTopazAmulet, _citrineAmulet, _amberAmulet, _yellowDiamondAmulet, _yellowWorldAmulet
*/

function selectCharacterKai() {
    playerCharacter = 1;
    setKai();
}

function selectCharacterLuna() {
    playerCharacter = 2;
    setLuna();
}

function selectCharacterTerrin() {
    playerCharacter = 3;
    setTerrin();
}

function setKai() {
    Hp = 8;
    Mp = 8;
    Attack = 10;
    Defense = 5;
    Speed = 5;
    console.log("speed is " + Speed)
    save();
    
}

function setLuna() {
    Hp = 5;
    Mp = 10;
    Attack = 8;
    Defense = 5;
    Speed = 8;
    save();
    
}

function setTerrin() {
    Hp = 8;
    Mp = 5;
    Attack = 8;
    Defense = 10;
    Speed = 5;
    save();
    
}

function setTheCharacter() {
    if(playerCharacter === 1) {
        $("#LunaImg").css("visibility", "hidden");
        $("#TerrinImg").css("visibility", "hidden");
        $("#kaiImg").css("visibility", "visible");
    }

    if(playerCharacter === 2) {
        $("#kaiImg").css("visibility", "hidden");
        $("#TerrinImg").css("visibility", "hidden");
        $("#LunaImg").css("visibility", "visible");
        
        
    }

    if(playerCharacter === 3) {
        $("#kaiImg").css("visibility", "hidden");
        $("#LunaImg").css("visibility", "hidden");
        $("#TerrinImg").css("visibility", "visible");
    }
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

//Items 
function potionsUsed() {
    if(HpPotion === 2) {
        Hp = Hp + 5
    }

    if(MpPotion === 2) {
        Mp = Mp + 5
    }
}

function charmsUsed() {
    if(CharmHaste === 2) {
        Speed = Speed + 5
    }

    if(CharmStrength === 2) {
        Attack = Attack + 5
    }
}

function wandUsed() {
    if(ShieldWand === 2) {
        Defense = Defense + 5
    }

}



//character menu
function showStats() {
    console.log("Stats");
    $("#HealthStatus").text("Health " + Hp); 
    $("#ManaStatus").text("Mana " + Mp);
    $("#AttackStatus").text("Attack " + Attack);
    $("#DefenseStatus").text("Defense " + Defense);
    $("#SpeedStatus").text("Speed " + Speed);

    $("#HealtHpotion").text("Health Potion");
    $("#ManaPotion").text("Mana Potion");
    $("#AttackCharm").text("Strength Charm");
    $("#DefenseWand").text("Shield Wand");
    $("#SpeedCharm").text("Haste Charm");

}


function addObject() {
    for(let i = 0; i < currentEquipmentStatus.length; i++) {
        if(currentEquipmentStatus[i] === 1) {

        }
    }
}


function save() {
    console.log("saving");
    //Save cookies
    document.cookie = `playerCharacter=${playerCharacter}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    //Player stats
    document.cookie = `Hp=${Hp}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `Mp=${Mp}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `Attack=${Attack}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `Defense=${Defense}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `Speed=${Speed}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    console.log("Defense is " + Defense)
    
    //weapons
    document.cookie = `weaponName=${weaponName}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `weaponStats=${weaponStats}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    //armor
    document.cookie = `armorName=${armorName}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `armorStats=${armorStats}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    //amulet
    document.cookie = `amuletName=${amuletName}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `amuletStats=${amuletStats}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    //Equipment status identfiers
    //weapons
    document.cookie = `woodenSword=${woodenSword}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `ironSword=${ironSword}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `steelSword=${steelSword}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `royalSword=${royalSword}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `worldSword=${worldSword}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    document.cookie = `basicStaff=${basicStaff}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `enchantedStaff=${enchantedStaff}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `aquamarineStaff=${aquamarineStaff}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `royalStaff=${royalStaff}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `worldStaff=${worldStaff}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    document.cookie = `handAxe=${handAxe}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `combatAxe=${combatAxe}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `greatAxe=${greatAxe}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `royalAxe=${royalAxe}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `worldAxe=${worldAxe}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    //armors
    document.cookie = `goldMail=${goldMail}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `copperMail=${copperMail}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `ironMail=${ironMail}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `mythrilMail=${mythrilMail}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `worldMail=${worldMail}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    document.cookie = `silkRobe=${silkRobe}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `leatherRobe=${leatherRobe}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `enchantedRobe=${enchantedRobe}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `mythrilRobe=${mythrilRobe}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `worldRobe=${worldRobe}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    document.cookie = `stonePlate=${stonePlate}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `bronzePlate=${bronzePlate}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `steelPlate=${steelPlate}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `mythrilPlate=${mythrilPlate}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `worldPlate=${worldPlate}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    //amulets
    document.cookie = `redAgateAmulet=${redAgateAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `garnetAmulet=${garnetAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `rubyAmulet=${rubyAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `redDiamondAmulet=${redDiamondAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `redWorldAmulet=${redWorldAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    document.cookie = `azuriteAmulet=${azuriteAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `lapisLazuliAmulet=${lapisLazuliAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `blueSapphireAmulet=${blueSapphireAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `blueDiamondAmulet=${blueDiamondAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `blueWorldAmulet=${blueWorldAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    document.cookie = `yellowTopazAmulet=${yellowTopazAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `citrineAmulet=${citrineAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `amberAmulet=${amberAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `yellowDiamondAmulet=${yellowDiamondAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `yellowWorldAmulet=${yellowWorldAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
}

function getCookie(name) {
    return document.cookie.split("; ").find((x) => x.startsWith(`${name}`))?.split("=")[1];
}

function process() {
    let playerCharacter = Number(getCookie("playerCharacter"));
    
    let Hp = Number(getCookie("Hp"));
    let Mp = Number(getCookie("Mp"));
    let Attack = Number(getCookie("Attack"));
    Defense = Number(getCookie("Defense"));
    let Speed = Number(getCookie("Speed"));

    console.log(Hp);

    //equipment
    let weaponName = getCookie("weaponName");
    let weaponStats = Number(getCookie("weaponStats"));

    let armorName = getCookie("armorName");
    let armorStats = Number(getCookie("armorStats"));

    let amuletName = getCookie("amuletName");
    let amuletStats = Number(getCookie("amuletStats"));

    //weapons
    let woodenSword = Number(getCookie("woodenSword"));
    let ironSword = Number(getCookie("ironSword"));
    let steelSword = Number(getCookie("steelSword"));
    let royalSword = Number(getCookie("royalSword"));
    let worldSword = Number(getCookie("worldSword"));

    let basicStaff = Number(getCookie("basicStaff"));
    let enchantedStaff = Number(getCookie("enchantedStaff"));
    let aquamarineStaff = Number(getCookie("aquamarineStaff"));
    let royalStaff = Number(getCookie("royalStaff"));
    let worldStaff = Number(getCookie("worldStaff"));

    let handAxe = Number(getCookie("handAxe"));
    let combatAxe = Number(getCookie("combatAxe"));
    let greatAxe = Number(getCookie("greatAxe"));
    let royalAxe = Number(getCookie("royalAxe"));
    let worldAxe = Number(getCookie("worldAxe"));


    //armors
    let goldMail = Number(getCookie("goldMail"));
    let copperMail = Number(getCookie("copperMail"));
    let iron = Number(getCookie("iron"));
    let mythrilMail = Number(getCookie("mythrilMail"));
    let worldMail = Number(getCookie("worldMail"));

    let leatherRobe = Number(getCookie("leatherRobe"));
    let silkRobe = Number(getCookie("silkRobe"));
    let enchantedRobe = Number(getCookie("enchantedRobe"));
    let mythrilRobe = Number(getCookie("mythrilRobe"));
    let worldRobe = Number(getCookie("worldRobe"));

    let stonePlate = Number(getCookie("stonePlate"));
    let bronzePlate = Number(getCookie("bronzePlate"));
    let steelPlate = Number(getCookie("steelPlate"));
    let mythrilPlate = Number(getCookie("mythrilPlate"));
    let worldPlate = Number(getCookie("worldPlate"));


    //amulets
    let redAgateAmulet = Number(getCookie("redAgateAmulet"));
    let garnetAmulet = Number(getCookie("garnetAmulet"));
    let rubyAmulet = Number(getCookie("rubyAmulet"));
    let redDiamondAmulet = Number(getCookie("redDiamondAmulet"));
    let redWorldAmulet = Number(getCookie("redWorldAmulet"));

    let azuriteAmulet = Number(getCookie("azuriteAmulet"));
    let lapisLazuliAmulet = Number(getCookie("lapisLazuliAmulet"));
    let blueSapphireAmulet = Number(getCookie("blueSapphireAmulet"));
    let blueDiamondAmulet = Number(getCookie("blueDiamondAmulet"));
    let blueWorldAmulet = Number(getCookie("blueWorldAmulet"));

    let yellowTopazAmulet = Number(getCookie("yellowTopazAmulet"));
    let citrineAmulet = Number(getCookie("citrineAmulet"));
    let amberAmulet = Number(getCookie("amberAmulet"));
    let yellowDiamondAmulet = Number(getCookie("yellowDiamondAmulet"));
    let yellowWorldAmulet = Number(getCookie("yellowWorldAmulet"));


load(playerCharacter, Hp, Mp, Attack, Defense, Speed, woodenSword, ironSword, steelSword, royalSword, 
    worldSword, basicStaff, enchantedStaff, aquamarineStaff, royalStaff, worldStaff, handAxe, combatAxe, greatAxe, 
    royalAxe, worldAxe, goldMail, copperMail, ironMail, mythrilMail, worldMail, silkRobe, leatherRobe, enchantedRobe, 
    mythrilRobe, worldRobe, stonePlate, bronzePlate, steelPlate, mythrilPlate, worldPlate, redAgateAmulet, garnetAmulet, 
    rubyAmulet, redDiamondAmulet, redWorldAmulet, azuriteAmulet, lapisLazuliAmulet, blueSapphireAmulet, blueDiamondAmulet, 
    blueWorldAmulet, yellowTopazAmulet, citrineAmulet, amberAmulet, yellowDiamondAmulet, yellowWorldAmulet); 
}
/*
function triggerUpMovement() {
    walkInterval = window.setInterval(moveImageUp, 300);
    
}
*/
function moveImageUp() {
    //let audio = new Audio('footsteps-1.mp3');
    //audio.play();
    
    /*
    let imgKai = document.getElementById("kaiImg");
    let xKai;
    let yKai;
    
    let imgLuna = document.getElementById("LunaImg");
    let xLuna;
    let yLuna;

    let imgTerrin = document.getElementById("TerrinImg");
    let xTerrin;
    let yTerrin;

    
    //kai move
    if(playerCharacter === "Kai") {
        imgKai.style.top = yKai + 5;
    }  */
    //let currntpostion = document.getElementById("playerSprites").style.objectPosition;

    //kai
    if(playerCharacter === 1) {
        moveingUpDown = moveingUpDown - 5;
        upHold = "" + moveingUpDown;
        let currntpostion = document.getElementById("kaiImg");
        currntpostion.style.position = "absolute";
        currntpostion.style.top = upHold + "%";
    }
    if(playerCharacter === 2) {
        moveingUpDown = moveingUpDown - 5;
        upHold = "" + moveingUpDown;
        let currntpostion = document.getElementById("LunaImg");
        currntpostion.style.position = "absolute";
        currntpostion.style.top = upHold + "%";
    }
    if(playerCharacter === 3) {
        moveingUpDown = moveingUpDown - 5;
        upHold = "" + moveingUpDown;
        let currntpostion = document.getElementById("TerrinImg");
        currntpostion.style.position = "absolute";
        currntpostion.style.top = upHold + "%";
    }
    

    //$("#playerSprites").css({"Position":"absolute","left":"-45%"});
    

    //document.getElementById("kaiImg").style.right() = currntpostion + 5;

    /*
    //luna move
    if(playerCharacter === "Luna") {
        imgLuna.style.top = yLuna + 5;
    }

    //terrin move
    if(playerCharacter === "Terrin") {
        imgTerrin.style.top = yTerrin + 5;
    }

    */
}

function moveImageDown() {
    if(playerCharacter === 1) {
        moveingUpDown = moveingUpDown + 5;
        downHold = "" + moveingUpDown;
        let currntpostion = document.getElementById("kaiImg");
        currntpostion.style.position = "absolute";
        currntpostion.style.top = downHold + "%";
    }
    if(playerCharacter === 1) {
        moveingUpDown = moveingUpDown + 5;
        downHold = "" + moveingUpDown;
        let currntpostion = document.getElementById("LunaImg");
        currntpostion.style.position = "absolute";
        currntpostion.style.top = downHold + "%";
    }
    if(playerCharacter === 1) {
        moveingUpDown = moveingUpDown + 5;
        downHold = "" + moveingUpDown;
        let currntpostion = document.getElementById("TerrinImg");
        currntpostion.style.position = "absolute";
        currntpostion.style.top = downHold + "%";
    }
    
    /*
    let audio = new Audio('footsteps.wav');
    audio.play();

    let imgKai = document.getElementById("kaiImg");
    let xKai;
    let yKai;

    let imgLuna = document.getElementById("LunaImg");
    let xLuna;
    let yLuna;

    let imgTerrin = document.getElementById("TerrinImg");
    let xTerrin;
    let yTerrin;

    //kai move
    if(playerCharacter === "Kai") {
        imgKai.style.top = yKai - 5;
    }

    //luna move
    if(playerCharacter === "Terrin") {
        imgTerrin.style.top = yTerrin - 5;
    } */

}

function moveImageRight() {
    let currntpostion;
    if(playerCharacter === 1) {
        moveingLeftRight = moveingLeftRight + 5;
        rightHold = "" + moveingLeftRight;
        currntpostion = document.getElementById("kaiImg");
        currntpostion.style.position = "absolute";
        currntpostion.style.left = rightHold + "%";
    }
    if(playerCharacter === 2) {
        moveingLeftRight = moveingLeftRight + 5;
        rightHold = "" + moveingLeftRight;
        currntpostion = document.getElementById("LunaImg");
        currntpostion.style.position = "absolute";
        currntpostion.style.left = rightHold + "%";
    }
    if(playerCharacter === 3) {
        moveingLeftRight = moveingLeftRight + 5;
        rightHold = "" + moveingLeftRight;
        currntpostion = document.getElementById("TerrinImg");
        currntpostion.style.position = "absolute";
        currntpostion.style.left = rightHold + "%";
    }

    console.log(moveingLeftRight);

    battle(moveingLeftRight);

    if(moveingLeftRight === 80) {
        $("#Map1").css("visibility", "hidden");

        $("#SlimeImg").css("visibility", "hidden");
        $("#HydraImg").css("visibility", "hidden");
        $("#ElfImg").css("visibility", "hidden");

        $("#Map3").css("visibility", "visible");

        moveingLeftRight = 1;
        rightHold = "" + moveingLeftRight;
        currntpostion.style.position = "absolute";
        currntpostion.style.left = rightHold + "%";
    }
    /*
    let audio = new Audio('footsteps.wav');
    audio.play();

    let imgKai = document.getElementById("kaiImg");
    let xKai;
    let yKai;

    let imgLuna = document.getElementById("LunaImg");
    let xLuna;
    let yLuna;

    let imgTerrin = document.getElementById("TerrinImg");
    let xTerrin;
    let yTerrin;

    //kai move
    if(playerCharacter === "Kai") {
        imgKai.style.left = xKai - 5;
    }


    //luna move
    if(playerCharacter === "Luna") {
        imgLuna.style.left = xLuna - 5;
    }

    //terrin move
   if(playerCharacter === "Terrin") {
        imgTerrin.style.left = xTerrin - 5;
    }

    */
}

function moveImageLeft() {
    if(playerCharacter === 1) {
        moveingLeftRight = moveingLeftRight - 5;
        leftHold = "" + moveingLeftRight;
        console.log(leftHold);
        let currntpostion = document.getElementById("kaiImg");
        currntpostion.style.position = "absolute";
        currntpostion.style.left = leftHold + "%";
    }
    if(playerCharacter === 1) {
        moveingLeftRight = moveingLeftRight - 5;
        leftHold = "" + moveingLeftRight;
        console.log(leftHold);
        let currntpostion = document.getElementById("LunaImg");
        currntpostion.style.position = "absolute";
        currntpostion.style.left = leftHold + "%";
    }
    if(playerCharacter === 1) {
        moveingLeftRight = moveingLeftRight - 5;
        leftHold = "" + moveingLeftRight;
        console.log(leftHold);
        let currntpostion = document.getElementById("TerrinImg");
        currntpostion.style.position = "absolute";
        currntpostion.style.left = leftHold + "%";
    }
    

    /*
    let audio = new Audio('footsteps.wav');
    audio.play();

    let imgKai = document.getElementById("kaiImg");
    let xKai;
    let yKai;

    let imgLuna = document.getElementById("LunaImg");
    let xLuna;
    let yLuna;

    let imgTerrin = document.getElementById("TerrinImg");
    let xTerrin;
    let yTerrin;

    //kai move
    if(playerCharacter === "Kai") {
        imgKai.style.left = xKai + 5;
    }


    //luna move
    if(playerCharacter === "Luna") {
        imgLuna.style.left = xLuna + 5;
    }

    //terrin move
    if(playerCharacter === "Terrin") {
        imgTerrin.style.left = xTerrin + 5;
    }

    */
    //battle(moveingLeftRight);
}

function battle(moveingLeftRight) {
    if(moveingLeftRight === 70) {
        $("#SlimeInfoImg").css("visibility", "visible");
        $("#EnemyHealth").text(slimeHP); 
        console.log("if statement")
    }

    
}

function AttackEnemy() {

    slimeHP = slimeHP - (Attack - slimeDefense);
    if(slimeHP < 0) {
        slimeHP = 0;
    }
    $("#EnemyHealth").text("Health: " + slimeHP); 

    if(slimeHP === 0) {
        $("#SlimeInfoImg").css("visibility", "hidden");
        $("#SlimeImg").css("visibility", "hidden");
        $("#EnemyHealth").text(""); 
    }
}