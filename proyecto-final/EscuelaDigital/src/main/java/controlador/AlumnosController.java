package controlador;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import modelo.Alumnos;
import modelo.AlumnosDAO;

//este es el servlet
@WebServlet(name = "AlumnosController", urlPatterns = {"/AlumnosController"})
public class AlumnosController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        AlumnosDAO alum = new AlumnosDAO();
        String accion;
        RequestDispatcher dispatcher =null;
        //dispatcher es un objeto de RequestDispatcher que declaramos con ese nombre y que toma las peticiones
        accion = request.getParameter("accion");
        if(accion == null || accion.isEmpty()){
            dispatcher = request.getRequestDispatcher("Vistas/alumnos.jsp");
        }else if(accion.equals("modificar")){
            dispatcher = request.getRequestDispatcher("Vistas/modificar.jsp");
        }else if(accion.equals("actualizar")){
                String nombre = request.getParameter("nombre");
                String apellido = request.getParameter("apellido");
                String email = request.getParameter("email");
                String telefono = request.getParameter("telefono");
                int id = Integer.parseInt(request.getParameter("id"));
                Alumnos alumno = new Alumnos(id,nombre,apellido,email,telefono);
                
                //los valores entre comillas dobles que están dentro de getParameter coinciden (o deberían) con los que figuran en el atributo name del formulario ubicado en el archivo modificar.jsp
                //el index es 0, lo escribimos asi porque es integer
                //los otros parámetros refieren a las variables creadas entre las lineas 30 y 33
                alum.actualizarAlumno(alumno);
                dispatcher = request.getRequestDispatcher("Vistas/alumnos.jsp");
        }else if(accion.equals("eliminar")){
                int id = Integer.parseInt(request.getParameter("id"));
                alum.eliminarAlumno(id);
                dispatcher = request.getRequestDispatcher("Vistas/alumnos.jsp");
        }else if (accion.equals("nuevo")){
            dispatcher = request.getRequestDispatcher("Vistas/nuevo.jsp");
        }else if(accion.equals("insert")){
            String nombre = request.getParameter("nombre");
            String apellido = request.getParameter("apellido");
            String email = request.getParameter("email");
            String telefono = request.getParameter("telefono");
            Alumnos alumno = new Alumnos(0, nombre, apellido, email, telefono);
            alum.insertarAlumno(alumno);
            dispatcher = request.getRequestDispatcher("Vistas/alumnos.jsp");
        }else if(accion.equals("ingresar")){
            String usuario = request.getParameter("usuario");
            String clave = request.getParameter("password");
            boolean ingresa = alum.ingresarUsuario(usuario,clave);
            //en el formulario de la vista nuevo usuario (que aún no se creó), el atributo name de cada input debería conicididr con los que figuran entre ""
        }
        dispatcher.forward(request,response);
    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        doGet(request,response);

    }
    @Override
    public String getServletInfo() {
        return "Short description";
    }

}
