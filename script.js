let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return math.floor(math.random())*10;
  }
  
  
  const compareGuesses = (humanGuess ,computerGuess ,tergetGuess) => {
    const humanDifference = math.abs(tergetGuess - humanGuess);
    const computerDifference = math.abs(tergetGuess - computerGuess);
  
    return humanDifference <= computerDifference ;
  }
  
  
  const updateScore = winner => {
    if (winner === 'human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
  }
  
  
  const advanceRound = () => currentRoundNumber++;
  