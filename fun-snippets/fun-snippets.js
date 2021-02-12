// count the weekdays between two dates.
const countWeekDaysBetween = (startDate, endDate) =>
  Array.from({ length: (endDate - startDate) / (1000 * 3600 * 24) }).reduce(
    (count) => {
      if (startDate.getDay() % 6 !== 0) {
        count++;
      }
      startDate = new Date(startDate.setDate(startDate.getDate() + 1));
      return count;
    },
    0
  );
countWeekDaysBetween(new Date(2021, 0, 10), new Date(2021, 0, 20)); // 7
countWeekDaysBetween(new Date(2021, 1, 10), new Date(2021, 2, 18)); // 26

// generates a random colour in hex format
const generateRandomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);
//EXAMPLE
document.getElementsByTagName("body")[0].style.color = generateRandomColor();
