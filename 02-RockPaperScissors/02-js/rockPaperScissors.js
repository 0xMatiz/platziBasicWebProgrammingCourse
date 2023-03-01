//THIS CODE IS CURRENTLY ON REWORK TO MAKE IT BETTER.

//Variable declaring start
let player; 
let pc;

//Function Declaring Area Start
function election (move) { //Declared a function to print player and pc election
    let result = "";
    if (move = 1) {
        result = "Rock 🪨";
    } else if (move = 2) {
        result = "Paper 📋";
    } else if (move = 3) {
        result = "Scissors ✂️";
    } else {
        result = "WRONG CHOICE";
    }
    return result;
}

function combat () {
    if (pc == player ) {
        alert("It's a tie");
    } else if (pc == 1 && player == 2) {
        alert("You loose!");
    } else if (pc == 1 && player == 3) {
        alert("You win!");
    } else {
        alert('You choose to loose!');
    }
}

function randomness (min, max) { //Declares a function that prints a round number between 1 and 3
    return Math.round(Math.random() * (max - min + 1) + min);
} 
//Normal Code Area Start
while (wins < 3 & losses < 3) {
    let wins = 0;
    let losses = 0;
    
    player = prompt("Choose: 1 for rock, 2 for paper and 3 for scissors");// 1 is Rock, 2 is paper, 3 is scissors
    pc = randomness(1, 2); //makes PC value equal randomness function result
    alert("You choose: " + election(player) + "!");//Player election function call
    alert("The PC chose: " + election(pc) + "!");//PC election function call
    if (pc == player ) {
        alert("It's a tie");
    } else if (pc == 1 && player == 2) {
        alert("You win!");
        wins += 1;
    } else if (pc == 1 && player == 3) {
        alert("You loose!");
        losses += 1;
    } else if (pc == 2 && player == 1) {
        alert("You loose!");
        losses += 1;
    } else if (pc == 2 && player == 3) {
        alert("You win!");
        wins += 1;
    } else if (pc == 3 && player == 1) {
        alert("You win!");
        wins += 1;
    } else if (pc == 3 && player == 2) {
        alert("You loose!");
        losses += 1;
    } else {
        alert("You choose to loose!");
    }
}

alert(`You won ${wins} times. And you lost ${losses} times.`)
//Normal Code Area end