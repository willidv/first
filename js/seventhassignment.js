// function slots(play, lose, bust)
var newCoins = Math.random(coins);
var coins= Math.floor(Math.random()*100)+1;
    while (coins > 0){
        if(coins > 0){
           coins = coins + newCoins;
           console.log(coins)
        if(coins == 0){
            console.log("bust");
        }
        if(coins > 200){
            console.log("JACKPOT");
            console.log(coins);
            break;
        }  
        }   
    }
        
