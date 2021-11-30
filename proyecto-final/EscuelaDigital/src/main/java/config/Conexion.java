package config;
import java.sql.*;

public class Conexion {
    public String driver = "com.mysql.cj.jdbc.Driver";
    public Connection getConexion(){
        
        Connection conexion = null;
        //creamos objeto conexion
        try{
            Class.forName(driver);
            conexion = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/comision1109", 
                    "ramiropiza", "4931");
        }catch(ClassNotFoundException | SQLException e){
            System.out.println(e.toString());
        }
        return conexion;        
    }
    /*public static void main (String args[]) throws SQLException{
        Connection c = null;
        Conexion con = new Conexion();
        c = con.getConexion();
        PreparedStatement ps;
        ResultSet rs;
        
        ps = c.prepareStatement("SELECT * FROM participantes");
        rs = ps.executeQuery();
        
        while(rs.next()){
            //mientras rs tenga más opciones
            int id = rs.getInt("id");
            String nombres = rs.getString("nombres");
            String apellidos = rs.getString("apellidos");
            String email = rs.getString("email");
            String telefono = rs.getString("telefono");
            
            System.out.println(
                      "\nId: " + id 
                    + "\nNombre:  " + nombres 
                    + "\nApelllidos: " + apellidos 
                    + "\nEmail: " + email 
                    + "\nTelefono: " + telefono);
        }
    }*/
}
