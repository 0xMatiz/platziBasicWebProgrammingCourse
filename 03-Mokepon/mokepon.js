//GLOBAL VARIABLE AREA
let playerAttack; //this variable gets what the player selects
let opponentAttack;
let playerHp = 3;
let opponentHp = 3;

//FUNCTION DECLARING AREA
function startGame () { //This function starts the game
    let rebootSection = document.getElementById("reboot");
    rebootSection.style.display = 'none';
    
    let chooseAttackSection = document.getElementById("choose-attack");
    chooseAttackSection.style.display = 'none'; //hides this section in the start of the game
    
    let playerPartnerButton = document.getElementById("partner-button");
    playerPartnerButton.addEventListener('click', selectPlayerPartner); //Add a listener to a 'click' event in the  webpage

    let fireButton = document.getElementById("fire-button"); //always be sure that you have declared your variables!!
    fireButton.addEventListener('click', fireAttack); //declares fire attack
    let waterButton = document.getElementById("water-button");
    waterButton.addEventListener('click', waterAttack); //declares water attack
    let plantButton = document.getElementById("plant-button");
    plantButton.addEventListener('click', plantAttack); //declares plant attack

    let rebootButton = document.getElementById("reboot-button");
    rebootButton.addEventListener('click', rebootTheGame);

}

function selectPlayerPartner () { //Throws a message with the partner you choose
    let choosePartnerSection = document.getElementById("choose-partner");
    choosePartnerSection.style.display = 'none';
    
    let chooseAttackSection = document.getElementById("choose-attack");
    chooseAttackSection.style.display = 'block';

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
    let randomPartner = random(1, 3);
    
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
    let randomAttack = random(1, 3);
    
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
    let playerHpSpan = document.getElementById("player-hp");
    let opponentHpSpan = document.getElementById("opponent-hp");

    if (playerAttack == opponentAttack) {
        createMessage("TIE");
    } else if (playerAttack == 'FIRE' && opponentAttack == 'PLANT') {
        createMessage("WIN");
        opponentHp--;
        opponentHpSpan.innerHTML = opponentHp;
    } else if (playerAttack == 'WATER' && opponentAttack == 'FIRE') {
        createMessage("WIN");
        opponentHp--;
        opponentHpSpan.innerHTML = opponentHp;
    }  else if (playerAttack == 'PLANT' && opponentAttack == 'WATER') {
        createMessage("WIN");
        opponentHp--;
        opponentHpSpan.innerHTML = opponentHp;s
    } else {
        createMessage("LOST");
        playerHp--;
        playerHpSpan.innerHTML = playerHp;
    }

    countHp();
}

function countHp () {
    if (opponentHp == 0) {
        createFinalMessage("YOU WON, CONGRATULATIONS!");
    } else if (playerHp == 0) {
        createFinalMessage("YOU LOST, BUT YOU EARNED EXPERIENCE IN THIS GAME!");
    }
}

function createFinalMessage (finalResult) { //creates a message for the combat log <div>
    let combatLogSection = document.getElementById("combat-log");

    let paragraph = document.createElement('p'); //creates an element with 'p' letter
    paragraph.innerHTML = finalResult;

    combatLogSection.appendChild(paragraph);

    let fireButton = document.getElementById("fire-button");
    fireButton.disabled = true;
    let waterButton = document.getElementById("water-button");
    waterButton.disabled = true;
    let plantButton = document.getElementById("plant-button");
    plantButton.disabled = true;

    let rebootSection = document.getElementById("reboot"); //shows reboot button
    rebootSection.style.display = 'block';
}

function createMessage (combatResult) { //creates a message for the combat log <div>
    let combatLogSection = document.getElementById("combat-log");

    let paragraph = document.createElement('p'); //creates an element with 'p' letter
    paragraph.innerHTML = `Your partner attacked with ${playerAttack}, the opponent partner attacked with ${opponentAttack} - ${combatResult}`;

    combatLogSection.appendChild(paragraph);
}

function rebootTheGame () {
    location.reload();
}

function random(min, max) { //Prints a random number between min and (max)+1
    return Math.round(Math.random() * (max - min + 1) + min);
}

//REGULAR CODE
window.addEventListener('load', startGame); //This runs all the code in startGame(); after all of the data loads.
