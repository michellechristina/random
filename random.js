'use strict'
var random = {
    num :function(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    },
    numBetween1and100: function(){
        const min = 1;
        const max = 100;
        return this.num(min, max);
    },
    fromArray: function(array) {
        const min = 0;
        return array[Math.floor(Math.random() * (array.length - min)) + min];
    },
    person: function(array) {
        return this.fromArray(array);
    },
    hex: function(){
        let hexString = '0123456789ABCDEF';
        return `#${this.fromArray(hexString)}${this.fromArray(hexString)}${this.fromArray(hexString)}${this.fromArray(hexString)}${this.fromArray(hexString)}${this.fromArray(hexString)}`;
    },
    card: function(){
        let suit = this.fromArray(['hearts', 'clubs', 'diamonds', 'spades']);
        let randomCard = this.fromArray(['2','3','4','5','6','7','8','9','10','J','Q','K','A']);
        let card = {
            suit: suit,
            num: randomCard
        }
        return card;
    },
    cards: function(numCards){
        let cards = [];
        for (var i = 0; i < numCards; i++) {
            cards.push(this.card());
        }
        return cards;
    },
    dice: function(numDice){
        var dice = [];
        for (var i = 0; i < numDice; i++) {
            let die = this.num(1,6);   
            dice.push(die);
        }
        return dice;
    },
    weather: function(){
        let weather = this.fromArray(['sunny', 'rainy', 'windy', 'cloudy', 'snowy', 'muggy', 'icey']);
        let temp = this.num(-30, 130);
        return { weather: weather, temp: temp};
        },
    coinflip: function(flipCount){
        if(flipCount){
            var flips = []
            for (var i = 0; i < flipCount; i++) {
                flips.push(this.num(0,1) ? "heads" : "tails");
            }
            var heads = flips
                .filter(flip => flip==="heads")
                .length;
            var tails = flips
                .filter(flip => flip==="tails")
                .length;
                var obj = {
                    heads: heads,
                    tails: tails,
                    flips: flips
                }
            return obj;
        }
        else{
            return this.num(0,1) ? "heads" : "tails";
        }
    },
    day: function(day){
        return this.fromArray(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
    }

}
