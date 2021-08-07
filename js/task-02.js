//Напиши скрипт, который для каждого элемента массива ingredients 
//создаст отдельный li, после чего вставит все li за одну операцию 
//в список ul.ingredients.
//Для создания DOM - узлов используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listIngredients = (ingredient) => {
  let elementOfList = document.createElement("li");
  elementOfList.innerText = ingredient;
  return elementOfList;
};

const elementsOfIngredients = document.querySelector("ul#ingredients");
const newIngredients = ingredients.map(listIngredients);

elementsOfIngredients.append(...newIngredients);