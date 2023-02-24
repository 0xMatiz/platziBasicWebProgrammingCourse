//FUNCTION DECLARING
function startGame () {
    let playerPartnerButton = document.getElementById("partner-button");
    playerPartnerButton.addEventListener('click', selectPlayerPartner); //Add a listener to a 'click' event in the  webpage
}

function selectPlayerPartner () {
    alert('YOU CHOSE YOUR PARTNER');
}

//VARIABLE DECLARING


//REGULAR CODE
window.addEventListener('load', startGame);