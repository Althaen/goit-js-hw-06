function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const container = document.getElementById("boxes");
const input = document.querySelector("input");
const createButton = document.querySelectorAll("button")[0];
const destroyButton = document.querySelectorAll("button")[1];
// console.log(createButton, destroyButton, input, container);
let markUp = [];

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const element = `<div style="width: ${30 + i * 10}px; height: ${
      30 + i * 10
    }px; background-color: ${getRandomHexColor()}";></div> `;
    markUp.push(element);
  }
  container.insertAdjacentHTML("afterbegin", markUp.join(" "));
  markUp = [];
}

createButton.addEventListener("click", (e) => {
  let amount = input.value;
  createBoxes(amount);
  // console.log(container.innerHTML);
});

function destroyBoxes() {
  container.innerHTML = "";
}

destroyButton.addEventListener("click", destroyBoxes);
