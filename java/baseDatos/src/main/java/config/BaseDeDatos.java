package config;

import java.sql.*;
//instalamos todas las librerías

public class BaseDeDatos {
    public String driver = "com.mysql.jdbc.Driver";
    public Connection getConexion(){
        //creaste método getConexion, que retorna tipo connection
        Connection conexion=null;
        //creas variable conexion, que es del tipo connection
        try{
            conexion = DriverManager.getConnection("jdbc:mysql//localhost:3306/comision1109");
        }catch(SQLException e){
            System.out.println(e.toString());
        }
        return conexion;
    }
    public static void main(String [] args){
        System.out.println("hola");
    }
}
