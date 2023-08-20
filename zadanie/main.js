import './style.css'
/*import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

/*const typesContainer = document.getElementById("types");

fetch(https://api-eko-bazarek.azurewebsites.net/api/products/types)
  .then(response => response.json())
  .then(products => {
    const productElement = document.createElement(types);

      console.Consolelog(products);
  })
  .catch(error => {
    console.error('Mamy blad',error);
  }) 
  */
/*
 document.addEventListener('DOMContentLoaded', () => {
   const typeButtons = document.querySelectorAll('#type-list button');
   const categoryItems = document.querySelectorAll('#category-list li');

   // Dodajemy nasłuchiwanie kliknięcia do przycisków typów
   typeButtons.forEach(typeButton => {
       typeButton.addEventListener('click', () => {
           // Ukrywamy wszystkie kategorie
           categoryItems.forEach(categoryItem => {
               categoryItem.style.display = 'none';
           });

           // Pobieramy wartość typu z przycisku i pokazujemy odpowiadające kategorie
           const typeId = typeButton.getAttribute('data-type-id');
           const relatedCategories = document.querySelectorAll(`[data-category-type="${typeId}"]`);
           relatedCategories.forEach(categoryItem => {
               categoryItem.style.display = 'block';
           });
       });
   });
});
*/

const typesUrl = "https://api-eko-bazarek.azurewebsites.net/api/products/types";
const categoriesUrl = "https://api-eko-bazarek.azurewebsites.net/api/products/categories";
// var buttonGet = document.getElementById('DAIRY');
var buttons = document.querySelectorAll('ul button');
var typeList = document.getElementById('typeList');
var categories = []
getCategories().then(result => {
  categories = result
  console.log(categories)
})

// function displayCategory(categories) {
//   categories.forEach
// }
function displayCategory(categories) {
  // categoryList.innerHTML = '';
  categories.forEach(category => {
    const categoryElement = document.createElement('li');
    categoryElement.textContent = `ID: ${category.id}, Nazwa: ${category.name}`;
    typeList.appendChild(categoryElement);
  });
}


// displayCategory(categories);

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const categoryId = button.getAttribute('data-category-id');
    const categoryName = button.getAttribute('data-category-name');
    // filterById(categoryId);
    console.log(`${categoryName}`);
    // (`Kategoria ID: ${categoryId}, Nazwa: ${categoryName}`);

    displayCategory(categories);

    
  });
});

// function filterById(categoryId) {
//   const filteredCategories = categories.filter(category => category.id === categoryId);
//   addCategoryElements(filteredCategories);
// }
// displayCategory(categories);
//   })
// })

async function getCategories() {
  const response = await fetch(categoriesUrl)

  if (response.ok) {
    return response.json();
  }
  else {
    throw new Error('nie udalo sie pobrac kategorii. status:' + response.status);
  }
}


