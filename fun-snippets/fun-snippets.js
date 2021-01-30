// copy the content of an input to clipboard.
function copyToClipboard(thatIDthough) {
  navigator.clipboard.writeText(document.querySelector(thatIDthough).value);
}
// copy current url to clipboard
function copyToClipboard2() {
  navigator.clipboard.writeText(window.location.href).then(
    // handlesuccess
    () => {
      alert("copied");
    },
    // handlefailure
    () => {
      alert("oops");
    }
  );
}

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

// find out if localstorage is currently enabled.
const isLocalStorageEnabled = () => {
  try {
    const key = `__storage__test`;
    window.localStorage.setItem(key, null);
    window.localStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
};
isLocalStorageEnabled(); // true, if localStorage is accessible

// generates a random colour in hex format
const generateRandomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);
//EXAMPLE
document.getElementsByTagName("body")[0].style.color = generateRandomColor();
