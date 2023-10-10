# The-Memory-Game-Redemption-Arc

This is the second time I am attempting to create a functioning memory card game as a Software Engineer student in General Assembly. 

This app will test the user's memory by displaying a set amount of cards, each with a matching pair somewhere on the board. The cards in their respective positions will display themselves to the user once the game starts, before flipping over quickly so none are visible. A timer will begin in order to allow the user to track how much time it took to find all the matching pairs.

The more pairs that are found, the higher the score will become.

This project will display how I implement the lessons I learned in Javascript and DOM Manipulation into a game. 

I will design logic for winning and visually display when the user has won. The user will be playing the computer.

An example of some code I am using:
<img width="596" alt="Screenshot 2023-10-10 at 12 22 12 AM" src="https://github.com/Neko-linda/The-Memory-Game-Redemption-Arc/assets/119255259/034b99f7-cc68-480c-9877-828dc1c63cea">


This is my shuffleCards function that will make sure that each time the page is refreshed or the game is restarted, it will select random cards from the card object in my code. I created a Randomize function that makes sure when the game begins or is restarted, that the card positions will randomize, and the card tiles will never be in the same place more than once, so the user cannot predict where the matches will be. 

One of the biggest hurdles for me was my FlipCard function. I came across many bugs, such as the matching cards not staying flipped over, only one set of matching cards staying flipped over while the others do not, all of the cards staying flipped over even if they are not a match, etc... I re-wrote my FlipCard function at least a dozen times. 

Some of my stretch goals include adding a Stop Game and/or Reset Game button with functionality, an alert or greeting that gives the player instructions, and adding noise or background/music once the game starts. 

The finished Product:
<img width="1440" alt="Screenshot 2023-10-10 at 12 27 05 AM" src="https://github.com/Neko-linda/The-Memory-Game-Redemption-Arc/assets/119255259/44aecb18-36f3-4d20-9991-bc4ab0591a63">

The game in progress:
<img width="1440" alt="Screenshot 2023-10-10 at 12 27 40 AM" src="https://github.com/Neko-linda/The-Memory-Game-Redemption-Arc/assets/119255259/2985be9e-33f1-4cf5-8bfc-a424435ff135">

Example of my win condition:
<img width="1440" alt="Screenshot 2023-10-10 at 12 27 51 AM" src="https://github.com/Neko-linda/The-Memory-Game-Redemption-Arc/assets/119255259/c7720b45-53ae-4cc0-8202-c5f48fa96ad7">



