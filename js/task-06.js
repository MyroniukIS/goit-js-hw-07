//Сколько символов должно быть в инпуте, 
//указывается в его атрибуте data - length.
//Если введено подходящее количество, 
//то border инпута становится зеленым, если неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid.


const inputField = document.querySelector("input#validation-input");

const changingBorderOnInput = () => {

  if (Number(inputField.dataset.length) !== inputField.value.length) {
    inputField.classList.replace("valid", "invalid") ||
      inputField.classList.add("invalid");
  }
  
  else {
    inputField.classList.replace("invalid", "valid") ||
      inputField.classList.add("valid");
  }
};

inputField.addEventListener("blur", changingBorderOnInput);