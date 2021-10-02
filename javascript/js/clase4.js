let elemento = document.getElementById("principal");
//capturamos el div del DOM
let btn = document.getElementById("btn"); /*capturamos el botón*/

// console.log(elemento);
// alert(elemento);

// addEventListener("click");

//TODO: DATO importante, A diferencia de html, acá el eventlistenerse escribe onmouseover, no "mouseover"

// document.addEventListener("click", inicio);
//acá, si hacemos clic en cualquier parte se muestra el alert, dado que llama a la función

/*
let btn = document.getElementById("btn");
btn.addEventListener("click", inicio);
// "inicio" en este caso es el callback para la función "inicio". Acá el el botón está cargado con ese evento

function inicio() {
    alert("Estamos llamando a la función");
}
*/

//function es una función anónima

window.addEventListener("load", function () {
  elemento.innerHTML = `
    <form action="#">
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="button" id="btn" class="btn btn-primary" onclick="entrar()">Entrar</button>
    </form>
    `;
});

//alert("estamos en onload");

//load es un evento para el momento en que se carga la página.
//  con load renderizamos el formulario
//  acá se debe agregar los paréntesis, a diferencia de lo que vimos con la función inicio
//  no ponemos document, sino window. Window abarca más que document. Permite que se cargue el evento

// ARRAY
let usuarios = ["Ramiro", "Pedro", 40];
/*estructura de un array: corchetes que incluyen datos ordenados. pueden incluirse cualquier tipo de datos */

//  OBJETO
let usuario = {
  name: "Ramiro Pizá",
  email: "rami@bue.edu.ar",
  pass: "123456",
  validar: (e, p) => {
    if (e === usuario.email && p === usuario.pass) {
      return true;
    } else {
      return false;
    }
  },
};
/*estructura de un objeto: nombre del objeto, llaves, propiedades y sus valores (pueden ser objetos, strings, numeros, funciones, arrays*/

function entrar() {
  //e.preventDefault();

  let email = document.getElementById("exampleInputEmail1").value;
  let pass = document.getElementById("exampleInputPassword1").value;

  let entra = usuario.validar(email, pass);
  if (entra) {
    elemento.innerHTML = `
      <h1>Administración</h1>
      <p>Bienvenid@ ${usuario.name}</p>
      `;
  }
}

//acá almacenamos en una variable el callback a la propiedad validar, dado que esta propiedad contiene una arrow function con parámteros
//a ese callback también le pasamos argumentos, estos son las variables email y pass, que están más arriba
//la arrow function contenida en la propiedad "validar" va a retornar true o false, dependiendo de las coincidencias con los datos almacenados en el objeto y los datos del input de la función entrar

//si retorna true, entonces se da la bienvenida
