/* JavaScript, RegEx, Strings, replace,

>> uing the replace method and a RegEx pattern
>> capitalize the first letter of every word in the string.

>> the RegEx '^[a-z]' selects any lowercase letter at the beginning of the string.
>> the RegEx '\s[a-z]' selects any lowercase letter after a whitespace.
>> then the String.replace() to exchange any lower case letter with the uppercase version.
*/
const capitalIdeaMyBoy = (str) => {
  return str.replace(/^[a-z]|\s[a-z]/g, (char) => char.toUpperCase());
};

let snackTime = "let's all go to the lobby";
console.log(capitalIdeaMyBoy(snackTime));

let apostrophic = "we're o'er there, and won't, nay, can't lose!";
console.log(capitalIdeaMyBoy(apostrophic));
