getUserChoice = userChoice => {
  userChoice = userChoice.toLowerCase()
  if(userChoice === 'rock' || userChoice === 'scissors' || userChoice === 'paper'){
    return userChoice
  } else {
    console.log('Please provide a proper option.')
  }
};

// console.log(getuserChoice('Paper')); // should print 'paper'
// console.log(getuserChoice('fork')); // should print 'Error!' and `undefined`

getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3)
  switch(randomNumber){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'scissors';
      break;
    case 2: 
      return 'paper';
      break;
  }
};
// console.log(getComputerChoice())

determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie";
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer Won';
    } else {
      return 'You won';
  }
  } else if (userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return 'Computer Won';
    } else {
      return 'You won';
    }

  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer Won';
    } else {
      return 'You won';
    }
  }
};

const playGame = () => {
   const userChoice = getUserChoice('paper');
   const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw:' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
};
 
playGame();

