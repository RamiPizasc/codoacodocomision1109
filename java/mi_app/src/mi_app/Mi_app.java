/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */

package mi_app;

import niveles.Niveles;

/**
 *
 * @author Ramiro
 */

public class Mi_app {
/*clase principal donde creamos el main*/

    public static void main(String[] args) {
        /*llamamos al constructor y usamos palabra reservada new´e instanciamos clase Juego. 
        Le asignamos parametros */
        
        Juego jugador = new Juego(0, 3, "ak47", "Juan", "Netbeans");
        Juego jugador1 = new Juego(0, 3, "ak47", "Pedro", "Netbeans");
        
        System.out.println("Soy " + jugador.personaje);
        System.out.println(jugador1.personaje);
        System.out.println(jugador.mostrar_vidas());
        
        Niveles niveles = new Niveles("media", "dos");
        niveles.setDificultad("principante");
        System.out.println(niveles.getDificultad());
        jugador.vidas=jugador.vidas--;
        
        
        if(jugador.vidas==0){
            System.out.println(niveles.reiniciar());
        }
    }
}
