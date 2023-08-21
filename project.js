// Generating the deck
const generateDeck = () => {
    const deck = [];
    const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
    const cards = [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'Jack',
        'Queen',
        'King',
        'Ace'
    ];
    
    for(const suit of suits){
        for(const card of cards) {
            deck.push({'Suit': suit, 'Card': card});
        }

    }
    return deck;
};

// Drawing a card randomly
const drawCard = (deck) => {
    const cardIndices =  Math.floor(Math.random() * deck.length);
    const card = deck[cardIndices];
    deck.splice(cardIndices, 1);
    return card;
};

// Checking the score
const checkScore = (hand) => {
    let Score = 0;
    for(const cardObject of hand) {
        if(cardObject.Card === 'King') {
            Score += 10;
        }
        else if(cardObject.Card === 'Queen') {
            Score += 10;
        }
        else if(cardObject.Card === 'Jack') {
            Score += 10;
        }
        else if(cardObject.Card === 'Ace') {
            Score += 1;
        }
        // otherwise it's 2-10;
        else{
            Score += Number(cardObject.Card);
        }
    }
    return Score;
}

const myDeck = generateDeck();
const playerHand = [];
const dealerHand = [];

playerHand.push(drawCard(myDeck));
playerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));

// console.log(playerHand);
// console.log(dealerHand);
// console.log(myDeck.length);

console.log("Starting Player Hand: ", playerHand);
console.log("Starting Player Score: ", checkScore(playerHand));
console.log("Starting Dealer Hand: ", dealerHand);
console.log("Starting Dealer Score: ", checkScore(dealerHand));

// console.log(10 + Number('10'));
// console.log(playerHand);
// console.log(checkScore(playerHand));

while(true) {
    playerHand.push(drawCard(myDeck));
    // check if player bust over 21
    let playerScore = checkScore(playerHand);
    let dealerScore = checkScore(dealerHand);
    
    if(playerScore > 21) {
        console.log(`You lose! Your final Score was ${playerScore} while the deaaler has ${dealerScore}`);
        break;
    }
    // check if player hits 21
    if(playerScore === 21){
        console.log(`You win! Your final score was ${playerScore} while the dealer had ${dealerScore}`);
        break;
    }

    // deal dealer card
    dealerHand.push(drawCard(myDeck));
    dealerScore = checkScore(dealerHand);
    
    if(dealerScore > 21) {
        console.log(`You win! Your final Score was ${playerScore} while the dealer has ${dealerScore}`);
        break;
    }

    // check if dealer hits 21
    if(playerScore === 21){
        console.log(`You lose! Your final score was ${playerScore} while the dealer had ${dealerScore}`);
        break;
    }
};

console.log("Ending Player Hand: ", playerHand);
console.log("Ending Player Score: ", checkScore(playerHand));
console.log("Ending Dealer Hand: ", dealerHand);
console.log("Ending Dealer Score: ", checkScore(dealerHand));







