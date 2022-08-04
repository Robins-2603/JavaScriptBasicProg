let heads=0;
let tails=1;
let coinFlip =Math.floor(Math.random() * 10 ) % 2; // here 0 and 1 will be created as random nmbr
console.log("The random selection: "+coinFlip);
if(coinFlip == 1){
    console.log("Coin flipped: Heads");
}
else
    console.log("Coin flipped: Tails")