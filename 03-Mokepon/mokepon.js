//FUNCTION DECLARING
function startGame () { //This function starts the game
    let playerPartnerButton = document.getElementById("partner-button");
    
    playerPartnerButton.addEventListener('click', selectPlayerPartner); //Add a listener to a 'click' event in the  webpage
}

function selectPlayerPartner () { //This function throws a message with the partner you choose
    //alert(`YOU CHOSE YOUR PARTNER`);
    let partnerMonab = document.getElementById("monab");
    let partnerNestorf = document.getElementById("nestorf");
    let partnerJustoz = document.getElementById("justoz");
    
    if(partnerMonab.checked) {
        alert(`You chose ${partnerMonab} as your partner!`);
    } else if(partnerNestorf.checked) {
        alert(`You chose ${partnerNestorf} as your partner!`);
    } else if(partnerJustoz.checked) {
        alert(`You chose ${partnerJustoz} as your partner!`);
    } else {
        alert(`You didn't choose any partner`)
    }
}

//VARIABLE DECLARING
//const partnerNameList = [partnerMonab, partnerNestorf, partnerJustoz];

//REGULAR CODE
window.addEventListener('load', startGame);
