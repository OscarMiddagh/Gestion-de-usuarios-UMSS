//Campo para la historia Registrar Usuario
import React from 'react'
import './RegistroUsuario.css';
import axios from "axios"; 
import "bootstrap/dist/css/bootstrap.min.css";


const url = "https://gestiondeusuariosumss.herokuapp.com/";

class RegistroUsuario extends React.Component{


   
    state = {
            roles:[],
    
    nombres: '',
    apellidos: '',
    correo: '',
    documentoDeIdentidad: '',
    direccion: '',
    ciudad: '',
    pais: '',
    rol: {
        id: '',
        nombreRol: ''
    },
    contraseña: '',
    
}
    


    limitarcorreo= (e) =>{        //cuando se escriba en inputs se cambien en el estado form
        if (e.target.value.match("^[Ññíóáéú@.a-zA-Z0-9]*$") != null) {
        this.setState({
        [e.target.name]: e.target.value,
        })
       }else {
        alert("Intente escribir sin espacios ni simbolos especiales ");
      }
    }

    limitarpasswd = (e) => {
        if (e.target.value.match("^[Ñña-zA-Z0-9]*$") != null) {
          this.setState({
            [e.target.name]: e.target.value
          })
        }
        else {
          alert("Intente escribir entre numeros y letras, sin espacios");
        }
      }

      limitaralfabeticos = (e) => {
        if (e.target.value.match("^[ Ñña-zA-Z]*$") != null) {
            this.setState({
            [e.target.name]: e.target.value
          })
        }
        else {
          alert("Intente escribir letras, sin espacios");
        }
      }

      limitaralfanumericos = (e) => {
        if (e.target.value.match("[0123456789]") != null) {
            this.setState({
            [e.target.name]: e.target.value
          })
        }
        else {
          alert("Intente escribir números, sin espacios");
        }
      }
      mensajevalidacion=(e)=>{
        document.getElementById("errorCoincidir").style.visibility = "hidden";
        var p1 = document.getElementById("inflog2").value;
        var p2 = document.getElementById("inflog3").value;
        if (p1 !== p2) {
          document.getElementById("errorCoincidir").innerHTML = "La contraseña no coincide";
          document.getElementById("errorCoincidir").style.visibility = "visible";
        } else { 
          
        }
      }
      validarpassword=(e)=>{
        var p1 = document.getElementById("inflog2").value;
        var p2 = document.getElementById("inflog3").value;
        if (p1 !== p2) {
          alert("Las contraseñas deben de coincidir");
          e.preventDefault();
        } else { 
        }
      }
      //repetirContraseña=(e)=>{
        //  if(e.target.value.match(this.contraseña=this.confirmarContraseña)){
          //  this.setState({
            //    [e.target.name]: e.target.value
              //})

          //}else{
            //  alert("La contraseña no coincide")
          //}
      //}

    //handlerSubmit=(e) =>{
      //  e.preventDefault()
        //console.log(this.state)
        //axios.post()
    //}


      registrarse = async (e) => {
        await axios.post(url + "/guardarUsuario/", this.state)
          .then(response=>{
              console.log(response);
            

          })
          .catch(error=>{
              console.log(error)
          })
      }

      componentDidMount(){
        axios.get("https://gestiondeusuariosumss.herokuapp.com/roles")
        .then(response=>{
            console.log(response);
           this.setState({roles: response.data})
       })
        .catch((error)=>{
            console.log(error);
        });
       }



      

    render (){
        const {correo, contraseña, nombres, apellidos, direccion, documentoDeIdentidad,pais,ciudad} =this.state
        return(
            

            <form onSubmit={(this.registrarse,this.validarpassword)} id="form">
                <div>

            <h3 align="center">Crear una cuenta</h3>
            <h3 align="center" id="titulo">CREAR PERMISOS PARA ROL DE USUARIOS</h3>
            <h3 align="left">Informacion del Login</h3>
       
           <div id="Login" align="left">
          <label htmlFor="email">Correo</label><br/>
          <input type="email" className="div" name="correo" id="inflog1" aria-describedby="emailHelp" placeholder="Ingrese su correo" value={correo} onChange={this.limitarcorreo} required /> <br/>
          <label htmlFor="Contraseña" >Contraseña</label> <br/>
          <input type="password" className="div" name="contraseña" id="inflog2" placeholder="Contraseña" value={contraseña} onChange={this.limitarpasswd} required minLength="8" /><br/>
          <label htmlFor="Contraseña" >Confirmar Contraseña</label><br/>
          <input type="password"  className="div" name="confirmarContraseña" id="inflog3"  onChange={this.mensajevalidacion} placeholder="Repetir Contraseña" />
          <small id="errorCoincidir" className="form-text text-danger" style={{visibility:"hidden"}}></small>
        </div>

        <h3 align="right">Informacion Personal</h3>



            <div id="Datos" align="right">
            <label htmlFor="name">Nombre(s)</label><br/>
            <input type="text" className="div" name="nombres" id="infper1" placeholder="Ingrese su nombre" value={nombres} onChange={this.limitaralfabeticos}/><br/>
            <label htmlFor="firstsurname">Apellido Paterno</label><br/>
            <input type="text" className="div" name="apellidos" id="infper2" placeholder="Ingrese su apellido paterno" value={apellidos} onChange={this.limitaralfabeticos}/><br/>
            <label htmlFor="secondsurname">Apellido Materno</label><br/>
            <input type="text" className="div" name="apellidomaterno" id="infper3" placeholder="Ingrese su apellido materno"/><br/>
            <label htmlFor="Carnet">Ci</label><br/>
            <input type="text" className="div" name="documentoDeIdentidad" id="infper4" placeholder="Ingrese su cédula de identidad"  value={documentoDeIdentidad} onChange={this.limitaralfanumericos} /><br/>
            <label htmlFor="Country">Pais</label><br/>
            <input type="text" className="div" name="pais" id="infper5" placeholder="Ingrese su País" value={pais} onChange={this.limitaralfabeticos}/><br/>
            <label htmlFor="City">Ciudad</label><br/>
            <input type="text" className="div" name="ciudad" id="infper6" placeholder="Ingrese su Ciudad" value={ciudad} onChange={this.limitaralfabeticos}/><br/>
            <label htmlFor="Direccion">Direccion</label><br/>
            <input type="text" className="div" name="direccion" id="infper7" placeholder="Ingrese su dirección" value={direccion} onChange={this.limitaralfabeticos}/><br/>
            <label htmlFor="Telefono">Telefono Fijo</label><br/>
            <input type="text" className="div" name="telefono" id="infper8" placeholder="Ingrese su numero de teléfono"/><br/>
            <label htmlFor="Celular">Telefono Movil</label><br/>
            <input type="text" className="div" name="celular" id="infper9" placeholder="Ingrese su numero de celular"/><br/>
            <label htmlFor="Rol">Rol</label><br/>
            <select name="roles" className="form-control" id="combobox" >
            {this.state.roles.map(elemento =>(
                       <option value={elemento.idRol}> {elemento.nombreRol} </option>
                       )
                       )}
            </select>
          </div>
        

            <div align="center">
            <button type="submit" className="btn btn-primary" align="center"
                      //onClick={() => this.registrarse(this.state.form.documentoDeIdentidad)}
                      >REGISTRARSE
            </button>
            </div>
            </div>
            </form>
        



        )
    }
        








}
    export default RegistroUsuario; 


