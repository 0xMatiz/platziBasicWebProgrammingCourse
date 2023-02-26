//GLOBAL VARIABLE AREA
let playerAttack; //this variable gets what the player selects
let opponentAttack;
let combatResult;
let win;
let loss;

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

    createCombatLog();
}

function createCombatLog () { //creates a message for the combat log <div>
    let combatLogSection = document.getElementById("combat-log");
    
    let paragraph = document.createElement('p'); //creates an element with 'p' letter
    paragraph.innerHTML = `Your partner attacked with ${playerAttack}, the opponent partner attacked with ${opponentAttack} - ${combatResult}`;

    combatLogSection.appendChild(paragraph);
}

function random(min, max) { //Prints a random number between min and (max)+1
    return Math.round(Math.random() * (max - min + 1) + min);
}

//CODE TESTING AREA

function gameResult () {
    if (playerAttack == opponentAttack) {
        combatResult = "IT'S A TIE";
    } else if (playerAttack == 'FIRE' && opponentAttack == 'WATER') {
        combatResult = "YOU LOOSE";
        loss += 1;
    } else if (playerAttack == 'FIRE' && opponentAttack == 'PLANT') {
        combatResult = "YOU WIN"
        win += 1;
    } else if (playerAttack == 'WATER' && opponentAttack == 'PLANT') {
        combatResult = "YOU LOOSE"
        loss += 1;
    } else if (playerAttack == 'WATER' && opponentAttack == 'FIRE') {
        combatResult = "YOU WIN"
        win += 1;
    }  else if (playerAttack == 'PLANT' && opponentAttack == 'FIRE') {
        combatResult = "YOU LOOSE"
        loss += 1;
    }  else if (playerAttack == 'PLANT' && opponentAttack == 'WATER') {
        combatResult = "YOU WIN"
        win += 1;
    }
}

function reboot () { //search what you did wrong!
    if (win >= 3) {
        alert('YOU WON THE BEST OF THREE!');
    } else if (loss >= 3) {
        alert('YOU LOST THE BEST OF THREE!');
    } else {
        alert('ERROR IN REBOOT');
    }
}

function rebootTheGame () {
    let rebootButton = document.getElementById("reboot-button");
    reboot.addEventListener('click', rebootButton);
}   
//REGULAR CODE
while (win < 3 && loss < 3) {
    window.addEventListener('load', startGame); //This runs all the code in startGame(); after all of the data loads.    
}

rebootTheGame();

