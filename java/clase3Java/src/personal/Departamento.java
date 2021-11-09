package personal;

public class Departamento extends Personal {
    public String depto;
    public Departamento(String nombre, String apellido, int edad, String depto){
     
        super(nombre, apellido, edad);
        this.depto = depto;

       //super es la clase padre, es decir, Personal
       //para hacer la copia de depto, debemos estar debajo de la clase padre
    }
    public String MostrarDatos(){
        return "\n Nombre: "+ nombre + "\n Apellido: " + apellido +
                "\n Edad: " + edad + "\n Sueldo: " + this.getSueldo() +
                "\n Pertenece al depto: " + depto ;
    }
}
