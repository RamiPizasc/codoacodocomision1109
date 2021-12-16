package modelo;

import config.Conexion;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class AlumnosDAO {

    Connection conexion;

    public AlumnosDAO() {
        Conexion con = new Conexion(); //acá creas una instancia de la clase Conexion, ubicada en carpeta config, el archivo Conexion
        conexion = con.getConexion();
    }

    //mostramos una lista
    //pasamos una clase List y Alumnos
    public List<Alumnos> listarAlumnos(){
        PreparedStatement ps; //clase
        ResultSet rs;
        List<Alumnos> lista = new ArrayList<>();
        //List es una clase abstracta y acá hacemos una instancia con el objeto lista
        //luego indicamos una clase específica ArrayList
        try{
            ps = conexion.prepareStatement("SELECT * FROM participantes"); //método prepareStatement
            rs = ps.executeQuery();

            while(rs.next()){
                int id = rs.getInt("id");
                String nombres = rs.getString("nombres");
                String apellidos = rs.getString("apellidos");
                String email = rs.getString("email");
                String telefono = rs.getString("telefono");
                Alumnos alumnos = new Alumnos(id,nombres,apellidos,email,telefono);
                //acá tenemos un constructor, con el creamos un objeto de la clase Alumnos
                lista.add(alumnos);
            }
            return lista;

        }catch(SQLException e){
            System.out.println(e.toString());
            return null;
        }
    }

    //mostramos un Alumno
    public Alumnos mostrarAlumno(int _id) {
        PreparedStatement ps;
        ResultSet rs;
        Alumnos alumno = null;

        try{
            ps = conexion.prepareStatement("SELECT id,nombres,apellidos,email,telefono FROM participantes Where id = ?");
            ps.setInt(1, _id);
            //el primer valor que pasamos refiere al signo de interrogación del where id = ?
            rs = ps.executeQuery();

            while(rs.next()){
                int id = rs.getInt("id");
                String nombres = rs.getString("nombres");
                String apellidos = rs.getString("apellidos");
                String email = rs.getString("email");
                String telefono = rs.getString("telefono");
                alumno = new Alumnos(id,nombres,apellidos,email,telefono);
            }
            return alumno;

        }catch(SQLException e){
            System.out.println(e.toString());
            return null;
        }
    }

    public boolean insertarAlumno(Alumnos alumno){
        PreparedStatement ps;
        try{
            ps = conexion.prepareStatement(
                    "INSERT INTO participantes(nombres,apellidos, email, telefono)VALUES(?,?,?,?)");
            //cada número refiere a cada signo de interrogación
            ps.setString(1,alumno.getNombres());
            ps.setString(2,alumno.getApellidos());
            ps.setString(3,alumno.getEmail());
            ps.setString(4,alumno.getTelefono());
            ps.execute();
            return true;
        }catch(SQLException e) {
            System.out.println(e.toString());
            return false;
        }
    }

//el nombre del parámetro en estos métodos lo inventamos nosotros. 
    public boolean actualizarAlumno(Alumnos alumno){
        PreparedStatement ps;
        try{
            ps = conexion.prepareStatement("UPDATE participantes SET nombres=?, apellidos=?, email=?,telefono=? WHERE id=?");
            ps.setString(1,alumno.getNombres());
            ps.setString(2,alumno.getApellidos());
            ps.setString(3,alumno.getEmail());
            ps.setString(4,alumno.getTelefono());
            ps.setInt(5,alumno.getId());
            ps.execute();
            return true;
        }catch(SQLException e){
            System.out.println(e.toString());
            return false;
        }
    }

    public boolean eliminarAlumno(int _id){
        PreparedStatement ps;
        try{
            ps = conexion.prepareStatement("DELETE FROM participantes WHERE id=?");
            ps.setInt(1, _id);
            ps.execute();
            return true;
        }catch(SQLException e){
            System.out.println(e.toString());
            return false;
        }
    }
    
    public boolean ingresarUsuario(String usuario, String clave){
        PreparedStatement ps;
        ResultSet rs;
        try{
            ps = conexion.prepareStatement("SELECT * FROM usuarios WHERE email=?");
            ps.setString(1, usuario);//es 1, porque el parámetro es uno solo 
            rs = ps.executeQuery();
            //rs es un objeto que guarda los datos del usuario (en este caso el correo electrónico)
            //con el while busca al menos un registro. Si tiene un registro, el flujo del programa entra al bloque. El "return usuario.equals..." compara datos ingresados por usuario con aquellos almacenados en la base. 
            //como tiene el &&, va a comparar si las dos validaciones deuvelven verdadero. Si devuelven verdadero, el bucle retorna true; si alguna de las validaciones devuelve false, el bucle retorna false. Y vuelve a ejecutarse
            //Si el While no detecta valores, retorna false
            
            while(rs.next()){
                return usuario.equals(rs.getString("email")) && clave.equals(rs.getString("password"));
            }return false;
        }catch(SQLException e){
            System.out.println(e.toString());
            return false;
        }
    }
}
