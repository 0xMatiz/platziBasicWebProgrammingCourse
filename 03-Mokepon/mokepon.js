//FUNCTION DECLARING
function startGame () { //This function starts the game
    let playerPartnerButton = document.getElementById("partner-button");
    
    playerPartnerButton.addEventListener('click', selectPlayerPartner); //Add a listener to a 'click' event in the  webpage
}

function selectPlayerPartner () { //This function throws a message with the partner you choose
    //alert(`YOU CHOSE YOUR PARTNER`);
    let inputMonab = document.getElementById("monab");
    let inputNestorf = document.getElementById("nestorf");
    let inputJustoz = document.getElementById("justoz");
    
    if(inputMonab.checked) {
        alert(`You chose Monab as your partner!`);
    } else if(inputNestorf.checked) {
        alert(`You chose Nestorf as your partner!`);
    } else if(inputJustoz.checked) {
        alert(`You chose Justoz as your partner!`);
    } else {
        alert(`You didn't choose any partner`)
    }
}

//VARIABLE DECLARING
//const partnerNameList = [partnerMonab, partnerNestorf, partnerJustoz];

//REGULAR CODE
window.addEventListener('load', startGame);
