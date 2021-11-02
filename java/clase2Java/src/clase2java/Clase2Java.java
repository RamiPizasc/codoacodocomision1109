package clase2java;

import java.util.Scanner;


public class Clase2Java {

    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        /*creamos objeto, importamos la librería/clase Scanner; el objeto entrada permite recibir datos ingresados por consola
        el metodo nextLine captura el dato ingresado por la consola y luego se almacena en la variable*/
        System.out.println("Ingrese su nombre de usuario: ");
        String nombre = entrada.nextLine();
                System.out.println("Ingrese su contraseña: ");
        String pass = entrada.nextLine();
        Ingreso ing = new Ingreso();
        ing.setUsuario(nombre);
        ing.setPass(pass);
        System.out.println(ing.Validar());
    }
}
