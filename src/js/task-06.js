// Выносим в переменную инпут

const inputElement = document.querySelector("#validation-input");
// console.log(inputElement);
// console.log(inputElement.dataset.length);
inputElement.addEventListener("blur", (e) => {
  console.log(typeof inputElement.dataset.length);
  console.log(e.currentTarget);
  console.log(e.currentTarget.value);
  console.log(typeof e.currentTarget.value.length);

  if (e.currentTarget.value.length === Number(inputElement.dataset.length)) {
    if (inputElement.classList.contains("invalid"))
      inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else inputElement.classList.add("invalid");
});
