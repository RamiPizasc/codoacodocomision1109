// alert("estamos en el archivo externo");
/*

const nombres = ["Luis", "Tomás", "Lilian", "Cecilia"];

nombres.push("Regulo");

//se pueden asignar valores a una const

console.log(nombres);

nombres.push("");

const manejoDeNombres = (a) => {
  nombres.push(a);
  console.log(nombres);
};


//OBJETOS
const agregarNombre = () => {
    let nombre = {
        nombre: "Ramiro",
        apellido: "Pizá",
    };
    nombres.push(nombre);
    console.log(nombres);
};
agregarNombre();
console.log(nombres);

*/

//CLASES

class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
  mostrarNombres() {
    return this.nombre;
  }
}

let nombre = prompt("Escribe tu nombre");
let persona1 = new Persona("Ramiro", "Pizá");
let persona2 = new Persona(nombre, "Morfulis");
//acá arriba instanciamos la clase Persona para el objeto persona1 y persona2, y almacenamos todo en una variable

let persona3 = {
  nombre: "Javier",
  apellido: "Pérez",
};
//acá arriba creé un objeto y lo almacené en una variable

console.log(persona1.mostrarNombres());
console.log(persona2.mostrarNombres());

class Vehiculo {
  encender() {
    return "El auto está encendido";
  }
}

let auto = new Vehiculo();
auto.velocidad = 150;
//agregamos la propiedad al objeto y le asignamos un valor

let moto = {
  encender: () => {
    return "La moto está encendida";
  },
};
//moto es un objeto que no es una instancia de la clase vehiculo

console.log(auto.encender());
console.log(auto.velocidad);
console.log(moto.encender());
