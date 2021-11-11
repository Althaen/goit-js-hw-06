// Выносим в переменную инпут

const inputElement = document.querySelector("#validation-input");
// console.log(inputElement);
// console.log(inputElement.dataset.length);
inputElement.addEventListener("blur", (e) => {
  console.log(inputElement.value.length);
  if (inputElement.value.length >= inputElement.dataset.length) {
    if (inputElement.classList.contains("invalid"))
      inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else inputElement.classList.add("invalid");
});
