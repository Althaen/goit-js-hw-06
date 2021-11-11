let counterValue = 0;
const counterElement = document.querySelector("#value");


// Добавляем перменные для кнопок из разметки
const buttonElements = document.querySelectorAll("[data-action]");
console.log(buttonElements);
const decrementButton = buttonElements[0];
const incrementButton = buttonElements[1];

// console.log(decrementButton);
// console.log(incrementButton);

// кнопка1.addEventListener
decrementButton.addEventListener("click", e => {
    counterValue -= 1;
    counterElement.textContent = counterValue;
    // console.log(counterValue)
})
// кнопка2.addEventListener
incrementButton.addEventListener("click", e => {
    counterValue += 1;
    counterElement.textContent = counterValue;
    // console.log(counterValue)
})
// console.log(counterValue)
