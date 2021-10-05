// alert();
//probamos que funcione el enlace entre html y js

let elemento = document.querySelector("#principal");
//usamos el método querySelector para tomar un único elemento
//declaramos a la variable de manera global para que pueda ser accedida en todo el documento

//Arreglos

let mascotas = [];
//array vacío

// mascotas[0] = "Loro";
//asignamos valores a los índices. Iniciamos desde 0
//asignamos string

// mascotas[1] = "Perro";

// {propietario, especie, raza, edad, tamaño, imagen, tipoConsulta}

const agregarMascota = () => {
  let datos = document.querySelectorAll("input");
  //   console.log(datos[6].checked);
  let consulta = "";
  if (datos[6].checked) {
    consulta = "urgencia";
  } else {
    consulta = "consulta";
  }

  let mascota = {
    propietario: datos[0].value,
    especie: datos[1].value,
    raza: datos[2].value,
    edad: datos[3].value,
    peso: datos[4].value,
    img: datos[5].value,
    consulta: consulta,
  };
  mascotas.push(mascota);
};

//console.log(datos[0].value) mostramos el valor del primer input

//capturamos todos los input
//guardamos en la variable datos todos los selectores input (los del formulario)

//por parámetro podemos pasar un objeto

//push es un método que toma un elemento y lo empuja al final del array

const mostrarMascotas = () => {
  for (let a = 0; a < mascotas.length; a++) {
    elemento.innerHTML += `
        <h2> ${a} ${mascotas[a]}</h2>`;
  }
};
//ECMA SCRIPT 6 declaramos una constante que guarda una función anónima en forma de arrow

// function mostrarMascotas() {}
//ECMA SCRIPT 5 declaramos una función con nombre

//es "+=" para que vaya concatenando valores del arreglo. sino, si pusiera "=" mostraría "2 Gallo"

// elemento.innerHTML = `<h2> ${mascotas} </h2>`;
// elemento.innerHTML = `<h2>${mascotas[1]} </h2>`;
//accedemos a un elemento del array

// {propietario, especie, raza, edad, tamaño, imagen, tipoConsulta}

const CrearFormulario = () => {
  elemento.innerHTML = `
    <form>
  <div class="mb-3">
    <label for="prop" class="form-label">
    Propietario
    </label>
    <input type="text" class="form-control" id="prop">
  </div>

  <div class="mb-3">
    <label for="especie" class="form-label">
    Especie
    </label>
    <input type="text" class="form-control" id="especie">
  </div>

  <div class="mb-3">
    <label for="raza" class="form-label">
    Raza
    </label>
    <input type="text" class="form-control" id="raza">
  </div>
  
  <div class="mb-3">
    <label for="edad" class="form-label">
    Edad
    </label>
    <input type="text" class="form-control" id="edad">
  </div>

  <div class="mb-3">
    <label for="peso" class="form-label">
    Peso
    </label>
    <input type="text" class="form-control" id="peso">
  </div>

  <div class="mb-3">
    <label for="img" class="form-label">
    Imagen
    </label>
    <input type="text" class="form-control" id="img">
  </div>

  <div class="mb-3 form-check">
    <input type="radio" class="form-check-input" name="tipo" id="urgencia">
    <label class="form-check-label" for="urgencia">Urgencia</label>
</div> 
  <div class="mb-3 form-check">
    <input type="radio" class="form-check-input" name="tipo" id="consulta">
    <label class="form-check-label" for="consulta">Consulta</label>
  </div>

  <button type="button" class="btn btn-primary" id="btn">Agregar datos</button>
</form>
    `;
  document.getElementById("btn").addEventListener("click", agregarMascota);
};

//creamos id "btn"

CrearFormulario();
