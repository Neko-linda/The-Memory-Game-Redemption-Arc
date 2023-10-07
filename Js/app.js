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

//Shuffle the cards first before presenting to user
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

//randomize placement of cards on board each time game starts
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


//add card objects to access in css, using relative pathing
const cards = [
    {name: "KawaiiCat", img: "Images/KawaiiCat.png"},
    {name: "KawaiiLion", img: "Images/KawaiiLion.png"},
    {name: "KawaiiMoon", img: "Images/KawaiiMoon.png"},
    {name: "KawaiiSun", img: "Images/KawaiiSun.png" },
    {name: "KawaiiCherries", img: "Images/KawaiiCherries.png"},
    {name: "KawaiiStars", img: "Images/KawaiiStars.png"},
    {name: "KawaiiSunflowers", img: "Images/KawaiiSunflower.png"},
    {name: "KawaiiFrog", img: "Images/KawaiiFrog.png"},
    {name: "KawaiiHearts", img: "Images/KawaiiHearts.png"},
   ];
   //using cards from old project

const pickedCards = pickedCardsRandom(cards, (dimensions * dimensions) / 2);
// takes cards from the cards array

const items = shuffle([...pickedCards, ...pickedCards]);
//shuffles the cards taken

const cardDisplay = `
<div class="board" style="grid-template-columns: repeat(${dimensions}, auto)">
    ${items.map(item => `
    <div class="card">
        <div class="card-front"></div>
        <div class="card-back">${item}</div>
        </div>
        `).join('')}
    </div>
`
//creates a grid with rows and columns based on dimensions, each grid gets generated with a card both front and back

//flip card function must have a check for match function + a function to flip cards back around if pair are not a match

const flipCard = {
    const checkForMatch =
}