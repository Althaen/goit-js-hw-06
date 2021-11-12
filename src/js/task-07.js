const rangeElement = document.getElementById("font-size-control")
const textElement = document.getElementById("text")
// console.log(rangeElement, textElement)
// console.dir(rangeElement)
// console.dir(textElement)
// console.log(rangeElement.value)
// textElement.style.fontSize = "60px"

rangeElement.addEventListener("input", e => {
    textElement.style.fontSize = `${rangeElement.value}px`;
    return textElement.style.fontSize;
})

