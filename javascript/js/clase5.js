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

  // console.log(consulta);

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
  mostrarMascotas();
};

//console.log(datos[0].value) mostramos el valor del primer input

//capturamos todos los input
//guardamos en la variable datos todos los selectores input (los del formulario)

//por parámetro podemos pasar un objeto

//push es un método que toma un elemento y lo empuja al final del array

const cambiarDatos = (c) => {
  let datos = document.querySelectorAll("input");
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
  mascotas[c] = mascota;
  mostrarMascotas();
};

const modificarM = (b) => {
  let mascota = mascotas[b];
  let consulta = "";
  if (mascota.consulta == "consulta") {
    consulta = `  <div class="mb-3 form-check">
        <input type="radio" class="form-check-input" name="tipo" id="urgencia">
        <label class="form-check-label" for="urgencia">Urgencia</label>
      </div> 
      <div class="mb-3 form-check">
         <input type="radio" class="form-check-input" name="tipo" id="consulta" checked>
        <label class="form-check-label" for="consulta">Consulta</label>
        </div>  `;
  } else {
    consulta = `  <div class="mb-3 form-check">
    <input type="radio" class="form-check-input" name="tipo" id="urgencia" checked>
    <label class="form-check-label" for="urgencia">Urgencia</label>
  </div> 
  <div class="mb-3 form-check">
     <input type="radio" class="form-check-input" name="tipo" id="consulta"
    <label class="form-check-label" for="consulta">Consulta</label>
    </div>  `;
  }

  elemento.innerHTML = `
  <form>
  <div class="mb-3">
    <label for="prop" class="form-label">
    Propietario
    </label>
    <input type="text" class="form-control" id="prop" value="${mascota.propietario}">
  </div>

  <div class="mb-3">
    <label for="especie" class="form-label">
    Especie
    </label>
    <input type="text" class="form-control" id="especie" value="${mascota.especie}">
  </div>

  <div class="mb-3">
    <label for="raza" class="form-label">
    Raza
    </label>
    <input type="text" class="form-control" id="raza" value="${mascota.raza}">
  </div>
  
  <div class="mb-3">
    <label for="edad" class="form-label">
    Edad
    </label>
    <input type="text" class="form-control" id="edad" value="${mascota.edad}">
  </div>

  <div class="mb-3">
    <label for="peso" class="form-label">
    Peso
    </label>
    <input type="text" class="form-control" id="peso" value="${mascota.peso}">
  </div>

  <div class="mb-3">
    <label for="img" class="form-label">
    Imagen
    </label>
    <input type="text" class="form-control" id="img" value="${mascota.img}">
  </div>

  ${consulta}
  <button type="button" onclick="cambiarDatos(${b})" class="btn btn-primary" id="btn">Modificar</button>
</form>`;
};

//<input type="text" class="form-control" id="img" value="${mascota.img}"> acá si agregamos el value, para traer los datos almacenados en el array
//esto no sucedía en el formulario original, ya que los campos debían estar en blanco
//guardamos los datos en la variable local "mascota"

const mostrarMascotas = () => {
  elemento.innerHTML = "";
  for (let a = 0; a < mascotas.length; a++) {
    elemento.innerHTML += `
    <div class="card" style="width: 18rem;">
  <img src="${mascotas[a].img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Propietario ${mascotas[a].propietario}</h5>
    <p class="card-text">Especie ${mascotas[a].especie}</p>
    <p class="card-text">Raza ${mascotas[a].raza}</p>
    <p class="card-text">Edad ${mascotas[a].edad}</p>
    <p class="card-text">Peso ${mascotas[a].peso}</p>
    <p class="card-text">Tipo de consulta ${mascotas[a].consulta}</p>
    <a href="#" class="btn btn-primary" onclick="CrearFormulario()">Agregar otra mascota</a>
    <a href="#" class="btn btn-primary" onclick="modificarM(${a})">Modificar datos</a>
  </div>
</div>`;
  }
};

//agregamos el evento click al botón y tenemos la callback de "CrearFormulario()"
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

// let numeros = [8, 500, 2, 3, 78];
// console.log(numeros.indexOf(8));
