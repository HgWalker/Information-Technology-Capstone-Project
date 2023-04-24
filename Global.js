/*import * as characterHandler from './Characters.js';
function save() {
    //Save cookies
    document.cookie = `playerCharacter=${playerCharacter}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    //Player stats
    document.cookie = `HP=${HP}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `MP=${MP}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `Attack=${Attack}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `Defense=${Defense}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `Speed=${Speed}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
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
/*

load(playerCharacter, HP, MP, Attack, Defense, Speed, woodenSword, ironSword, steelSword, royalSword, 
    worldSword, basicStaff, enchantedStaff, aquamarineStaff, royalStaff, worldStaff, handAxe, combatAxe, greatAxe, 
    royalAxe, worldAxe, goldMail, copperMail, ironMail, mythrilMail, worldMail, silkRobe, leatherRobe, enchantedRobe, 
    mythrilRobe, worldRobe, stonePlate, bronzePlate, steelPlate, mythrilPlate, worldPlate, redAgateAmulet, garnetAmulet, 
    rubyAmulet, redDiamondAmulet, redWorldAmulet, azuriteAmulet, lapisLazuliAmulet, blueSapphireAmulet, blueDiamondAmulet, 
    blueWorldAmulet, yellowTopazAmulet, citrineAmulet, amberAmulet, yellowDiamondAmulet, yellowWorldAmulet); 
} */