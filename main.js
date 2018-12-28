const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('An error!');
    }
};
const getComputerChoice = () => {
    let numOfItems = Math.floor(Math.random() * 3);
    console.log(numOfItems);
    switch (numOfItems) {
        case 0:
            console.log(numOfItems);
            numOfItems = 'rock';
            break;
        case 1:
            console.log(numOfItems);
            numOfItems = 'paper';
            break;
        case 2:
            console.log(numOfItems);
            numOfItems = 'scissors';
            break;
        default:
            console.log(numOfItems);
            numOfItems = 'computer errors!';
            break;
    }
    return numOfItems;
};

console.log(getComputerChoice());
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game is a tie!'
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'scissors' && computerChoice === 'paper') || (userChoice === 'paper' && computerChoice === 'rock') || userChoice === 'bomb') {
        return 'Human wins!'
    } else {
        return 'Computer wins!'
    }
};
/* test determineWinner function
console.log(determineWinner('scissors','rock'));*/

const playGame = () => {
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
    console.log('userChoice: ', userChoice);
    console.log('computerChoice: ', computerChoice);
    return determineWinner(userChoice, computerChoice);
};

console.log(playGame());