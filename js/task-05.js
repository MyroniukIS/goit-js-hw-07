//Напиши скрипт который, при наборе текста в инпуте 
//input#name - input(событие input), подставляет его текущее значение 
//в span#name - output.Если инпут пустой, 
//в спане должна отображаться строка 'незнакомец'.

const inputField = document.querySelector("input#name-input");
const outputField = document.querySelector("span#name-output");

const textInputOutput = () => {
    const newText = inputField.value;
    
  if (newText) {
    outputField.innerText = newText;
  }
  
  else {
    outputField.innerText = "незнакомец";
  }
};

inputField.addEventListener("input", textInputOutput);