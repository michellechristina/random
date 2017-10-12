var random = {
    num :function(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    },
    numBetween1and100: function(){
        const min = 1;
        const max = 100;
        return Math.floor(Math.random() * (max - min)) + min;
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
    coinflip: function(){
        var flip = this.num(0,1);
        console.log(flip);
        var coin="";
        if(flip === 1){
            coin = "heads";
        }
        else{
            coin = "tails";
        }
        return coin;
        }
    }



// var dictionary = ['word1', 'word2'];


// var people = ['Ben', 'Michelle', 'Justin', 'Jake'];

// console.log(random.person(people));


// console.log(random.fromArray(dictionary));
console.log(random.coinflip());