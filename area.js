
var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');

input.addEventListener("input", calculateArea);
inputType.addEventListener("change", calculateArea);
resultType.addEventListener("change", calculateArea);


function calculateArea() {
  var inputTypeValue = inputType.value;
  var resultTypeValue = resultType.value;
if(inputTypeValue === 'squaremeter' && resultTypeValue === 'squaremeter'){result.value = Number(input.value) * 1}
else if(inputTypeValue === 'squaremeter' && resultTypeValue === 'squarekilometer'){result.value = Number(input.value) * 0.000001} 
else if(inputTypeValue === 'squaremeter' && resultTypeValue === 'squarecentimeter'){result.value = Number(input.value) * 100000} 
else if(inputTypeValue === 'squaremeter' && resultTypeValue === 'squaremillimeter'){result.value = Number(input.value) * 100000000} 
else if(inputTypeValue === 'squaremeter' && resultTypeValue === 'squaremicrometer'){result.value = Number(input.value) * 1000000000000} 
else if(inputTypeValue === 'squaremeter' && resultTypeValue === 'squaremile'){result.value = Number(input.value) * 0.0006213689} 
else if(inputTypeValue === 'squaremeter' && resultTypeValue === 'squareyard'){result.value = Number(input.value) * 1.0936132983} 
else if(inputTypeValue === 'squaremeter' && resultTypeValue === 'squarefoot'){result.value = Number(input.value) * 3.280839895} 
else if(inputTypeValue === 'squaremeter' && resultTypeValue === 'squareinch'){result.value = Number(input.value) * 39.37007874} 
else if(inputTypeValue === 'squaremeter' && resultTypeValue === 'hectare'){result.value = Number(input.value) * 0.0001}
else if(inputTypeValue === 'squaremeter' && resultTypeValue === 'acre'){result.value = Number(input.value) * 0.0002471054}

if(inputTypeValue === 'squarekilometer' && resultTypeValue === 'squaremeter'){result.value = Number(input.value) * 1000000}
else if(inputTypeValue === 'squarekilometer' && resultTypeValue === 'squarekilometer'){result.value = Number(input.value) * 1} 
else if(inputTypeValue === 'squarekilometer' && resultTypeValue === 'squarecentimeter'){result.value = Number(input.value) * 10000000000} 
else if(inputTypeValue === 'squarekilometer' && resultTypeValue === 'squaremillimeter'){result.value = Number(input.value) * 1000000000000} 
else if(inputTypeValue === 'squarekilometer' && resultTypeValue === 'squaremicrometer'){result.value = Number(input.value) * 1000000000000000000} 
else if(inputTypeValue === 'squarekilometer' && resultTypeValue === 'squaremile'){result.value = Number(input.value) * 0.3861018768} 
else if(inputTypeValue === 'squarekilometer' && resultTypeValue === 'squareyard'){result.value = Number(input.value) * 1195990.0463} 
else if(inputTypeValue === 'squarekilometer' && resultTypeValue === 'squarefoot'){result.value = Number(input.value) * 10763910.417} 
else if(inputTypeValue === 'squarekilometer' && resultTypeValue === 'squareinch'){result.value = Number(input.value) * 1550003100} 
else if(inputTypeValue === 'squarekilometer' && resultTypeValue === 'hectare'){result.value = Number(input.value) *100 }
else if(inputTypeValue === 'squarekilometer' && resultTypeValue === 'acre'){result.value = Number(input.value) * 247.10538147}

if(inputTypeValue === 'squarecentimeter' && resultTypeValue === 'squaremeter'){result.value = Number(input.value) * 0.0001}
else if(inputTypeValue === 'squarecentimeter' && resultTypeValue === 'squarekilometer'){result.value = Number(input.value) * 0.0000000001} 
else if(inputTypeValue === 'squarecentimeter' && resultTypeValue === 'squarecentimeter'){result.value = Number(input.value) * 1} 
else if(inputTypeValue === 'squarecentimeter' && resultTypeValue === 'squaremillimeter'){result.value = Number(input.value) * 1000} 
else if(inputTypeValue === 'squarecentimeter' && resultTypeValue === 'squaremicrometer'){result.value = Number(input.value) * 1000000}  
else if(inputTypeValue === 'squarecentimeter' && resultTypeValue === 'squaremile'){result.value = Number(input.value) * 0.0006213689} 
else if(inputTypeValue === 'squarecentimeter' && resultTypeValue === 'squareyard'){result.value = Number(input.value) * 1.0936132983} 
else if(inputTypeValue === 'squarecentimeter' && resultTypeValue === 'squarefoot'){result.value = Number(input.value) * 3.280839895} 
else if(inputTypeValue === 'squarecentimeter' && resultTypeValue === 'squareinch'){result.value = Number(input.value) * 39.37007874} 
else if(inputTypeValue === 'squarecentimeter' && resultTypeValue === 'hectare'){result.value = Number(input.value) * 39.37007874}
else if(inputTypeValue === 'squarecentimeter' && resultTypeValue === 'acre'){result.value = Number(input.value) * 39.37007874}

if(inputTypeValue === 'squaremillimeter' && resultTypeValue === 'squaremeter'){result.value = Number(input.value) * 0.000001}
else if(inputTypeValue === 'squaremillimeter' && resultTypeValue === 'squarekilometer'){result.value = Number(input.value) * 0.000000000001} 
else if(inputTypeValue === 'squaremillimeter' && resultTypeValue === 'squarecentimeter'){result.value = Number(input.value) * 0.01} 
else if(inputTypeValue === 'squaremillimeter' && resultTypeValue === 'squaremillimeter'){result.value = Number(input.value) * 1} 
else if(inputTypeValue === 'squaremillimeter' && resultTypeValue === 'squaremicrometer'){result.value = Number(input.value) * 1000000}  
else if(inputTypeValue === 'squaremillimeter' && resultTypeValue === 'squaremile'){result.value = Number(input.value) * 3.861018768E-13} 
else if(inputTypeValue === 'squaremillimeter' && resultTypeValue === 'squareyard'){result.value = Number(input.value) * 0.000001196} 
else if(inputTypeValue === 'squaremillimeter' && resultTypeValue === 'squarefoot'){result.value = Number(input.value) * 0.0000107639} 
else if(inputTypeValue === 'squaremillimeter' && resultTypeValue === 'squareinch'){result.value = Number(input.value) * 0.0015500031} 
else if(inputTypeValue === 'squaremillimeter' && resultTypeValue === 'hectare'){result.value = Number(input.value) * 9.999999999E-11 }
else if(inputTypeValue === 'squaremillimeter' && resultTypeValue === 'acre'){result.value = Number(input.value) * 2.471053814E-10}

if(inputTypeValue === 'squaremicrometer' && resultTypeValue === 'squaremeter'){result.value = Number(input.value) * 1.E-12}
else if(inputTypeValue === 'squaremicrometer' && resultTypeValue === 'squarekilometer'){result.value = Number(input.value) * 1.E-18} 
else if(inputTypeValue === 'squaremicrometer' && resultTypeValue === 'squarecentimeter'){result.value = Number(input.value) * 9.999999999E-9} 
else if(inputTypeValue === 'squaremicrometer' && resultTypeValue === 'squaremillimeter'){result.value = Number(input.value) * 0.000001} 
else if(inputTypeValue === 'squaremicrometer' && resultTypeValue === 'squaremicrometer'){result.value = Number(input.value) * 1}  
else if(inputTypeValue === 'squaremicrometer' && resultTypeValue === 'squaremile'){result.value = Number(input.value) * 3.861018768E-19} 
else if(inputTypeValue === 'squaremicrometer' && resultTypeValue === 'squareyard'){result.value = Number(input.value) * 1.195990046E-12} 
else if(inputTypeValue === 'squaremicrometer' && resultTypeValue === 'squarefoot'){result.value = Number(input.value) * 1.076391041E-11} 
else if(inputTypeValue === 'squaremicrometer' && resultTypeValue === 'squareinch'){result.value = Number(input.value) * 1.5500031E-9} 
else if(inputTypeValue === 'squaremicrometer' && resultTypeValue === 'hectare'){result.value = Number(input.value) * 1.E-16}
else if(inputTypeValue === 'squaremicrometer' && resultTypeValue === 'acre'){result.value = Number(input.value) * 2.471053814E-16}

if(inputTypeValue === 'squaremile' && resultTypeValue === 'squaremeter'){result.value = Number(input.value) * 2589990}
else if(inputTypeValue === 'squaremile' && resultTypeValue === 'squarekilometer'){result.value = Number(input.value) * 2.58999} 
else if(inputTypeValue === 'squaremile' && resultTypeValue === 'squarecentimeter'){result.value = Number(input.value) * 25899900000} 
else if(inputTypeValue === 'squaremile' && resultTypeValue === 'squaremillimeter'){result.value = Number(input.value) * 2589990000000} 
else if(inputTypeValue === 'squaremile' && resultTypeValue === 'squaremicrometer'){result.value = Number(input.value) * 2589990000000000000}
else if(inputTypeValue === 'squaremile' && resultTypeValue === 'squaremile'){result.value = Number(input.value) * 1} 
else if(inputTypeValue === 'squaremile' && resultTypeValue === 'squareyard'){result.value = Number(input.value) * 3097602.26} 
else if(inputTypeValue === 'squaremile' && resultTypeValue === 'squarefoot'){result.value = Number(input.value) * 27878420.34} 
else if(inputTypeValue === 'squaremile' && resultTypeValue === 'squareinch'){result.value = Number(input.value) * 4014492529} 
else if(inputTypeValue === 'squaremile' && resultTypeValue === 'hectare'){result.value = Number(input.value) * 258.999}
else if(inputTypeValue === 'squaremile' && resultTypeValue === 'acre'){result.value = Number(input.value) * 640.00046695}

if(inputTypeValue === 'squareyard' && resultTypeValue === 'squaremeter'){result.value = Number(input.value) *0.83612736}
else if(inputTypeValue === 'squareyard' && resultTypeValue === 'squarekilometer'){result.value = Number(input.value) * 8.3612736E-7} 
else if(inputTypeValue === 'squareyard' && resultTypeValue === 'squarecentimeter'){result.value = Number(input.value) * 8361.2736} 
else if(inputTypeValue === 'squareyard' && resultTypeValue === 'squaremillimeter'){result.value = Number(input.value) * 836127.36} 
else if(inputTypeValue === 'squareyard' && resultTypeValue === 'squaremicrometer'){result.value = Number(input.value) * 836127360000}  
else if(inputTypeValue === 'squareyard' && resultTypeValue === 'squaremile'){result.value = Number(input.value) * 3.228303429E-7} 
else if(inputTypeValue === 'squareyard' && resultTypeValue === 'squareyard'){result.value = Number(input.value) * 1} 
else if(inputTypeValue === 'squareyard' && resultTypeValue === 'squarefoot'){result.value = Number(input.value) * 9} 
else if(inputTypeValue === 'squareyard' && resultTypeValue === 'squareinch'){result.value = Number(input.value) * 1296} 
else if(inputTypeValue === 'squareyard' && resultTypeValue === 'hectare'){result.value = Number(input.value) * 0.0000836127}
else if(inputTypeValue === 'squareyard' && resultTypeValue === 'acre'){result.value = Number(input.value) * 0.0002066116}

if(inputTypeValue === 'squarefoot' && resultTypeValue === 'squaremeter'){result.value = Number(input.value) * 0.09290304}
else if(inputTypeValue === 'squarefoot' && resultTypeValue === 'squarekilometer'){result.value = Number(input.value) * 9.290304E-8} 
else if(inputTypeValue === 'squarefoot' && resultTypeValue === 'squarecentimeter'){result.value = Number(input.value) * 929.0304} 
else if(inputTypeValue === 'squarefoot' && resultTypeValue === 'squaremillimeter'){result.value = Number(input.value) * 92903.04} 
else if(inputTypeValue === 'squarefoot' && resultTypeValue === 'squaremicrometer'){result.value = Number(input.value) * 92903040000}  
else if(inputTypeValue === 'squarefoot' && resultTypeValue === 'squaremile'){result.value = Number(input.value) * 3.58700381E-8} 
else if(inputTypeValue === 'squarefoot' && resultTypeValue === 'squareyard'){result.value = Number(input.value) * 0.1111111111} 
else if(inputTypeValue === 'squarefoot' && resultTypeValue === 'squarefoot'){result.value = Number(input.value) *1 } 
else if(inputTypeValue === 'squarefoot' && resultTypeValue === 'squareinch'){result.value = Number(input.value) *144 } 
else if(inputTypeValue === 'squarefoot' && resultTypeValue === 'hectare'){result.value = Number(input.value) * 0.0000092903}
else if(inputTypeValue === 'squarefoot' && resultTypeValue === 'acre'){result.value = Number(input.value) * 0.0000229568}

if(inputTypeValue === 'squareinch' && resultTypeValue === 'squaremeter'){result.value = Number(input.value) * 0.00064516}
else if(inputTypeValue === 'squareinch' && resultTypeValue === 'squarekilometer'){result.value = Number(input.value) 6.4516E-10} 
else if(inputTypeValue === 'squareinch' && resultTypeValue === 'squarecentimeter'){result.value = Number(input.value) * 6.4516} 
else if(inputTypeValue === 'squareinch' && resultTypeValue === 'squaremillimeter'){result.value = Number(input.value) * 645.16} 
else if(inputTypeValue === 'squareinch' && resultTypeValue === 'squaremicrometer'){result.value = Number(input.value) * 645160000}  
else if(inputTypeValue === 'squareinch' && resultTypeValue === 'squaremile'){result.value = Number(input.value) * 2.490974868E-10} 
else if(inputTypeValue === 'squareinch' && resultTypeValue === 'squareyard'){result.value = Number(input.value) * 0.0007716049} 
else if(inputTypeValue === 'squareinch' && resultTypeValue === 'squarefoot'){result.value = Number(input.value) * 0.0069444444} 
else if(inputTypeValue === 'squareinch' && resultTypeValue === 'squareinch'){result.value = Number(input.value) * 1} 
else if(inputTypeValue === 'squareinch' && resultTypeValue === 'hectare'){result.value = Number(input.value) * 6.4516E-8}
else if(inputTypeValue === 'squareinch' && resultTypeValue === 'acre'){result.value = Number(input.value) * 31.594225079E-7}

if(inputTypeValue === 'hectare' && resultTypeValue === 'squaremeter'){result.value = Number(input.value) * 10000}
else if(inputTypeValue === 'hectare' && resultTypeValue === 'squarekilometer'){result.value = Number(input.value) * 0.01} 
else if(inputTypeValue === 'hectare' && resultTypeValue === 'squarecentimeter'){result.value = Number(input.value) * 100000000} 
else if(inputTypeValue === 'hectare' && resultTypeValue === 'squaremillimeter'){result.value = Number(input.value) * 10000000000} 
else if(inputTypeValue === 'hectare' && resultTypeValue === 'squaremicrometer'){result.value = Number(input.value) * 10000000000000000}  
else if(inputTypeValue === 'hectare' && resultTypeValue === 'squaremile'){result.value = Number(input.value) * 0.0038610188} 
else if(inputTypeValue === 'hectare' && resultTypeValue === 'squareyard'){result.value = Number(input.value) * 11959.900463} 
else if(inputTypeValue === 'hectare' && resultTypeValue === 'squarefoot'){result.value = Number(input.value) * 107639.10417} 
else if(inputTypeValue === 'hectare' && resultTypeValue === 'squareinch'){result.value = Number(input.value) * 15500031} 
else if(inputTypeValue === 'hectare' && resultTypeValue === 'hectare'){result.value = Number(input.value) * 1}
else if(inputTypeValue === 'hectare' && resultTypeValue === 'acre'){result.value = Number(input.value) * 2.4710538147}

if(inputTypeValue === 'acre' && resultTypeValue === 'squaremeter'){result.value = Number(input.value) * 4046.8564224}
else if(inputTypeValue === 'acre' && resultTypeValue === 'squarekilometer'){result.value = Number(input.value) * 0.0040468564} 
else if(inputTypeValue === 'acre' && resultTypeValue === 'squarecentimeter'){result.value = Number(input.value) * 40468564.224} 
else if(inputTypeValue === 'acre' && resultTypeValue === 'squaremillimeter'){result.value = Number(input.value) * 4046856422.4} 
else if(inputTypeValue === 'acre' && resultTypeValue === 'squaremicrometer'){result.value = Number(input.value) * 4046856422400000}  
else if(inputTypeValue === 'acre' && resultTypeValue === 'squaremile'){result.value = Number(input.value) * 0.0015624989} 
else if(inputTypeValue === 'acre' && resultTypeValue === 'squareyard'){result.value = Number(input.value) * 4840} 
else if(inputTypeValue === 'acre' && resultTypeValue === 'squarefoot'){result.value = Number(input.value) * 43560} 
else if(inputTypeValue === 'acre' && resultTypeValue === 'squareinch'){result.value = Number(input.value) * 6272640} 
else if(inputTypeValue === 'acre' && resultTypeValue === 'hectare'){result.value = Number(input.value) * 0.4046856422}
else if(inputTypeValue === 'acre' && resultTypeValue === 'acre'){result.value = Number(input.value) * 1}

}