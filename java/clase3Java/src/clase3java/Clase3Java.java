package clase3java;

import personal.Departamento;
import personal.Personal;


public class Clase3Java {


    public static void main(String[] args) {
        Personal persona = new Personal("Ramiro", "Piza", 24);
        Personal administrativo = new Personal("Juan", "Carso", 33);
        Personal mantenimiento = new Personal("Ruben", "Gomez", 21);
        
        mantenimiento.setSueldo(60000);
        administrativo.setSueldo(80000);
        persona.setSueldo(250000);
        
        Departamento it = new Departamento("Verónica", "Furlan", 32, "Desarrollo");
        
        it.setSueldo(500000);
        
        System.out.println(it.nombre + " esta ganando " + it.getSueldo() + " y trabaja en el departamento de " + it.depto);
        it.depto="Gerencia General";
        System.out.println(it.MostrarDatos());
                
        
        System.out.println("El sueldo del personal de limpieza es: " 
                + mantenimiento.getSueldo());
        System.out.println("El sueldo del personal administrativo es:" 
                + administrativo.getSueldo());
        
    };
    
}
