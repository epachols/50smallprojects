/*
DESCRIPTION:
We are making a Social Media Character Counter! We want to display the available characters LEFT.
Using the Keydown event should help you here. When the characters reach 20 and below, we want them to turn red. So we will use Javascript to add that styling to it. If the characters drop below 0, we want the button to be disabled BUT if there are only 0 characters left, we should still be able to tweet.

Keydown, addEventListeners, add and remove a class

Tips:
1. We want to create our variables first
2. Add the event listener
3. Look in the CSS to see what could be used to disable the button
4. Create conditions to check the count of the characters

Let your imagination run wild! You can use the provided styling or you can take it to another level!
Make sure you share your solution using the "Share solution!" button at the top!
There will be multiple winners that I select!

Follow me on twitter @DThompsonDev so you can find who who is selected! I hope it's YOU!

*/
/*
DESCRIPTION:
We are making a Social Media Character Counter! We want to display the available characters LEFT.
Using the Keydown event should help you here. When the characters reach 20 and below, we want them to turn red. So we will use Javascript to add that styling to it. If the characters drop below 0, we want the button to be disabled BUT if there are only 0 characters left, we should still be able to tweet.

Keydown, addEventListeners, add and remove a class

Tips:
1. We want to create our variables first
2. Add the event listener
3. Look in the CSS to see what could be used to disable the button
4. Create conditions to check the count of the characters

Let your imagination run wild! You can use the provided styling or you can take it to another level!
Make sure you share your solution using the "Share solution!" button at the top!
There will be multiple winners that I select!

Follow me on twitter @DThompsonDev so you can find who who is selected! I hope it's YOU!

*/
let counter = document.getElementById("counterFooter");
let string = document.getElementById("string");
let btn = document.getElementById("btn");
let remChars = 140;

btn.addEventListener("click", () => {
  if (remChars < 140 && remChars > 0) {
    let tweetContent = string.value;
    newTweet(tweetContent);
    string.value = "";
    remChars = 140;
  } else {
    alert("please tweet between 0 and 140 characters");
  }
});

string.addEventListener("focus", () => {
  string.addEventListener("keydown", (e) => {
    const key = e.key;
    if (key === "Delete" || key === "Backspace") {
    }
    remChars = 140 - string.value.length;

    console.log({ remChars });

    //counter color
    if (remChars <= 25) {
      counter.style.color = "red";
    }
    if (remChars >= 26) {
      counter.style.color = "white";
    }
    //tweet button control
    if (remChars >= 0) {
      btn.classList.remove("buttonDisabled");
    }
    if (remChars < 0) {
      btn.classList.add("buttonDisabled");
    }
    counter.textContent = `${remChars} / 140`;
  });
});

const newTweet = (value) => {
  window.open(`https://www.twitter.com/intent/tweet?text=${value}`, "_blank");
};

// this is from the javascriptmas 2020 challenge by scrimba, check out this exact solution here
// https://scrimba.com/scrim/cob234bc7a02fc1ba6b096d83
