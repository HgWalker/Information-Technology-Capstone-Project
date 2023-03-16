//Declarations
let playerCharacter = ""; //Variable to set character

//Stats
let HP; //Variable to hold Health Points
let MP; //Variable to hold Mana Points
let Attack; //Variable to hold Attack Points
let Defense; //Variable to hold Defense Points
let Speed; //Variable to hold Speed Points

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

