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

