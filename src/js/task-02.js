const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let listOfIngredients = document.getElementById("ingredients");
// let markUp = [];

// function createMarkUp(element, index, array) {
//   const listedElement = document.createElement("li");
//   listedElement.textContent = array[index];
// }

const markUp = ingredients.map(ingredient => {
  let element = document.createElement("li");
  element.textContent = ingredient;
  return element
})
// ingredients.forEach((ingredient) => {
//   let element = document.createElement("li");
//   element.textContent = ingredient;
//   markUp.push(element)
// })
// console.log(...markUp)

listOfIngredients.append(...markUp) /*Здесь добавляем получившееся в нашу разметку аппендом */

console.log(listOfIngredients);
