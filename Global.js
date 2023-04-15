import * as characterHandler from './Characters.js'
function save() {
    //Save cookies
    document.cookie = `playerCharacter=${characterHandler.playerCharacter}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    //Player stats
    document.cookie = `HP=${characterHandler.HP}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `MP=${characterHandler.MP}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `Attack=${characterHandler.Attack}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `Defense=${characterHandler.Defense}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `Speed=${characterHandler.Speed}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    //weapons
    document.cookie = `weaponName=${characterHandler.weaponName}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `weaponStats=${characterHandler.weaponStats}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    //armor
    document.cookie = `armorName=${characterHandler.armorName}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `armorStats=${characterHandler.armorStats}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    //amulet
    document.cookie = `amuletName=${characterHandler.amuletName}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `amuletStats=${characterHandler.amuletStats}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    //Equipment status identfiers
    //weapons
    document.cookie = `woodenSword=${characterHandler.woodenSword}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `ironSword=${characterHandler.ironSword}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `steelSword=${characterHandler.steelSword}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `royalSword=${characterHandler.royalSword}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `worldSword=${characterHandler.worldSword}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    document.cookie = `basicStaff=${characterHandler.basicStaff}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `enchantedStaff=${characterHandler.enchantedStaff}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `aquamarineStaff=${characterHandler.aquamarineStaff}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `royalStaff=${characterHandler.royalStaff}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `worldStaff=${characterHandler.worldStaff}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    document.cookie = `handAxe=${characterHandler.handAxe}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `combatAxe=${characterHandler.combatAxe}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `greatAxe=${characterHandler.greatAxe}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `royalAxe=${characterHandler.royalAxe}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `worldAxe=${characterHandler.worldAxe}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    //armors
    document.cookie = `goldMail=${characterHandler.goldMail}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `copperMail=${characterHandler.copperMail}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `ironMail=${characterHandler.ironMail}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `mythrilMail=${characterHandler.mythrilMail}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `worldMail=${characterHandler.worldMail}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    document.cookie = `silkRobe=${characterHandler.silkRobe}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `leatherRobe=${characterHandler.leatherRobe}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `enchantedRobe=${characterHandler.enchantedRobe}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `mythrilRobe=${characterHandler.mythrilRobe}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `worldRobe=${characterHandler.worldRobe}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    document.cookie = `stonePlate=${characterHandler.stonePlate}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `bronzePlate=${characterHandler.bronzePlate}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `steelPlate=${characterHandler.steelPlate}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `mythrilPlate=${characterHandler.mythrilPlate}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `worldPlate=${characterHandler.worldPlate}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    //amulets
    document.cookie = `redAgateAmulet=${characterHandler.redAgateAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `garnetAmulet=${characterHandler.garnetAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `rubyAmulet=${characterHandler.rubyAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `redDiamondAmulet=${characterHandler.redDiamondAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `redWorldAmulet=${characterHandler.redWorldAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    document.cookie = `azuriteAmulet=${characterHandler.azuriteAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `lapisLazuliAmulet=${characterHandler.lapisLazuliAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `blueSapphireAmulet=${characterHandler.blueSapphireAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `blueDiamondAmulet=${characterHandler.blueDiamondAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `blueWorldAmulet=${characterHandler.blueWorldAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    document.cookie = `yellowTopazAmulet=${characterHandler.yellowTopazAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `citrineAmulet=${characterHandler.citrineAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `amberAmulet=${characterHandler.amberAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `yellowDiamondAmulet=${characterHandler.yellowDiamondAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `yellowWorldAmulet=${characterHandler.yellowWorldAmulet}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
}

function getCookie(name) {
    return document.cookie.split("; ").find((x) => x.startsWith(`${name}=`))?.split("=")[1];
}

export function load() {
    let playerCharacter = getCookie("playerCharacter");
    
    let HP = Number(getCookie("HP"));
    let MP = Number(getCookie("MP"));
    let Attack = Number(getCookie("Attack"));
    let Defense = Number(getCookie("Defense"));
    let Speed = Number(getCookie("Speed"));

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


characterHandler.load(playerCharacter, HP, MP, Attack, Defense, Speed, woodenSword, ironSword, steelSword, royalSword, 
    worldSword, basicStaff, enchantedStaff, aquamarineStaff, royalStaff, worldStaff, handAxe, combatAxe, greatAxe, 
    royalAxe, worldAxe, goldMail, copperMail, ironMail, mythrilMail, worldMail, silkRobe, LeatherRobe, enchantedRobe, 
    mythrilRobe, worldRobe, stonePlate, bronzePlate, steelPlate, mythrilPlate, worldPlate, redAgateAmulet, garnetAmulet, 
    rubyAmulet, redDiamondAmulet, redWorldAmulet, azuriteAmulet, lapisLazuliAmulet, blueSapphireAmulet, blueDiamondAmulet, 
    blueWorldAmulet, yellowTopazAmulet, citrineAmulet, amberAmulet, yellowDiamondAmulet, yellowWorldAmulet);
}