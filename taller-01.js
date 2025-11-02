// Punto 1
function convertidorTemp(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}
let celsius = -40;
console.log(
  celsius + " grados celsius a fahrenheit: " + convertidorTemp(celsius),
);

// Punto 2
function resolvedor(a, b, c, opt) {
  let x = 2 * a;
  if (opt == "n") {
    x = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / x;
  } else if (opt == "p") {
    x = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / x;
  }
  return x;
}
console.log(resolvedor(1, 5, 4, "p"));

// Punto 3
function mejorParidad(n) {
  if (n % 2 == 0) {
    return 0;
  }
  return 1;
}

paridad = mejorParidad(7);
if (paridad == 0) {
  console.log("Es par");
} else if (paridad == 1) {
  console.log("No es par");
}

// Punto 4
function peorParidad(n) {
  let m = n + 45 - 2 / 48;
  let o = m - 45;
  if ((o + 2 * 48) % 2 == 0) {
    return 0;
  }
  return 1;
}

paridad = peorParidad(7);
if (paridad == 0) {
  console.log("Es par");
} else if (paridad == 1) {
  console.log("No es par");
}

module.exports = {
  convertidorTemp,
  resolvedor,
  mejorParidad,
  peorParidad,
};
