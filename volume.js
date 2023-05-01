var input = document.getElementById('input'),
    result = document.getElementById('result'),
    inputType = document.getElementById('inputType'),
    resultType = document.getElementById('resultType'),
    inputTypeValue , resultTypeValue;

input.addEventListener('keyup' , myResult)
inputType.addEventListener('change' , myResult)
resultType.addEventListener('change' , myResult)

inputTypeValue = inputType.value
resultTypeValue = resultType.value

function myResult(){
inputTypeValue = inputType.value
resultTypeValue = resultType.value

if(inputTypeValue === 'cubicmeter' && resultTypeValue === 'cubicmeter'){result.value = Number(input.value) * 1}
else if(inputTypeValue === 'cubicmeter' && resultTypeValue === 'cubickilometer'){result.value = Number(input.value) * 0.000000001} 
else if(inputTypeValue === 'cubicmeter' && resultTypeValue === 'cubiccentimeter'){result.value = Number(input.value) * 1000000} 
else if(inputTypeValue === 'cubicmeter' && resultTypeValue === 'cubicmillimeter'){result.value = Number(input.value) * 10000000000} 
else if(inputTypeValue === 'cubicmeter' && resultTypeValue === 'liter'){result.value = Number(input.value) * 1000} 
else if(inputTypeValue === 'cubicmeter' && resultTypeValue === 'milliliter'){result.value = Number(input.value) * 1000000} 
else if(inputTypeValue === 'cubicmeter' && resultTypeValue === 'gallon'){result.value = Number(input.value) * 264.17217686} 
else if(inputTypeValue === 'cubicmeter' && resultTypeValue === 'ounce'){result.value = Number(input.value) * 35195.079728}

if(inputTypeValue === 'cubickilometer' && resultTypeValue === 'cubicmeter'){result.value = Number(input.value) * 1000000000}
else if(inputTypeValue === 'cubickilometer' && resultTypeValue === 'cubickilometer'){result.value = Number(input.value)*1} 
else if(inputTypeValue === 'cubickilometer' && resultTypeValue === 'cubiccentimeter'){result.value = Number(input.value)*1000000000000000} 
else if(inputTypeValue === 'cubickilometer' && resultTypeValue === 'cubicmillimeter'){result.value = Number(input.value)*1000000000000000000} 
else if(inputTypeValue === 'cubickilometer' && resultTypeValue === 'liter'){result.value = Number(input.value)*1000000000000} 
else if(inputTypeValue === 'cubickilometer' && resultTypeValue === 'milliliter'){result.value = Number(input.value)*1000000000000000} 
else if(inputTypeValue === 'cubickilometer' && resultTypeValue === 'gallon'){result.value = Number(input.value)*264172176858} 
else if(inputTypeValue === 'cubickilometer' && resultTypeValue === 'ounce'){result.value = Number(input.value)*33814038637823} 

if(inputTypeValue === 'cubiccentimeter' && resultTypeValue === 'cubicmeter'){result.value = Number(input.value)*0.000001}
else if(inputTypeValue === 'cubiccentimeter' && resultTypeValue === 'cubickilometer'){result.value = Number(input.value)*9.999999999E-16} 
else if(inputTypeValue === 'cubiccentimeter' && resultTypeValue === 'cubiccentimeter'){result.value = Number(input.value)*1} 
else if(inputTypeValue === 'cubiccentimeter' && resultTypeValue === 'cubicmillimeter'){result.value = Number(input.value)*1000} 
else if(inputTypeValue === 'cubiccentimeter' && resultTypeValue === 'liter'){result.value = Number(input.value)*0.001} 
else if(inputTypeValue === 'cubiccentimeter' && resultTypeValue === 'milliliter'){result.value = Number(input.value)*1} 
else if(inputTypeValue === 'cubiccentimeter' && resultTypeValue === 'gallon'){result.value = Number(input.value)*0.0002641722} 
else if(inputTypeValue === 'cubiccentimeter' && resultTypeValue === 'ounce'){result.value = Number(input.value)*0.0338140386} 

if(inputTypeValue === 'cubicmillimeter' && resultTypeValue === 'cubicmeter'){result.value = Number(input.value)*0.000000001}
else if(inputTypeValue === 'cubicmillimeter' && resultTypeValue === 'cubickilometer'){result.value = Number(input.value)*0.000000000000000001} 
else if(inputTypeValue === 'cubicmillimeter' && resultTypeValue === 'cubiccentimeter'){result.value = Number(input.value)*0.001} 
else if(inputTypeValue === 'cubicmillimeter' && resultTypeValue === 'cubicmillimeter'){result.value = Number(input.value)*1} 
else if(inputTypeValue === 'cubicmillimeter' && resultTypeValue === 'liter'){result.value = Number(input.value)*0.000001} 
else if(inputTypeValue === 'cubicmillimeter' && resultTypeValue === 'milliliter'){result.value = Number(input.value)*0.001} 
else if(inputTypeValue === 'cubicmillimeter' && resultTypeValue === 'gallon'){result.value = Number(input.value)*2.641721768E-7} 
else if(inputTypeValue === 'cubicmillimeter' && resultTypeValue === 'ounce'){result.value = Number(input.value)*0.000033814} 

if(inputTypeValue === 'liter' && resultTypeValue === 'cubicmeter'){result.value = Number(input.value)*0.001}
else if(inputTypeValue === 'liter' && resultTypeValue === 'cubickilometer'){result.value = Number(input.value) * 0.000000000001} 
else if(inputTypeValue === 'liter' && resultTypeValue === 'cubiccentimeter'){result.value = Number(input.value)*1000} 
else if(inputTypeValue === 'liter' && resultTypeValue === 'cubicmillimeter'){result.value = Number(input.value)*1000000} 
else if(inputTypeValue === 'liter' && resultTypeValue === 'liter'){result.value = Number(input.value)*1} 
else if(inputTypeValue === 'liter' && resultTypeValue === 'milliliter'){result.value = Number(input.value)*1000} 
else if(inputTypeValue === 'liter' && resultTypeValue === 'gallon'){result.value = Number(input.value)*0.2641721769} 
else if(inputTypeValue === 'liter' && resultTypeValue === 'ounce'){result.value = Number(input.value)* 33.814038638} 

if(inputTypeValue === 'milliliter' && resultTypeValue === 'cubicmeter'){result.value = Number(input.value)*0.000001}
else if(inputTypeValue === 'milliliter' && resultTypeValue === 'cubickilometer'){result.value = Number(input.value) * 9.999999999E-16} 
else if(inputTypeValue === 'milliliter' && resultTypeValue === 'cubiccentimeter'){result.value = Number(input.value)*1} 
else if(inputTypeValue === 'milliliter' && resultTypeValue === 'cubicmillimeter'){result.value = Number(input.value)*1000} 
else if(inputTypeValue === 'milliliter' && resultTypeValue === 'liter'){result.value = Number(input.value)*0.001} 
else if(inputTypeValue === 'milliliter' && resultTypeValue === 'milliliter'){result.value = Number(input.value)*1} 
else if(inputTypeValue === 'milliliter' && resultTypeValue === 'gallon'){result.value = Number(input.value)*0.0002641722} 
else if(inputTypeValue === 'milliliter' && resultTypeValue === 'ounce'){result.value = Number(input.value)* 0.0338140386} 

if(inputTypeValue === 'gallon' && resultTypeValue === 'cubicmeter'){result.value = Number(input.value)*0.00378541}
else if(inputTypeValue === 'gallon' && resultTypeValue === 'cubickilometer'){result.value = Number(input.value) *3.78541E-12} 
else if(inputTypeValue === 'gallon' && resultTypeValue === 'cubiccentimeter'){result.value = Number(input.value)* 3785.41} 
else if(inputTypeValue === 'gallon' && resultTypeValue === 'cubicmillimeter'){result.value = Number(input.value)*3785410} 
else if(inputTypeValue === 'gallon' && resultTypeValue === 'liter'){result.value = Number(input.value)*3.78541} 
else if(inputTypeValue === 'gallon' && resultTypeValue === 'milliliter'){result.value = Number(input.value)*3785.41} 
else if(inputTypeValue === 'gallon' && resultTypeValue === 'gallon'){result.value = Number(input.value)*1} 
else if(inputTypeValue === 'gallon' && resultTypeValue === 'ounce'){result.value = Number(input.value)* 128} 


if(inputTypeValue === 'ounce' && resultTypeValue === 'cubicmeter'){result.value = Number(input.value)*0.0000295735}
else if(inputTypeValue === 'ounce' && resultTypeValue === 'cubickilometer'){result.value = Number(input.value) *2.957351562E-14} 
else if(inputTypeValue === 'ounce' && resultTypeValue === 'cubiccentimeter'){result.value = Number(input.value)*29.573515625} 
else if(inputTypeValue === 'ounce' && resultTypeValue === 'cubicmillimeter'){result.value = Number(input.value)*29573.515625} 
else if(inputTypeValue === 'ounce' && resultTypeValue === 'liter'){result.value = Number(input.value)*0.0295735156} 
else if(inputTypeValue === 'ounce' && resultTypeValue === 'milliliter'){result.value = Number(input.value)*29.573515625} 
else if(inputTypeValue === 'ounce' && resultTypeValue === 'gallon'){result.value = Number(input.value)*0.0078125} 
else if(inputTypeValue === 'ounce' && resultTypeValue === 'ounce'){result.value = Number(input.value)* 1} 

}