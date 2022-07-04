const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "blue",
  "yellow",
  "black",
  "orange",
  "pink",
  "white",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //get random number between 0-3 colors[]
  const randomNumber = getRandoNumber();
  //   console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandoNumber() {
  return Math.floor(Math.random() * colors.length);
}
