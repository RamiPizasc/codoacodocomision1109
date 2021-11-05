package actividaduno;
import java.util.Scanner;

public class ActividadUno {
    String nombre;
    String apellido;
    int edad;
    String hobbie;
    String editorCodigo;
    String SO;

    public static void main(String[] args) {
        Scanner entrada = new Scanner (System.in);
        System.out.println("Ingrese su nombre");
        String nombre = entrada.nextLine();
        System.out.println("Ingrese su apellido");
        String apellido = entrada.nextLine();
        System.out.println("Ingrese su hobbie");
        String hobbie = entrada.nextLine();
        System.out.println("Ingrese su editor de código preferido");
        String editorCodigo = entrada.nextLine();
        System.out.println("Ingrese su sistema operativo");
        String SO = entrada.nextLine();
        System.out.println("Ingrese su edad");
        int edad = entrada.nextInt();
        System.out.println(
                "Su nombre es " + nombre + " " + apellido + ". \n" + 
                "Tiene " + edad + " años de edad. \n" + 
                "Su hobbie es " + hobbie + ". \n" + 
                "Su editor de código preferido es " + editorCodigo + " y su sistema operativo es " + SO + ".");
    }  
}