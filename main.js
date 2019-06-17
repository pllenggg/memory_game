console.log("Up and Running");

var cards = ["queen", "queen", "king", "king"];
var cardInPlay = []; cardInPlay.push(cardOne);

var cardOne = "queen"[0];
var cardTwo = "queen"[1];
console.log("User flipped Queen");
console.log("User flipped King");

if (cardInPlay.length === 2 && cardInPlay[0] === cardInPlay[1]) {
	alert("You found a match!!");
} else {
	alert("Sorry, try again!");
}
