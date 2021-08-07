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

const listIngridients = (ingridient) => {
  let elementOfList = document.createElement("li");
  elementOfList.innerText = ingridient;
  return elementOfList;
};

const elementsOfIngridients = document.querySelector("ul#ingredients");
const newIngridients = ingredients.map(listIngridients);

elementsOfIngridients.append(...newIngridients);