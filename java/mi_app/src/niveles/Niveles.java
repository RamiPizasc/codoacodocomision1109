/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package niveles;

/**
 *
 * @author Ramiro
 */
public class Niveles {
    private String dificultad; 

    /*función: retorna*/
    public String getDificultad() {
        return dificultad;
    }
    
    /*método: modifica pero no retorna*/
    public void setDificultad(String dificultad) {
        this.dificultad = dificultad;
    }
    public String experiencia;
    public String checkPoint;
   /*debajo está el método constructor con argumentos*/
    public Niveles(String experiencia, String checkPoint){
        /*lo que recibimos como parámetro se lo asignamos a los atributos*/
        this.experiencia = experiencia;
        this.checkPoint = checkPoint;
    }
    public String reiniciar(){
        return "Estamos en el nivel: " + this.checkPoint;
    }
    
}
