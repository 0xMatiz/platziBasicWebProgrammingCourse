//GLOBAL VARIABLE AREA
let playerAttack;

//FUNCTION DECLARING CODE
function startGame () { //This function starts the game
    let playerPartnerButton = document.getElementById("partner-button");
    playerPartnerButton.addEventListener('click', selectPlayerPartner); //Add a listener to a 'click' event in the  webpage

    let fireButton;
    fireButton.addEventListener('click', fireAttack);
    let waterButton;
    waterButton.addEventListener('click', waterAttack);
    let plantButton;
    plantButton.addEventListener('click', plantAttack);
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
    let randomNum = random(1, 2);
    
    if(randomNum == 1) {
        opponentPartnerSpan.innerHTML = 'Justoz';
    } else if(randomNum == 2) {
        opponentPartnerSpan.innerHTML = 'Nestorf';
    } else {
        opponentPartnerSpan.innerHTML = 'Monab';
    }
}

function fireAttack () {
    playerAttack = 'FIRE';
}

function waterAttack () {
    playerAttack = 'WATER';
}

function plantAttack () {
    plantAttack = 'PLANT';
}

function random(min, max) { //Prints a random number between min and (max)+1
    return Math.round(Math.random() * (max - min + 1) + min);
}

//CODE TESTING AREA


//REGULAR CODE
window.addEventListener('load', startGame); //This runs all the code in startGame(); after all of the data loadds.
