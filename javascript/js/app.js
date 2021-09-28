//   alert("Hola Mundo"); /*ventana emergente*/

console.log("Estamos en la consola");
let nombre = "Ramiro";
/*tipo de dato asignado: string. el let ocupa espacio solo cuando se utiliza*/
var numero = 10; /*tipo de dato asignado: number. El var siempre ocupa espacio en memoria */
const PI = 3.1416; /*tipo de valor: float. El valor no cambia, es constante*/
let hayClases = true; /*el tipo de dato es booleano*/
let esFeriado = false;

console.log(numero);
console.log(numero + 25);
console.log(numero + 25 + nombre); /*el operador "+"" concatena y suma*/
console.log(numero + 25 + " " + nombre);
console.log(hayClases);
console.log(5 > 3); /*imprime true*/
if (5 > 3) {
  console.log("Es correcto");
}
/*cuando usamos condicionales se valida esa condición que está entre (). 
si es verdadera, se ejecuta la instrucción de abajo
si es falsa, se ejecuta el else*/

if (5 > 8) {
  console.log("Es correcto");
} else {
  console.log("No es correcto");
}
console.log(5 > 3 ? "Es correcto" : "No es correcto");

/*operadores ternarios ? y :*/
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
  /*para que la validación del AND "&&"" sea true, ambas condiciones deben cumplirse*/
  console.log("Me conecto a la videollamada");
} else {
  console.log("No me conecto a la videollamada");
}
if (25 < 32 || 12 > 20) {
  /*para que la validación del OR "||"" sea true, debe cumplirse una condición*/
  console.log("Se cumplió la condición");
}
let saludo = "Hola, ¿Cómo estás? ";
let saludar = saludo + nombre;

let elemento = document.getElementById("principal");
// console.log(elemento);

elemento.innerHTML = "<h1 class='text-center bg-info'>" + saludar + "</h1>";
document.write(
  "<div class='container'><div class='row' id='principal'><h1 class='text-center bg-info'>" +
    saludar +
    "</h1></div></div>"
);

document.write(`
  <div class="container"><div class="row" id="principal">
  <h1 class='text-center bg-info'> ${saludar}</h1></div></div>
`);

/*
//almacenamos el mensaje que ingresamos en el prompt para poder usarlo como argumento de las validaciones

let message = prompt(
  "Menú \n 1. Papas fritas \n 2. Milanesas con fritas \n 3. Milanesa Napolitana con fritas"
);


el triple igual compara tipo de dato y valor

if (message === "1") {
  elemento.innerHTML = "<p>Disfruta de tus Papas</p>";
} else if (message === "2") {
  elemento.innerHTML = "<p>Disfruta de tu Milanesa con fritas</p>";
} else if (message === "3") {
  elemento.innerHTML = "<p>Disfruta de tu Milanesa Napolitana</p>";
} else {
  elemento.innerHTML = "No es una opción el valor tipeado";
}

//imprimimos el valor ingresado por usuario en la vista html
// elemento.innerHTML = message;

 switch (message) {
     case "1":
       elemento.innerHTML = "<p>Disfruta de tus Papas</p>";
       break; 

//el break corta el flujo del switch

  case "2":
    elemento.innerHTML = "<p>Disfruta de tu Milanesa con fritas</p>";
    break;

  case "3":
    elemento.innerHTML = "<p>Disfruta de tu Milanesa Napolitana</p>";
    break;

  default:
    elemento.innerHTML = "No es una opción el valor tipeado";
    let message = prompt(
      "Menú \n 1. Papas fritas \n 2. Milanesas con fritas \n 3. Milanesa Napolitana con fritas"
    );
}

let num = parseInt(prompt("Ingresa el primer número"));
let num2 = parseInt(prompt("Ingresa el segundo número"));

//acá almacenamos el valor del prompt en variables let. 
//con el parseInetconvertimos el string a número

let result =
"<p>El resultado de " +
num +
" y " +
num2 +
" " +
" es: " +
(num + num2) +
"</p>";

//colocamos los ( ) para que se efectúe la suma de números
elemento.innerHTML = result;
elemento.innerHTML += "Hola";
*/
