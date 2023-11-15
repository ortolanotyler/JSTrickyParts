function guessingGame() {
  // Generate a random number between 0 and 99
  

const secretNumber = Math.floor(Math.random() * 100);
  let attempts = 0;
  let hasEnded = false;

return function(guess) {
  if (hasEnded) {
      return "The game is over, you already won!";
}

attempts++;

if (guess === secretNumber) {
  hasEnded = true;
      return `You win! You found ${secretNumber} in ${attempts} ${attempts === 1 ? 'guess' : 'guesses'}.`;
} else if (guess < secretNumber) {
      return `${guess} is too low!`;
} else {
      return `${guess} is too high!`;
}
  };
}

// Create a new game
let game = guessingGame();


