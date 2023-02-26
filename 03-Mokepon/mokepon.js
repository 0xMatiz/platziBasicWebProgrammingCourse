//FUNCTION DECLARING
function startGame () { //This function starts the game
    let playerPartnerButton = document.getElementById("partner-button");
    
    playerPartnerButton.addEventListener('click', selectPlayerPartner); //Add a listener to a 'click' event in the  webpage
    selectOpponentPartner();
}

function selectPlayerPartner () { //This function throws a message with the partner you choose
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
        alert(`You didn't choose any partner`)
    }
}
//CODE TESTING AREA
function selectOpponentPartner () { //I am still thinking how to do this part of the code.
    selectPlayerPartner();
    let opponentPartnerSpan = document.getElementById("opponent-partner")

    if(inputMonab.checked) {
        opponentPartnerSpan.innerHTML = 'Justoz';
    } else if(inputNestorf.checked) {
        opponentPartnerSpan.innerHTML = 'Monab';
    } else if(inputJustoz.checked) {
        opponentPartnerSpan.innerHTML = 'Nestorf';
    } else {
        
    }
}

//REGULAR CODE
window.addEventListener('load', startGame);
