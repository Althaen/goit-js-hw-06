const categories = document.getElementById("#categories");
const listOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${listOfCategories.length}
`);
// console.log(listOfCategories.map(item =>
//     item.querySelector("h2").textContent))
listOfCategories.forEach(category => console.log(`Category: ${category.querySelector("h2").textContent}
Elements: ${category.querySelectorAll("li").length}
`));    
