// create an array of all the cards with 6 decks

var deck = [];

var  cards= ["2","3","4","5","6","7","8","9","10","J","Q","K","A"]
var  suits= ["spades","hearts","diamonds","clubs"]

var decked = function (){
    //var deck = [];
    for(i=0;i<suits.length;i++){
        for(j=0;j<cards.length;j++){
            var weight = parseInt(cards[j])
            if (cards[j] === "J" || cards[j] === "Q" || cards[j] === "K"){
                weight =10
            } 
            if (cards[j] === "A"){
                weight = 11
            }
            var card= {cardss: cards[j], suit: suits[i], weightage: weight};
            deck.push(card);
        }
    }
}


function shuffle()
    {
        for (var i = 0; i < 1000; i++)
        {
            var pick1 = Math.floor((Math.random() * deck.length));
            var pick2 = Math.floor((Math.random() * deck.length));
            var temp = deck[pick1];
            deck[pick1] = deck[pick2];
            deck[pick2] = temp;
        }        
    }
decked()
shuffle();
console.log(deck);