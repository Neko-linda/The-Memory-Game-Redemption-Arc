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
    {name: "KawaiiSunflower", img: "Images/KawaiiSunflower.png"},
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
//displaying the game board, uses the shuffled cards (items) and iterates over them (.map) using .join to concatenate into a single string.
//Also creates a grid with rows and columns based on dimensions, each grid gets generated with a card both front and back

const parser = new DOMParser().parseFromString(cardDisplay, 'text/html');
//creates a new DOM tree for the html doc using newDOMParser to extract element with the .replaceWith function.

gameSelectors.board.replaceWith(parser.querySelector('.board'))
//replaces the content of the board class with that of the "card display" template, gameselecotrs.board accesses the board class in the gameselectors object.


//flip card function must have a check for match function + a function to flip cards back around if pair are not a match

// const flipCard = {
//     const checkForMatch =
// }
//must go inside function that starts game

const startGame = () => {
    state.gamestarted = true;
    gameSelectors.start.classList.add('disabled');
    //add disabled class so start button cannot be clicked again once the game has started
    state.loop = setInterval(() => {
        state.totalTime++;
        //set interval executes the totaltime every 1000 ms and state.totaltime keeps track of elapsed time.
        gameSelectors.moves.innerText = `${state.totalFlips} moves`;
        gameSelectors.timer.innerHTML = `Time: ${state.totalTime} sec`
        //innertext and html updates the html to display the changes to the user.
    }, 1000)
}

const flipBackCards = () => {
    document.querySelectorAll('.card:not(.matched').forEach(card => {
        //select all elements with the class name 'card' that DONT have the matched class
        card.classList.remove('.flipped');
        //remove the 'flipped' class and flip them back over if the above is true
    });
    state.flippedCards = 0;
    //resets to 0 and lets the game know that no more cards are flipped
}

const flipCard = card => {
    state.flippedCards++;
    state.totalFlips++;
    //increments counters to keep track of how many cards are flipped and the total flips made.

    if(!state.gamestarted){
        //check if the game started, if not, call start game
        startGame()
    }
    if(state.flippedCards <= 2){
        card.classList.add('flipped')
        //if # of Flipped cards is 2 or less, add 'flipped' class to the card
    }
    if(state.flippedCards === 2){
        const flippedCards = document.querySelectorAll('.flipped:not(.matched)');
        //check if two cards are a match, selects elements with the 'flipped' class that dont have the 'matched' class.
        if(flippedCards[0].innerHtml === flippedCards[1].innerHtml){
            //check if html content in the cards are the same
            flippedCards[0].classList.add('.matched');
            flippedCards[0].classList.add('.matched');
            //if cards match, add a 'matched' class to them
        }
        setTimeout(() => {
            flipBackCards()
        }, 1000)
    }
    if(!document.querySelectorAll('card:not(flipped)').length) {
        //check to see if there are any cards left to flip
        setTimeout(() => {
            gameSelectors.boardContainer.classList.add('flipped')
            //if true, add 'flipped' class to board container
            gameSelectors.win.innerHTML = `
            <span class = "win-text">
            You won!<br />
            with <span class = "highlight">${state.totalFlips}</span>
            moves<br />
            under <span class = "highlight"${state.totalTime}</span>
            seconds
            </span>
            `
            //update the HTML to an element with 'win' class, display message that player has won along with the total time elapsed and total amount of moves made.
            clearInterval(state.loop)
        }, 1000)
        //resets timer
    }
}

