//   alert("Hola Mundo"); /*ventana emergente*/
console.log("Estamos en la consola");
let nombre =
  "Ramiro"; /*tipo de dato asignado: string. el let ocupa espacio solo cuando se utiliza*/
var numero = 10; /*tipo de dato asignado: number. El var siempre ocupa espacio en memoria */
const PI = 3.1416; /*el valor no cambia, es constante*/
let hayClases = true; /*el tipo de dato es booleano*/
let esFeriado = false;

console.log(numero);
console.log(numero + 25);
console.log(numero + 25 + nombre); /*el operador + concatena y suma*/
console.log(numero + 25 + " " + nombre);
console.log(hayClases);
console.log(5 > 3); /*imprime true*/
if (5 > 3) {
  console.log("Es correcto");
}
/*cuando usamos condicionales se valida esa condición que está entre (). si es verdadera, se ejecuta la instrucción de abajo*/
if (5 > 8) {
  console.log("Es correcto");
} else {
  console.log("No es correcto");
}
/*si es falsa, se ejecuta el else*/
console.log(5 > 3 ? "Es correcto" : "No es correcto");
/*operador ternario ? y :*/
if (hayClases == true) {
  console.log("Me conecto a la videollamada");
} else {
  console.log("No me conecto a la videollamada");
}
if (8 >= 8) {
  console.log("Es correcto");
} else {
  console.log("No es correcto");
}
if (hayClases == true && esFeriado != true) {
  /*para que la validación del AND && sea true, ambas condiciones deben cumplirse*/
  console.log("Me conecto a la videollamada");
} else {
  console.log("No me conecto a la videollamada");
}
if (25 < 32 || 12 > 20) {
  /*para que la validación del OR || sea true, debe cumplirse una condición*/
  console.log("Se cumplió la condición");
}
let saludo = "Hola, ¿Cómo estás? ";
let saludar = saludo + nombre;

let elemento = document.getElementById("principal");
// console.log(elemento);
elemento.innerHTML = "<h1 class='text-center bg-info'>" + saludar + "</h1>";
elemento.documentWrite("<h1 class='text-center bg-info'>" + saludar + "</h1>");
