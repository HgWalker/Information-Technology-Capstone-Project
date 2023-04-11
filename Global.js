import * as characterHandler from './Characters.js'
function load() {
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
    
}