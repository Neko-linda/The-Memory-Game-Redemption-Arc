document.addEventListener('DOMContentLoaded', () => {
    let playerGreeting = "Hello! Welcome to the Kawaii Memory Game. The way to play is as follows: Click on the cards you'd like to flip over. If you find a matching pair, you will gain points. Once all pairs are found, You have won the game! Hit the start button to begin."
    alert(playerGreeting)

    const gameSelectors = {
        gameBoard: document.querySelector('.gameBoard'),
        board: document.querySelector('.board'),
        moves: document.querySelector('.moveCounter'),
        timer: document.querySelector('.timer'),
        start: document.querySelector('.start'),
        reset: document.getElementById('reset'),
        win: document.querySelector('.win')
    };
    const gameStart = {
        gameStarted: false,
        flippedCards: 0,
        totalFlips: 0,
        totalTime: 0,
        loop: null
    };

    //Shuffle the cards first before presenting to user
    const shuffleCards = array => {
        const secondArray = [...array];
        for (let index = secondArray.length - 1; index > 0; index--) {
            const randomIndex = Math.floor(Math.random() * (index + 1));
            const cardArray = secondArray[index];
            secondArray[index] = secondArray[randomIndex];
            secondArray[randomIndex] = cardArray
        }
        return secondArray;
    };
    //randomize placement of cards on board each time game starts
    const random = (array, items) => {
        const secondArray = [...array];
        const randomCards = [];
        for (let i = 0; i < items; i++) {
            const randomIndex = Math.floor(Math.random() * secondArray.length);
            randomCards.push(secondArray[randomIndex]);
            secondArray.splice(randomIndex, 1);
        }
        return randomCards
    };
    const cards = [
        { name: "KawaiiCat", img: "Images/KawaiiCat copy.png" },
        { name: "KawaiiLion", img: "Images/KawaiiLion copy.png" },
        { name: "KawaiiMoon", img: "Images/KawaiiMoon copy.png" },
        { name: "KawaiiSun", img: "Images/KawaiiSun copy.png" },
        { name: "KawaiiCherries", img: "Images/KawaiiCherries copy.png" },
        { name: "KawaiiStars", img: "Images/KawaiiStars copy.png" },
        { name: "KawaiiSunflowers", img: "Images/KawaiiSunflower copy.png" },
        { name: "KawaiiFrog", img: "Images/KawaiiFrog copy.png" },
        { name: "KawaiiHearts", img: "Images/KawaiiHearts copy.png" },
        { name: "KawaiiMatch", img: "Images/KawaiiMatch copy.png" },
    ];
    const generateGame = () => {
        const dimensions = gameSelectors.board.getAttribute('data-dimension')
        if (dimensions % 2 !== 0) {
            throw new Error("The dimension of the board must be an even number.")
        }
        //add card objects to access in css, using relative pathing
        //using cards from old project
        const pickedCards = random(cards, (dimensions * dimensions) / 2);
        //random called earlier in code
        // takes cards from the cards array
        const items = shuffleCards([...pickedCards, ...pickedCards]);
        //shuffles the cards taken
        const cardDisplay = `
            <div class="board" style="grid-template-columns: repeat(${dimensions}, auto)">
            ${items.map(item => `
            <div class="card">
            <div class="card-front"></div>
            <div class="card-back">
                <img src="${item.img}" alt="${item.name}">
            </div>
        </div>
        `).join('')}
    </div>
    `;
        //displaying the game board, uses the shuffled cards (items) and iterates over them (.map) using .join to concatenate into a single string.
        //Also creates a grid with rows and columns based on dimensions, each grid gets generated with a card both front and back
        const parser = new DOMParser().parseFromString(cardDisplay, 'text/html');
        //creates a new DOM tree for the html doc using newDOMParser to extract element with the .replaceWith function.
        gameSelectors.board.replaceWith(parser.querySelector('.board'))
    }
    const startGame = () => {
        gameStart.gameStarted = true;
        gameSelectors.start.classList.add('disabled');
        //add disabled class so start button cannot be clicked again once the game has started
        gameStart.loop = setInterval(() => {
            gameStart.totalTime++;
            //set interval executes the totaltime every 1000 ms gameStart.totaltime keeps track of elapsed time.
            gameSelectors.moves.innerText = `${gameStart.totalFlips} moves`;
            gameSelectors.timer.innerHTML = `Time: ${gameStart.totalTime} sec`
            //innertext and html updates the html to display the changes to the user.
        }, 1000)
    }

    const flipCard = card => {
        gameStart.flippedCards++;
        gameStart.totalFlips++;
        if (!gameStart.gameStarted) {
            startGame();
        }
        card.classList.add('flipped');

        if (gameStart.flippedCards === 2) {
            const flippedCards = document.querySelectorAll('.flipped:not(.matched)');

            if (flippedCards.length === 2) {
                // Check if the two flipped cards are a match by comparing their alt attributes
                const alt1 = flippedCards[0].querySelector('img').alt;
                const alt2 = flippedCards[1].querySelector('img').alt;

                if (alt1 === alt2) {
                    // Cards match, mark them as 'matched'
                    flippedCards.forEach(card => card.classList.add('matched'));
                } else {
                    // Cards don't match, unflip them after a delay
                    setTimeout(() => {
                        flippedCards.forEach(card => card.classList.remove('flipped'));
                    }, 1000);
                }
            }
            gameStart.flippedCards = 0;
        }

        // Check for game completion after the timeout
        setTimeout(() => {
            const unmatchedCards = document.querySelectorAll('.card:not(.matched)');
            if (unmatchedCards.length === 0) {
                gameSelectors.board.classList.add('flipped'); // Add 'flipped' class to the game board
                // Show the win screen by adding the 'show' class
                gameSelectors.win.classList.add('show');
                // Update the win screen content
                gameSelectors.win.innerHTML = `
                <span class="win-text">
                You won!<br />
                with <span class="highlight">${gameStart.totalFlips}</span>
                moves<br />
                under <span class="highlight">${gameStart.totalTime}</span>
                seconds
                </span>
            `;

                clearInterval(gameStart.loop);
            }
        }, 1000);
    }

    const resetGame = () => {
        // Clear the game loop
        clearInterval(gameStart.loop);
    
        // Reset game state
        gameStart.gameStarted = false;
        gameStart.flippedCards = 0;
        gameStart.totalFlips = 0;
        gameStart.totalTime = 0;
    
        // Unflip all cards by removing the 'flipped' class
        const allCards = document.querySelectorAll('.card');
        allCards.forEach(card => card.classList.remove('flipped', 'matched'));
    
        // Reset the UI elements
        gameSelectors.moves.innerText = 'Moves made: 0';
        gameSelectors.timer.innerText = 'Time: 0 sec';
    
        // Remove the 'disabled' class from the Start Game button to enable it again
        gameSelectors.start.classList.remove('disabled');
    
        // Hide the win screen (if it's currently shown)
        gameSelectors.win.classList.remove('show');
    };
    

    const attachEventListeners = () => {
        document.addEventListener('click', event => {
            gameSelectors.reset.addEventListener('click', resetGame);
            const eventTarget = event.target;
            const eventParent = eventTarget.parentElement;
            if (eventTarget.className.includes('card') && !eventParent.className.includes('flipped')) {
                flipCard(eventParent)
            } else if (eventTarget.nodeName === 'BUTTON' && !eventTarget.className.includes('disabled')) {
                startGame();
            }
        })
    }
    generateGame();
    attachEventListeners();
});
