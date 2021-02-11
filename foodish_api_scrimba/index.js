// Remember: You rock! 🎸
const baseUrl = "https://foodish-api.herokuapp.com/api/images/";
const foodsArr = ["biryani", "burger", "dosa", "pizza"];
const btnCont = document.getElementsByClassName("btnCont")[0];
const imgCont = document.getElementsByClassName("imgCont")[0];

let shownImgUrl = "";
btnCont.addEventListener("click", (e) => {
  const fetchString = baseUrl + e.target.dataset.name + `/`;
  fetch(fetchString)
    .then((response) => response.json())
    .then((data) => {
      shownImgUrl = data.image;
      console.log(shownImgUrl);
      imgCont.innerHTML = "";
      imgCont.style.backgroundImage = `url(${shownImgUrl})`;
    });
});
