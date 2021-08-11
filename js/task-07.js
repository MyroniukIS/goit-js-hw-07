//Напиши скрипт, который реагирует на изменение значения 
//input#font - size - control(событие input) 
//и изменяет инлайн - стиль span#text обновляя 
//свойство font - size.
//В результате при перетаскивании ползунка будет меняться размер текста.

const rangeValue = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");

const updateRangeValueToFontSize = () => {
    text.style.fontSize = `${rangeValue.value}px`;
};

rangeValue.addEventListener("input", updateRangeValueToFontSize);