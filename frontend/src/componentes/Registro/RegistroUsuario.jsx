//Campo para la historia Registrar Usuario
import React from 'react'

import axios from "axios"; 
import './RegistroUsuario.css';
 
import "bootstrap/dist/css/bootstrap.min.css";


const url = "https://gestiondeusuariosumss.herokuapp.com/";


class RegistroUsuario extends React.Component{


   
    state = {
            roles:[],
    
    nombres: '',
    apellidos: '',
    apellidosM:'',
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
    telefonoFijo: '',
    telefonoMovil:''
    
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
        if (e.target.value.match("^[ Ñña-zA-Z ]*$") != null) {
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
       alertaRegistrar(){
        alert("¡Usuario registrad@!");
      }
      



      
       
    render (){
      
        const {correo, contraseña, nombres, apellidos,apellidosM, direccion, documentoDeIdentidad,pais,ciudad, telefonoFijo,telefonoMovil} =this.state
        return(
          

          <form onSubmit={(this.registrarse,this.validarpassword)} id="form"  >
            <div> <br></br>
            <h3 align="center" id="titulo">CREAR UNA CUENTA</h3> <br></br> <hr></hr>
            
       
           <div  id="form">
           <br></br>
           <h5 align="center"><b>INFORMACION DE LOGIN</b></h5><hr></hr><br></br>
           
          <h6 > <b>Correo Electronico :</b></h6><br/>
          <input type="text" className="div" name="correo" id="inflog1" aria-describedby="emailHelp" placeholder="Ingrese su correo" value={correo} onChange={this.limitarcorreo}   required maxLength="100" /> <br/>
          
          <h6 htmlFor="Contraseña" ><b>Contraseña :</b></h6> <br/>
          <input type="text" className="div" name="contraseña" id="inflog2" placeholder="Contraseña" value={contraseña} onChange={this.limitarpasswd} required minLength="8"  required maxLength="100" /><br/>
          
          <h6 htmlFor="Contraseña" ><b>Confirmar Contraseña :</b></h6><br/>
          
          <input type="text"  className="div" name="confirmarContraseña" id="inflog3"  onChange={this.mensajevalidacion} placeholder="Repetir Contraseña" />
          <br></br>
          <small id="errorCoincidir" className="form-text text-danger" style={{visibility:"hidden"}}></small>
          
        </div> <br></br>

        



            <div  id="form">
            <br></br>
            <h5 align="center"><b>INFORMACION PERSONAL</b></h5><hr></hr>
            <br></br>
            <label htmlFor="name"><b>Nombre(s) :</b></label>
            <input type="text" className="div" name="nombres" id="infper1" placeholder="Ingrese su nombre" value={nombres} onChange={this.limitaralfabeticos} required required maxLength="100" /><br/>
            <br></br>
            <label htmlFor="firstsurname"><b>Apellido Paterno :</b></label><br/>
            <input type="text" className="div" name="apellidos" id="infper2" placeholder="Ingrese su apellido paterno" value={apellidos} onChange={this.limitaralfabeticos} required required maxLength="100"/><br/>
            <br></br>
            <label htmlFor="secondurname"><b>Apellido Materno :</b></label><br/>
            <input type="text" className="div" name="apellidosM" id="infper3" placeholder="Ingrese su apellido materno" value={apellidosM} onChange={this.limitaralfabeticos} required required maxLength="100" /><br/>
            <br></br>
            <label htmlFor="Carnet"><b>Ci :</b></label><br/>
            <input type="text" className="div" name="documentoDeIdentidad" id="infper4" placeholder="Ingrese su cédula de identidad"  value={documentoDeIdentidad} onChange={this.limitaralfanumericos} required required maxLength="20" /><br/>
            <br></br>
            <label htmlFor="Country"><b>Pais :</b></label><br/>
            <input type="text" className="div" name="pais" id="infper5" placeholder="Ingrese su País" value={pais} onChange={this.limitaralfabeticos} required required maxLength="100"/><br/>
            <br></br>
            <label htmlFor="City"><b>Ciudad :</b></label><br/>
            <input type="text" className="div" name="ciudad" id="infper6" placeholder="Ingrese su Ciudad" value={ciudad} onChange={this.limitaralfabeticos} required required maxLength="100"/><br/>
            <label htmlFor="Direccion"><b>Direccion :</b></label><br/>
            <input type="text" className="div" name="direccion" id="infper7" placeholder="Ingrese su dirección" value={direccion} onChange={this.limitaralfabeticos}required required maxLength="100"/><br/>
            <br></br>
            <label htmlFor="tele"><b>Telefono Fijo : </b></label><br/>
            <input type="text" className="div" name="telefonoFijo" id="infper8" placeholder="Ingrese su numero de teléfono" value={telefonoFijo} onChange={this.limitaralfanumericos} required required maxLength="20"/><br/>
            <br></br>
            <label htmlFor="celular"><b>Telefono Movil :</b></label><br/>
            <input type="text" className="div" name="telefonoMovil" id="infper9" placeholder="Ingrese su numero de celular" value={telefonoMovil} onChange={this.limitaralfanumericos}required required maxLength="20"/><br/>
            <br></br>
            <label htmlFor="Rol"><b>Rol de Usuario:</b> </label><br/>
            <select name="roles" className="form-control" id="combobox" >
            {this.state.roles.map(elemento =>(
                       <option value={elemento.idRol}> {elemento.nombreRol} </option>
                       )
                       )}
            </select>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
          <br></br>
          <input type="button" className="fadeIn fourth" onClick={(this.registrarse,this.validarpassword,this.alertaRegistrar)} value="REGISTRARSE"/>
        

            
            </div><br/>
            </form> 
       



        )
    }
        








}
    export default RegistroUsuario; 


