// Code your solutions in this file
/* for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
} */

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);

const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names) {

    const thankYouArray = [];

    for (let x = 0; x < names.length; x++) {
        const message = `Thank you, ${names[x]}, for the wonderful surprise gift!`;
        thankYouArray.push(message);
    }
    return thankYouArray;
}

function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }