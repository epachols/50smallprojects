// run a loop that creates 100 of them with randomly staggered delay
const container = document.getElementsByClassName("container")[0];

const makeFireflies = async () => {
  for (let i = 0; i <= 100; i++) {
    const staggerThemFlies = Math.floor(Math.random() * 37000);
    const awaitTime = await setTimeout(function () {
      const circleContainer = document.createElement("div");
      circleContainer.classList.add("circle-container");
      const circle = document.createElement("div");
      circle.classList.add("circle");
      circleContainer.appendChild(circle);
      container.appendChild(circleContainer);
    }, staggerThemFlies);
  }
};

makeFireflies();
