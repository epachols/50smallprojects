/*  JavaScript, Color, Hexadecimal, Random

// generates and returns a random hex color
*/

const freshTones = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

//EXAMPLE
console.log(freshTones()); // "#2b788d"

// or in a styled-component for react
const styledDiv = styled.div`
  color: ${freshTones()};
`;
