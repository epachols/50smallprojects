// splice, array, javascript

/* 
// The splice prototypical method of the Array structure adjusts the contents of an array, can replace, insert, or both!
// it returns an array of elements (if any) that have been deleted, modifying the array in place.
// the first argument is the starting index,
// the second argument is how many (if any) elements to remove, 
// (🚨this includes the starting index🚨)
// the third, fourth,fifth...nth.. arguments represent elements to be inserted.
*/
const burgerFamily = ["linda", "bob", "tina", "louise"];

// splicing for fun (and profit)
const geneSplice = (array, startPoint, removedElements, ...insertedItems) => {
  return array.splice(startPoint, removedElements, ...insertedItems);
};

geneSplice(burgerFamily, 3, 0, "Gene");
const whoGotBooted = geneSplice(
  burgerFamily,
  0,
  4,
  "Mr. Fischoeder",
  "Teddy",
  "Gail"
);

console.log({ burgerFamily });
console.log({ whoGotBooted });
