// copy, url, clipboard, navigator, javascript

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
