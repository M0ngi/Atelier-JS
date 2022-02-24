function startGame(){
    const x = Math.floor(Math.random()*10);
    let attempts = document.querySelector('#attempts').value;
    console.log(attempts);

    if(isNaN(attempts)){
        alert("Error: invalid attempts number!");
        return;
    }

    attempts = parseInt(attempts);
    let guess;

    while(attempts !== 0){
        guess = prompt("Guess: (" + attempts + " left)");
        if(guess === null) {
            alert("See you later!");
            return;
        }
        if(!isNaN(guess) && parseInt(guess) == x) break;
        attempts--;
    }

    if(attempts === 0){
        again = prompt("Game over! You didn't guess the number :(\nit was "+x+"\n\nWould you like to play again? (Yes/No)\n");
    } else again = prompt("You won, congratulations!\n\nWould you like to play again? (Yes/No)\n");

    if(again.toLowerCase() === "yes") startGame();
}

document.querySelector('#attempts').value = "5"; // Par defaut
document.querySelector('[name=startBtn]').addEventListener(
    "click",
    startGame
)