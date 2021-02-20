// get day of year from a date
const dayOfYear = (date) =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date()); // 272

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

// remove falsy values from an array
const GimmeTheTruthy = (arr) => arr.filter(Boolean);

GimmeTheTruthy([0, 1, false, 2, "", NaN, 3, "a", "s", 34]);
// [ 1, 2, 3, 'a', 's', 34 ]
