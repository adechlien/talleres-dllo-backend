// Punto 1
// Desarrolle una funcion llamada desglosarString que reciba una string,
// y la string "vocales" o "consonantes", y retorne la cantidad de
// vocales o consonantes de la string recibida.
function desglosarString(string, type) {
  const vowels = "aeiouAEIOU";
  const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  let counter = 0;

  for (let i = 0; i < string.length; i++) {
    if (type === "vocales" && vowels.includes(string[i])) {
      counter++;
    } else if (type === "consonantes" && consonants.includes(string[i])) {
      counter++;
    }
  }

  return counter;
}

console.log(desglosarString("murcielagos", "vocales"));
console.log(desglosarString("murcielagos", "consonantes"));

// Punto 2
// Desarrolle una funcion llamada twoSum que reciba una lista de numero
// enteros y otro numero entero y retorne los indices de los numeros
// del arreglo que sumados sean el otro numero.
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target && numbers[i] != numbers[j]) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 4, 2], 6));

// Punto 3
// Desarrolle una funcion llamada conversionRomana que reciba una string de
// cifras romanas y retorne el equivalente en cifras arábigas.
function conversionRomana(roman) {
  const romanToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  let prevValue = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const currentValue = romanToInt[roman[i]];

    if (currentValue < prevValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }

    prevValue = currentValue;
  }

  return total;
}

console.log(conversionRomana("III"));
console.log(conversionRomana("XIV"));
console.log(conversionRomana("MMXXIV"));
console.log(conversionRomana("MCMXCVII"));

// Punto 4
// Desarrolle una funcion llamada descomposicion que reciba una string de
// palabras separada por comas, donde la primera palabra es la palabra
// a descomponer y el resto son el diccionario a utilizar. La función
// debe retornar las dos palabras del diccionario que compongan la palabra
// a descomponer.
function descomposicion(input) {
  const words = input.split(",");
  const targetWord = words[0];
  const dictionary = words.slice(1);

  for (let i = 0; i < dictionary.length; i++) {
    for (let j = 0; j < dictionary.length; j++) {
      if (i !== j && dictionary[i] + dictionary[j] === targetWord) {
        return [dictionary[i], dictionary[j]];
      }
    }
  }

  return [];
}

console.log(descomposicion("malhumor,al,hum,humor,m,mal,malhu"));

module.exports = {
  desglosarString,
  twoSum,
  conversionRomana,
  descomposicion,
};
