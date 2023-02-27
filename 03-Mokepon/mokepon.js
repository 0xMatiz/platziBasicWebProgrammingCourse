//GLOBAL VARIABLE AREA
let playerAttack; //this variable gets what the player selects
let opponentAttack;
let combatResult;

//FUNCTION DECLARING AREA
function startGame () { //This function starts the game
    let playerPartnerButton = document.getElementById("partner-button");
    playerPartnerButton.addEventListener('click', selectPlayerPartner); //Add a listener to a 'click' event in the  webpage

    let fireButton = document.getElementById("fire-button"); //always be sure that you have declared your variables!!
    let waterButton = document.getElementById("water-button");
    let plantButton = document.getElementById("plant-button");
    fireButton.addEventListener('click', fireAttack); //declares fire attack
    waterButton.addEventListener('click', waterAttack); //declares water attack
    plantButton.addEventListener('click', plantAttack); //declares plant attack
}

function selectPlayerPartner () { //Throws a message with the partner you choose
    let inputMonab = document.getElementById("monab");
    let inputNestorf = document.getElementById("nestorf");
    let inputJustoz = document.getElementById("justoz");
    let playerPartnerSpan = document.getElementById("player-partner")

    if(inputMonab.checked) {
        playerPartnerSpan.innerHTML = 'Monab';
    } else if(inputNestorf.checked) {
        playerPartnerSpan.innerHTML = 'Nestorf';
    } else if(inputJustoz.checked) {
        playerPartnerSpan.innerHTML = 'Justoz';
    } else {
        alert('Select a partner')
    }

    selectOpponentPartner();
}

function selectOpponentPartner () { //Selects opponent partner name making use of a random number between 1 to 3.
    let opponentPartnerSpan = document.getElementById("opponent-partner")
    let randomPartner = random(1, 2);
    
    if(randomPartner == 1) {
        opponentPartnerSpan.innerHTML = 'Justoz';
    } else if(randomPartner == 2) {
        opponentPartnerSpan.innerHTML = 'Nestorf';
    } else {
        opponentPartnerSpan.innerHTML = 'Monab';
    }
}

function fireAttack () { //calls fire attack
    playerAttack = 'FIRE';
    opponentRandomAttack();
}

function waterAttack () { //calls water attack
    playerAttack = 'WATER';
    opponentRandomAttack();
}

function plantAttack () { //calls plant attack
    plantAttack = 'PLANT';
    opponentRandomAttack();
}

function opponentRandomAttack () { //we add "random" word to this function, because it has to be named different from the variable.
    let randomAttack = random(1, 2);
    
    if (randomAttack == 1) {
        opponentAttack = 'FIRE';
    } else if (randomAttack == 2) {
        opponentAttack = 'WATER';
    } else { //We dont need another else if because there's only 3 possibilities, so the last one goes by default.
        opponentAttack = 'PLANT';
    }

    combat();
}

function combat () {
    if (playerAttack == opponentAttack) {
        combatResult = "IT'S A TIE";
    } else if (playerAttack == 'FIRE' && opponentAttack == 'PLANT') {
        combatResult = "YOU WIN";   
    } else if (playerAttack == 'WATER' && opponentAttack == 'FIRE') {
        combatResult = "YOU WIN";
    }  else if (playerAttack == 'PLANT' && opponentAttack == 'WATER') {
        combatResult = "YOU WIN";
    } else {
        combatResult = "YOU LOOSE";
    }

    createCombatLog();
}

function createCombatLog () { //creates a message for the combat log <div>
    let combatLogSection = document.getElementById("combat-log");
    
    let paragraph = document.createElement('p'); //creates an element with 'p' letter
    paragraph.innerHTML = `Your partner attacked with ${playerAttack}, the opponent partner attacked with ${opponentAttack} - ${combatResult}`;

    combatLogSection.appendChild(paragraph);
}
//createHpLog();
   
/*
function createHpLog () {
    let playerHp = document.getElementById("player-hp");
    playerHp.innerHTML = 3;

    let opponentHp = document.getElementById("opponent-hp");
    opponentHp.innerHTML = 3;

    if (combatResult == "YOU WIN" && opponentHp > 0) {
        opponentHp--;
    } else if (combatResult == "YOU LOOSE" && playerHp > 0) {
        playerHp--;
    }
}
*/
function random(min, max) { //Prints a random number between min and (max)+1
    return Math.round(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', startGame); //This runs all the code in startGame(); after all of the data loads.

//CODE TESTING AREA
