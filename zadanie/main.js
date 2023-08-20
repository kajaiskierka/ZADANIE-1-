import './style.css'

const typesUrl = "https://api-eko-bazarek.azurewebsites.net/api/products/types";
const categoriesUrl = "https://api-eko-bazarek.azurewebsites.net/api/products/categories";
var buttons = document.querySelectorAll('ul button');
console.log(buttons)
var typeList = document.getElementById('typeList');
var categories = []
getCategories().then(result => {
  categories = result
  console.log(categories)
})

function displayCategory(categories) {
  var categoryList = document.querySelector('#categoryList')
  console.log(categoryList)
  categoryList.innerHTML = '';
  categories.sort((categoryA, categoryB) => categoryA.name.localeCompare(categoryB.name));
  categories.forEach(category => {
    var categoryElement = document.createElement('div');
    categoryElement.setAttribute('class','eachProduct');
    var categoryImage = document.createElement('img')
    categoryImage.src = category.iconUrl
    categoryImage.id = category.name
    categoryElement.appendChild(categoryImage)
    var categoryText = document.createElement('p')
    categoryText.textContent = category.name
    categoryElement.appendChild(categoryText)
    categoryList.appendChild(categoryElement);
  });
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // const categoryId = button.getAttribute('data-category-id');
    const categoryName = button.getAttribute('data-category-name');
    console.log(button)
    console.log(categories);
    const filteredCategories = filterCategoriesById(categories, button.id)
    displayCategory(filteredCategories);
  });
});


function filterCategoriesById(categories, id) {
  /* Chcemy:
  1: Wziąć każdy z elemetów categories
  2: Dla każdego z elementów categories sprawdzić czy jest zgodny z id
  3: Zwrócić tylko te elementy które są tego typu
   */
  const filteredCat1 = categories.filter(c => c.type === id)


  // var filteredCat2 = [];
  // categories.forEach(c => {
  //   if(c.type === id) {
  //     filteredCat2.push(c)
  //   }
  // })
  
  return filteredCat1; 
}


async function getCategories() {
  try {
  const response = await fetch(categoriesUrl);

  if (response.ok) {
    return response.json();
  }
  else {
    throw new Error('nie udalo sie pobrac kategorii. status:' + response.status);
  }
}
catch (error) {
  const errormssg = document.getElementById('error-message');
  errormssg.textContent = 'Nie udało się pobrać kategorri' + error.message;
  }
}



