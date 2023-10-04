const gameSelectors = {
    gameBoard: document.querySelector('.gameBoard'),
    board: document.querySelector('.board'),
    moves: document.querySelector('.moveCounter'),
    timer: document.querySelector('timer'),
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
}

const random = (array, items) => {
    const secondArray = [...array];
    const randomCards = [];

    for(let i = 0; i < items; i++){
        const randomIndex = Math.floor(Math.random() * secondArray.length);

        randomCards.push(secondArray[randomIndex]);
        secondArray.splice(randomIndex, 1);
    }
    return randomCards
}