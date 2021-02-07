const arrayOfTiles = Array.from(document.getElementsByClassName("tile"));

const fisherYatesShuffle = (array) => {
  var m = array.length,
    t,
    i;
  // While there remain elements to shuffle…
  while (m) {
    console.log(m);
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
};

const shuffleAndSway = () => {
  const shuffled = fisherYatesShuffle(arrayOfTiles);
  shuffled.forEach((element, index) => {
    const randomTimeOut = Math.floor(Math.random() * 2000 + 100);
    // const brightness = Math.random();
    const disappear = setTimeout(() => {
      element.style.opacity = "0%";
      if (index % 2 === 0) {
        element.style.filter = "grayscale(1)";
      } else element.style.filter = `brightness(${brightness})`;
    }, randomTimeOut);
  });
};

// After a delay,
// 1. shuffle the tile array
// 2. set a random brightness
// 3. grayscale segments of the array before opacity

setTimeout(() => {
  shuffleAndSway();
}, 3700);

document.addEventListener("click", function () {
  shuffleAndSway();
});
