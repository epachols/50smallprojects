/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it would in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

*/

// Write your code here 👇
const dice = document.getElementsByClassName("dice")[0];
const dots = [...dice.children];
const result = document.getElementsByClassName("result")[0];
const gif = dice.previousElementSibling;

let oldRoll = 0;
let rollCount = 1;

dots[4].classList.add('dot');

const rollDice = () => {
    let rando = Math.floor(Math.random() * 6) + 1;
    for (let dot of dots) {dot.classList.remove(...dot.classList)}

    if (rando === 1) {
        dots[4].classList.add('dot');
    }
    if (rando === 2) {
        dots[0].classList.add('dot');
        dots[8].classList.add('dot');
    }
    if (rando === 3) {
        dots[0].classList.add('dot');
        dots[4].classList.add('dot');
        dots[8].classList.add('dot');
    }
    if (rando === 4) {
        dots[0].classList.add('dot');
        dots[2].classList.add('dot');
        dots[6].classList.add('dot');
        dots[8].classList.add('dot');
    }
    if (rando === 5) {
        dots[0].classList.add('dot');
        dots[2].classList.add('dot');
        dots[4].classList.add('dot');
        dots[6].classList.add('dot');
        dots[8].classList.add('dot');
    }
    if (rando === 6) {
        dots[0].classList.add('dot');
        dots[2].classList.add('dot');
        dots[3].classList.add('dot');
        dots[5].classList.add('dot');
        dots[6].classList.add('dot');
        dots[8].classList.add('dot');
    }

    if (rando === oldRoll) {
        rollCount++;
        oldRoll = rando;
        result.textContent = `Didn't we just roll a ${rando}? that's ${rollCount} in a row!`
    }
    else {
    oldRoll = rando;
    rollCount = 1;
    result.textContent = `Last roll was a ${rando}`
    }
}

const isRolling = () => {
    gif.classList.toggle('hidden');
    dice.classList.toggle('hidden');
    result.textContent = "rolling...";
    setTimeout(function(){
        result.textContent = "";
        rollDice();
        gif.classList.toggle('hidden');
        dice.classList.toggle('hidden');
    }, 750);
}

dice.addEventListener("click", isRolling);

