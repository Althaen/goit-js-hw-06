// Выносим в переменную инпут и аутпут
const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");
// console.log(inputElement);
// Вешаем событие ввода на инпут, при вводе текстовое значение аутпута равно вэлью инпута
inputElement.addEventListener("input", (e) => {
  if (inputElement.value !== "") {
    outputElement.textContent = e.currentTarget.value;
  } else outputElement.textContent = "Anonymous";
});
