package clase2java;

public class Ingreso {
        private String usuario, pass;
        private String miUsuario="Ramiro";
        private String miPass="123456";
        
        public String getUsuario(){
            return this.usuario;
        }
        /*los metodos get devuelven la copia que ingresamos en el main*/
        
        public void setUsuario(String us){
            this.usuario=us;
        }
        
        public String getPass(){
            return this.pass;
        }
        
        public void setPass(String pass){
            this.pass=pass;
        }
        
        /*metodo equals es de string. se usa para comparar, es similar a "==" en JS*/
        public boolean Validar(){
            return miUsuario.equals(this.usuario) && miPass.equals(this.pass);
        }
}
