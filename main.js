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

if(inputTypeValue === 'meter' && resultTypeValue === 'meter'){result.value = Number(input.value) * 1}
else if(inputTypeValue === 'meter' && resultTypeValue === 'kilometer'){result.value = Number(input.value) * 0.001} 
else if(inputTypeValue === 'meter' && resultTypeValue === 'centimeter'){result.value = Number(input.value) * 100} 
else if(inputTypeValue === 'meter' && resultTypeValue === 'millimeter'){result.value = Number(input.value) * 1000} 
else if(inputTypeValue === 'meter' && resultTypeValue === 'micrometer'){result.value = Number(input.value) * 1000000} 
else if(inputTypeValue === 'meter' && resultTypeValue === 'nanometer'){result.value = Number(input.value) * 1000000000} 
else if(inputTypeValue === 'meter' && resultTypeValue === 'mile'){result.value = Number(input.value) * 0.0006213689} 
else if(inputTypeValue === 'meter' && resultTypeValue === 'yard'){result.value = Number(input.value) * 1.0936132983} 
else if(inputTypeValue === 'meter' && resultTypeValue === 'foot'){result.value = Number(input.value) * 3.280839895} 
else if(inputTypeValue === 'meter' && resultTypeValue === 'inch'){result.value = Number(input.value) * 39.37007874} 

if(inputTypeValue === 'kilometer' && resultTypeValue === 'meter'){result.value = Number(input.value) * 1000}
else if(inputTypeValue === 'kilometer' && resultTypeValue === 'kilometer'){result.value = Number(input.value)*1} 
else if(inputTypeValue === 'kilometer' && resultTypeValue === 'centimeter'){result.value = Number(input.value)*100000} 
else if(inputTypeValue === 'kilometer' && resultTypeValue === 'millimeter'){result.value = Number(input.value)*1000000} 
else if(inputTypeValue === 'kilometer' && resultTypeValue === 'micrometer'){result.value = Number(input.value)*1000000000} 
else if(inputTypeValue === 'kilometer' && resultTypeValue === 'nanometer'){result.value = Number(input.value)*1000000000000} 
else if(inputTypeValue === 'kilometer' && resultTypeValue === 'mile'){result.value = Number(input.value)*0.6213689} 
else if(inputTypeValue === 'kilometer' && resultTypeValue === 'yard'){result.value = Number(input.value)*1093.6132983} 
else if(inputTypeValue === 'kilometer' && resultTypeValue === 'foot'){result.value = Number(input.value)*3280.839895} 
else if(inputTypeValue === 'kilometer' && resultTypeValue === 'inch'){result.value = Number(input.value)*39370.07874} 

if(inputTypeValue === 'centimeter' && resultTypeValue === 'meter'){result.value = Number(input.value)*0.01}
else if(inputTypeValue === 'centimeter' && resultTypeValue === 'kilometer'){result.value = Number(input.value)*0.00001} 
else if(inputTypeValue === 'centimeter' && resultTypeValue === 'centimeter'){result.value = Number(input.value)*1} 
else if(inputTypeValue === 'centimeter' && resultTypeValue === 'millimeter'){result.value = Number(input.value)*10} 
else if(inputTypeValue === 'centimeter' && resultTypeValue === 'micrometer'){result.value = Number(input.value)*10000} 
else if(inputTypeValue === 'centimeter' && resultTypeValue === 'nanometer'){result.value = Number(input.value)*10000000} 
else if(inputTypeValue === 'centimeter' && resultTypeValue === 'mile'){result.value = Number(input.value)*0.000006213689} 
else if(inputTypeValue === 'centimeter' && resultTypeValue === 'yard'){result.value = Number(input.value)*0.010936133} 
else if(inputTypeValue === 'centimeter' && resultTypeValue === 'foot'){result.value = Number(input.value)*0.03280839895} 
else if(inputTypeValue === 'centimeter' && resultTypeValue === 'inch'){result.value = Number(input.value)*0.3937007874} 

if(inputTypeValue === 'millimeter' && resultTypeValue === 'meter'){result.value = Number(input.value)*0.001}
else if(inputTypeValue === 'millimeter' && resultTypeValue === 'kilometer'){result.value = Number(input.value)*0.000001} 
else if(inputTypeValue === 'millimeter' && resultTypeValue === 'centimeter'){result.value = Number(input.value)*0.1} 
else if(inputTypeValue === 'millimeter' && resultTypeValue === 'millimeter'){result.value = Number(input.value)*1} 
else if(inputTypeValue === 'millimeter' && resultTypeValue === 'micrometer'){result.value = Number(input.value)*1000} 
else if(inputTypeValue === 'millimeter' && resultTypeValue === 'nanometer'){result.value = Number(input.value)*1000000} 
else if(inputTypeValue === 'millimeter' && resultTypeValue === 'mile'){result.value = Number(input.value)*0.0000006217} 
else if(inputTypeValue === 'millimeter' && resultTypeValue === 'yard'){result.value = Number(input.value)*0.0010936133} 
else if(inputTypeValue === 'millimeter' && resultTypeValue === 'foot'){result.value = Number(input.value)*0.003280839895} 
else if(inputTypeValue === 'millimeter' && resultTypeValue === 'inch'){result.value = Number(input.value)*0.03937007874} 

if(inputTypeValue === 'micrometer' && resultTypeValue === 'meter'){result.value = Number(input.value)*0.000001}
else if(inputTypeValue === 'micrometer' && resultTypeValue === 'kilometer'){result.value = Number(input.value) * 0.000000001} 
else if(inputTypeValue === 'micrometer' && resultTypeValue === 'centimeter'){result.value = Number(input.value)*0.0001} 
else if(inputTypeValue === 'micrometer' && resultTypeValue === 'millimeter'){result.value = Number(input.value)*0.001} 
else if(inputTypeValue === 'micrometer' && resultTypeValue === 'micrometer'){result.value = Number(input.value)*1} 
else if(inputTypeValue === 'micrometer' && resultTypeValue === 'nanometer'){result.value = Number(input.value)*1000} 
else if(inputTypeValue === 'micrometer' && resultTypeValue === 'mile'){result.value = Number(input.value)*0.0000000006217} 
else if(inputTypeValue === 'micrometer' && resultTypeValue === 'yard'){result.value = Number(input.value)* 0.0000010936 } 
else if(inputTypeValue === 'micrometer' && resultTypeValue === 'foot'){result.value = Number(input.value)*0.0000032808 } 
else if(inputTypeValue === 'micrometer' && resultTypeValue === 'inch'){result.value = Number(input.value)*0.0000393701 } 

if(inputTypeValue === 'nanometer' && resultTypeValue === 'meter'){result.value = Number(input.value)*0.000000001}
else if(inputTypeValue === 'nanometer' && resultTypeValue === 'kilometer'){result.value = Number(input.value) * 0.000000000001} 
else if(inputTypeValue === 'nanometer' && resultTypeValue === 'centimeter'){result.value = Number(input.value)*0.0000001} 
else if(inputTypeValue === 'nanometer' && resultTypeValue === 'millimeter'){result.value = Number(input.value)*0.000001} 
else if(inputTypeValue === 'nanometer' && resultTypeValue === 'micrometer'){result.value = Number(input.value)*0.001} 
else if(inputTypeValue === 'nanometer' && resultTypeValue === 'nanometer'){result.value = Number(input.value)*1} 
else if(inputTypeValue === 'nanometer' && resultTypeValue === 'mile'){result.value = Number(input.value)*0.0000000000006217} 
else if(inputTypeValue === 'nanometer' && resultTypeValue === 'yard'){result.value = Number(input.value)* 0.0000000010936 } 
else if(inputTypeValue === 'nanometer' && resultTypeValue === 'foot'){result.value = Number(input.value)*0.0000000032808 } 
else if(inputTypeValue === 'nanometer' && resultTypeValue === 'inch'){result.value = Number(input.value)*0.0000000393701 }

if(inputTypeValue === 'mile' && resultTypeValue === 'meter'){result.value = Number(input.value)*1609.35}
else if(inputTypeValue === 'mile' && resultTypeValue === 'kilometer'){result.value = Number(input.value) *1.60935 } 
else if(inputTypeValue === 'mile' && resultTypeValue === 'centimeter'){result.value = Number(input.value)* 160935} 
else if(inputTypeValue === 'mile' && resultTypeValue === 'millimeter'){result.value = Number(input.value)*1609350} 
else if(inputTypeValue === 'mile' && resultTypeValue === 'micrometer'){result.value = Number(input.value)*1609350000} 
else if(inputTypeValue === 'mile' && resultTypeValue === 'nanometer'){result.value = Number(input.value)*1609350000000} 
else if(inputTypeValue === 'mile' && resultTypeValue === 'mile'){result.value = Number(input.value)*1} 
else if(inputTypeValue === 'mile' && resultTypeValue === 'yard'){result.value = Number(input.value)* 1760.0065617} 
else if(inputTypeValue === 'mile' && resultTypeValue === 'foot'){result.value = Number(input.value)*5280.019685} 
else if(inputTypeValue === 'mile' && resultTypeValue === 'inch'){result.value = Number(input.value)*63360.23622}

if(inputTypeValue === 'yard' && resultTypeValue === 'meter'){result.value = Number(input.value)*0.9144}
else if(inputTypeValue === 'yard' && resultTypeValue === 'kilometer'){result.value = Number(input.value) *0.0009144 } 
else if(inputTypeValue === 'yard' && resultTypeValue === 'centimeter'){result.value = Number(input.value)* 91.44} 
else if(inputTypeValue === 'yard' && resultTypeValue === 'millimeter'){result.value = Number(input.value)*914.4} 
else if(inputTypeValue === 'yard' && resultTypeValue === 'micrometer'){result.value = Number(input.value)*914400} 
else if(inputTypeValue === 'yard' && resultTypeValue === 'nanometer'){result.value = Number(input.value)*914400000} 
else if(inputTypeValue === 'yard' && resultTypeValue === 'mile'){result.value = Number(input.value)*0.0005681797} 
else if(inputTypeValue === 'yard' && resultTypeValue === 'yard'){result.value = Number(input.value)* 1} 
else if(inputTypeValue === 'yard' && resultTypeValue === 'foot'){result.value = Number(input.value)*3} 
else if(inputTypeValue === 'yard' && resultTypeValue === 'inch'){result.value = Number(input.value)*36}

if(inputTypeValue === 'foot' && resultTypeValue === 'meter'){result.value = Number(input.value)*0.3048}
else if(inputTypeValue === 'foot' && resultTypeValue === 'kilometer'){result.value = Number(input.value) *0.0003048} 
else if(inputTypeValue === 'foot' && resultTypeValue === 'centimeter'){result.value = Number(input.value)* 30.48} 
else if(inputTypeValue === 'foot' && resultTypeValue === 'millimeter'){result.value = Number(input.value)*304.8} 
else if(inputTypeValue === 'foot' && resultTypeValue === 'micrometer'){result.value = Number(input.value)*304800} 
else if(inputTypeValue === 'foot' && resultTypeValue === 'nanometer'){result.value = Number(input.value)*304800000} 
else if(inputTypeValue === 'foot' && resultTypeValue === 'mile'){result.value = Number(input.value)*0.0001893932} 
else if(inputTypeValue === 'foot' && resultTypeValue === 'yard'){result.value = Number(input.value)* 0.3333333333} 
else if(inputTypeValue === 'foot' && resultTypeValue === 'foot'){result.value = Number(input.value)*1} 
else if(inputTypeValue === 'foot' && resultTypeValue === 'inch'){result.value = Number(input.value)*12}

if(inputTypeValue === 'inch' && resultTypeValue === 'meter'){result.value = Number(input.value)*0.0254}
else if(inputTypeValue === 'inch' && resultTypeValue === 'kilometer'){result.value = Number(input.value) *0.0000254} 
else if(inputTypeValue === 'inch' && resultTypeValue === 'centimeter'){result.value = Number(input.value)* 2.54} 
else if(inputTypeValue === 'inch' && resultTypeValue === 'millimeter'){result.value = Number(input.value)*25.4} 
else if(inputTypeValue === 'inch' && resultTypeValue === 'micrometer'){result.value = Number(input.value)*25400} 
else if(inputTypeValue === 'inch' && resultTypeValue === 'nanometer'){result.value = Number(input.value)*25400000} 
else if(inputTypeValue === 'inch' && resultTypeValue === 'mile'){result.value = Number(input.value)*0.0000157828} 
else if(inputTypeValue === 'inch' && resultTypeValue === 'yard'){result.value = Number(input.value)* 0.0277777778} 
else if(inputTypeValue === 'inch' && resultTypeValue === 'foot'){result.value = Number(input.value)*0833333333} 
else if(inputTypeValue === 'inch' && resultTypeValue === 'inch'){result.value = Number(input.value)*1}

}

function convertWeight(value, fromUnit, toUnit) {
  const units = {
    "Kilogram": 1,
    "Gram": 1000,
    "Milligram": 1000000,
    "Ton": 0.001,
    "Pound": 2.20462,
    "Ounce": 35.274,
    "Carrat": 5000,
    "Atomic Mass Unit": 6.02214179e+26
  };

  const result = (value * units[fromUnit]) / units[toUnit];
  return result;
}

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