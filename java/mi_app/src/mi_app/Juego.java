/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package mi_app;

/**
 *
 * @author Ramiro
 */

public class Juego {
    /*declaración de propiedades, sin valor al inicio*/
    public int puntos, vidas; 
    public String armas, personaje, enemigos;
    /*debajo está el método constructor con argumentos*/
    Juego(int puntos, int vidas, String armas, String personaje, String enemigos){
            this.puntos=puntos;
            this.vidas=vidas;
            this.armas=armas;
            this.personaje=personaje;
            this.enemigos=enemigos;
    }
    /*métodos*/
    public String mostrar_vidas(){
        return "Soy " + this.personaje + ". Tengo " + this.vidas + " Vidas";
    }
}
