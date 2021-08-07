//Счетчик состоит из спана и кнопок, которые должны увеличивать 
//и уменьшать значение счетчика на 1.

//Создай переменную counterValue в которой будет хранится 
//текущее значение счетчика.
//Создай функции increment и decrement для увеличения и 
//уменьшения значения счетчика
//Добавь слушатели кликов на кнопки, 
//вызовы функций и обновление интерфейса

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const span = document.querySelector("#value");

let counterValue = 0;

const incrementFunc = () => {
    counterValue += 1;
    
  span.textContent = counterValue;
};

const decrementFunc = () => {
    counterValue -= 1;
    
  span.textContent = counterValue;
};

incrementButton.addEventListener("click", incrementFunc);
decrementButton.addEventListener("click", decrementFunc);