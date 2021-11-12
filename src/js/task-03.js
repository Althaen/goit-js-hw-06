const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// Здесь выводим в переменную разметку галереи из HTML-файла
const gallery = document.querySelector(".gallery")
// console.log(gallery)

// const element = `<li><img src=${images[0].url} alt=${images[0].alt}/><li>`
// console.log(element)

const markUp = images.map(element => {
  return `<li><img src="${element.url}" alt="${element.alt}" height = 375px; /></li>`
})
console.log(...markUp);

// Здесь присоединяем строки получившейся разметки изображений в переменную разметки
gallery.insertAdjacentHTML("afterbegin", markUp);
// Добавляем классы на изображения, чтобы сделать оформление
// Потом аппендим эту переменную в наш файл HTML
