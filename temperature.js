
var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

function myResult1() {
  var inputTypeValue = inputType.value;
  var resultTypeValue = resultType.value;

  if (inputTypeValue === 'celsius' && resultTypeValue === 'celsius') {result.value = Number(input.value) * 1} 
else if (inputTypeValue === 'celsius' && resultTypeValue === 'kelvin') {result.value = Number(input.value) + 273.15  } 
else if (inputTypeValue === 'celsius' && resultTypeValue === 'fahrenheit') {result.value = Number(input.value) * 1.8 + 32}

  if (inputTypeValue === 'kelvin' && resultTypeValue === 'celsius') {result.value = Number(input.value) - 273.15  } 
else if (inputTypeValue === 'kelvin' && resultTypeValue === 'kelvin') {result.value = Number(input.value) * 1  } 
else if (inputTypeValue === 'kelvin' && resultTypeValue === 'fahrenheit') {result.value = Number(input.value) * 1.8 - 459.67  }

  if (inputTypeValue === 'fahrenheit' && resultTypeValue === 'celsius') {result.value = (Number(input.value) - 32) / 1.8} 
else if (inputTypeValue === 'fahrenheit' && resultTypeValue === 'kelvin') {result.value = (Number(input.value) + 459.67) / 1.8}
else if (inputTypeValue === 'fahrenheit' && resultTypeValue === 'fahrenheit') {result.value = Number(input.value) * 1}
}
