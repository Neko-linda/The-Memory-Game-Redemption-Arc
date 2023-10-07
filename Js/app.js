// let playerGreeting = "Hello! Welcome to the Kawaii Memory Game. The way to play is as follows: Click on the cards you'd like to flip over. If you find a matching pair, you will gain points. Once all pairs are found, You have won the game! Hit the start button to begin."

// alert(playerGreeting)

const gameSelectors = {
    gameBoard: document.querySelector('.gameBoard'),
    board: document.querySelector('.board'),
    moves: document.querySelector('.moveCounter'),
    timer: document.querySelector('.timer'),
    start: document.querySelector('.start'),
    stop: document.getElementById('stop'),
    win: document.querySelector('.win')
};

const gameStart = {
    gamestarted: false,
    flippedCards: 0,
    totalFlips: 0,
    totalTime: 0,
    loop: null
};

const shuffleCards = array => {
    const secondArray = [...array];
    for (let i = secondArray.length - 1; i > 0; i--){
        const randomIndex = Math.floor(Math.random() * (i + 1));
        const cardArray = secondArray[i];
        secondArray[i] = secondArray[randomIndex];
        secondArray[randomIndex] = cardArray
    }
    return secondArray;
};

const random = (array, items) => {
    const secondArray = [...array];
    const randomCards = [];

    for(let i = 0; i < items; i++){
        const randomIndex = Math.floor(Math.random() * secondArray.length);

        randomCards.push(secondArray[randomIndex]);
        secondArray.splice(randomIndex, 1);
    }
    return randomCards
};

// const startGame = () => {
//     gameStart.gameStart = true;
//     gameSelectors.start.classList.add('disabled');
//     StaticRange.loop = setInterval(() => {
//         StaticRange.totalTime++;

//         gameSelectors.moves.innerText = `${state.totalFlips} moves`;
//         gameSelectors.timer.innerText = `${state.totalTime} sec`
//     })
// }


//add card objects to access in css
const items = 
const cards = 
const pickedCards =

//flip card function must have a check for match function + a function to flip cards back around if pair are not a match

const flipCard = {
    const checkForMatch =
}