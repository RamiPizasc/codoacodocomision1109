package config;

import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;
//instalamos todas las librerías

public class BaseDeDatos {
    public String driver = "com.mysql.cj.jdbc.Driver";
    public Connection getConexion() throws SQLException{
        //creaste método getConexion (vos le diste ese nombre getConexion), que viene desde la clase Connection y retorna tipo Connection
        Connection conexion=null;
        //creas atributo conexion, que es una instancia del objeto Connection. No le damos valor ahora, sino después, con el DriverManager
        try{
            Class.forName(driver); 
            conexion = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/comision1109", 
                    "ramiropiza", "4931");
            //pasamos puerto, usuario y contraseña; conectamos con el drivermanager y usamos un método llamado getConnection
        }catch(SQLException e){
            //SQLException es una clase, esa "e" refiere a que se produjo un error en la conexioón
            System.out.println(e.toString());
        } catch (ClassNotFoundException ex) {
            //ClassNotFoundException es una clase, acá la "ex" refiere a que la clase Driver no se encontró
            //entra acá si el usuario es incorrecto
            Logger.getLogger(BaseDeDatos.class.getName()).log(Level.SEVERE, null, ex);
        }
        return conexion;
    }
    public static void main(String [] args) throws SQLException{
        BaseDeDatos con = new BaseDeDatos();
        //la clase no se importó, esta en la misma hoja. No tenemos constructor. No le pasamos ningún valor, tenemos el método y la variable dentro de la clase
        Connection conexion = null;
        conexion = con.getConexion();
        //desde el main traemos lo que devuelve el método que esta más arrriba y lo invocamos con el objeto "con"
        
        PreparedStatement ps;
        //clase PreparedStatement, no está inicializada
        
        ResultSet rs;
        //clase ResultSet, maneja datos que traemos de la base de datos
        //no está inicializada
        
        ps = conexion.prepareStatement("SELECT * FROM participantes");
        //llamamos al objeto "conexion" de la clase Connection y usamos el método prepareStatement. 
        //se dirige a la tabla participantes de mi base de datos
        rs = ps.executeQuery();
        //traemos datos de la base
        
        while(rs.next()){
            //rs es un arreglo. El next sirve para captar información y pasarlo
            //metodos getString
            int id = rs.getInt("id");
            String nombres = rs.getString("nombres");
            String apellidos = rs.getString("apellidos");
            String email = rs.getString("email");
            String telefono = rs.getString("teléfono");
            System.out.println("\n id: " + id + 
                    "\n Nombres: "+ nombres +
                    "\n Apellidos: " + apellidos +
                    "\n Email: " + email + 
                    "\n Telefono: " + telefono);
        } 
    }
}