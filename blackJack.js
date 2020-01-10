var suits = ["Diamonds", "Hearts", "Spades", "Clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var deck = [];


//creating a 52 card deck 
var shuffle = function () {
    for (i = 0; i < values.length; i++) {
        for (j = 0; j < suits.length; j++) {
            var weight = parseInt(values[i]);
            if (values[i] == "J" || values[i] == "Q" || values[i] == "K")
                weight = 10;
            if (values[i] == 'A')
                weight = 11;
            var card = { Value: values[i], Suit: suits[j], Weight: weight }
            deck.push(card);
        }
    }

    //shuffling the 52 cards
    for (var i = 0; i < 1000; i++) {
        var loc1 = Math.floor((Math.random() * deck.length));
        var loc2 = Math.floor((Math.random() * deck.length));
        var tmp = deck[loc1];

        deck[loc1] = deck[loc2];
        deck[loc2] = tmp;
    }
};

shuffle();


//constructor function for creating object


//constructor function to make dealer
function Dealer() {
    this.dealerHand = [];
    this.dealerDraw = function () {
        var dealerCard = deck.pop();
        this.dealerHand.push(dealerCard);
        return this.dealerHand
        console.log(dealerCard)
    }
    this.dealerWeight = function () {
        var totalDealerWeight = 0;
        var dealerCards = this.dealerHand
        for (i = 0; i < dealerCards.length; i++) {
            totalDealerWeight += dealerCards[i].Weight
        }
        return totalDealerWeight;
    }
}

const dealer = new Dealer();  //object instance of the dealer
console.log(dealer.dealerDraw())   //return card in hand
console.log(dealer.dealerWeight()); //return the weight of the total cards




//Normal function
var stay = function () {


    var extraCard = deck.pop();
    dealer.dealerHand.push(extraCard);    //dealer hand - empty array
    for (i = 0; i < dealer.dealerHand; i++) {
        totalDealerWeight += dealerCards[i].Weight   //adding weight to it
    }

    console.log(extraCard)
    console.log(dealer.dealerWeight())   //Dealers cards final weight total
    console.log(player1.getWeight())  // Players cards final weight total


    if (dealer.dealerWeight() > player1.getWeight() && dealer.dealerWeight() > 21) {
        console.log("Dealer Bust")

    } else if (dealer.dealerWeight() > player1.getWeight() && dealer.dealerWeight() <= 21) {
        console.log("Dealer Wins")
    } else
        for (i = 0; i < 6; i++) {
            var extraCard = deck.pop();
            dealer.dealerHand.push(extraCard);
            for (i = 0; i < dealer.dealerHand; i++) {
                totalDealerWeight += dealerCards[i].Weight
            }
            if (dealer.dealerWeight() > player1.getWeight() && dealer.dealerWeight() > 21) {
                console.log("Dealer Bust")
                console.log(dealer.dealerWeight())

                return dealer.dealerWeight()
            } else if (dealer.dealerWeight() > player1.getWeight() && dealer.dealerWeight() <= 21) {
                console.log("Dealer Wins")
                console.log(dealer.dealerWeight())

                return dealer.dealerWeight()

            }
        };

    // for (i = 0; i < 6; i++) {}


    // console.log(extraCard)
    // console.log(dealer.dealerWeight())
}
// stay()



 // will pop one card from the deck and store it in players hand
var hitme = function () {
    var card = deck.pop();
    player1.hand.push(card)
    console.log(player1.hand)
    console.log(player1.getWeight())
    
    //will check if player1 weight is equalto greater than 21
    if (player1.getWeight() == 21) {
        console.log("BLACKJACK");
    } else if (player1.getWeight() > 21) {
        console.log("BUST")
    }
}

// hitme()


//Start blackja
var start = function(){
    console.log("yea baby")
    shuffle()
    function Player(name) {
        this.name = name;
        this.hand = [];
        this.draw = function () {  
            for (let i = 0; i < 2; i++) {
                var card = deck.pop();
                this.hand.push(card)
            }
            return this.hand;
        }
      //will give the weight of the total cards
        this.getWeight = function () {
            var totalweight = 0;
            var cards = this.hand;
            for (var i = 0; i < cards.length; i++) {
                totalweight += cards[i].Weight
            }
            return totalweight
        }
    }
    
    
    
    const player1 = new Player('Sameer');  //making instance of the constructor object
    console.log(player1.draw())       //returns this.hand array - collection of cards which player have
    console.log(player1.getWeight())  
}