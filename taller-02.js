// Punto 1
// Desarrolle una funcion llamada findMax que reciba una
// lista de números por parámetro y retorne el mayor valor.
function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

console.log("Punto 1");
console.log(findMax([3, 17, -1, 4, -19]));

// Punto 2
// Desarrolle una funcion llamada includes que reciba una
// lista de números y un numero por parámetro y retorne un
// booleano representando si el numero se encuentra en la lista.
function includes(numbers, number) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == number) {
      return true;
    }
  }
  return false;
}

console.log("Punto 2");
console.log(includes([3, 17, -1, 4, -19], 2));
console.log(includes([3, 17, -1, 4, -19], 4));

// Punto 3
// Desarrolle una funcion llamada sum que reciba una lista
// de números y retorne la suma de los elementos de la lista.
function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log("Punto 3");
console.log(sum([3, 17, -1, 4, -19]));

// Punto 4
// Desarrolle una funcion llamada missingNumbers que reciba
// una lista de números y retorne una lista de los números
// faltantes entre el menor y mayor de la lista.
function findMin(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

function missingNumbers(numbers) {
  let min = findMin(numbers);
  let max = findMax(numbers);
  let missingOnes = [];
  for (let i = 1; i <= max - min - 1; i++) {
    if (!numbers.includes(min + i)) {
      missingOnes.push(min + i);
    }
  }
  return missingOnes;
}

console.log("Punto 4");
console.log(missingNumbers([7, 2, 4, 6, 3, 9]));

module.exports = {
  findMax,
  includes,
  sum,
  missingNumbers,
};
