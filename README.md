# The-Memory-Game-Redemption-Arc

This is the second time I am attempting to create a functioning memory card game as a Software Engineer student in General Assembly. 

This app will test the users memory by displaying a set amount of cards, each with a matching pair somewhere on the board. The cards in their respective positions will display themselves to the user once the game starts, before flipping over quickly so none are visible. A timer will begin in order to allow the user to track how much time it took to find all the matching pairs.

The more pairs that are found, the higher the score will become.

This project will display how I implement the lessons I learned in Javascript and DOM Manipulation into a game. 

I will design logic for winning and visually display when the user has won. The user will be playing the computer.

An example of some code I am using:

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

This is my shuffleCards function that will make sure that each time the page is refreshed or the game is restated, the card tiles will never be in the same place more than once, so the user cannot predict where the matches will be. 