import React from "react";
//import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Inicio-Sesion/InicioSesionMock.css";
//import {Router} from 'react-router-dom';
//import SolicitudCambioRol from "../Solicitud-Cambio-Rol/Solicitud-Cambio-Rol";
//let hashHistory = Router.hashHistory;

const url = "https://gestiondeusuariosumss.herokuapp.com";
// const url = "http://localhost:8080"
class LogIn extends React.Component {
  // const [datos, setDatos] = useState({
  //   correo: '',
  //   contraseña: ''
  // })
  state = {
    form: {
        "correo": "",
        "contraseña": ""
      }
  };
  limitarcorreo = async (e) => {
    document.getElementById("errorEmail").style.visibility = "hidden";
    if (e.target.value.match("^[Ññíóáéú@.a-zA-Z0-9]*$") != null) {
      await this.setState({
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value,
        }
      });    
    }
    else {
      document.getElementById("errorEmail").innerHTML = "No se aceptan espacios ni caracteres especiales";
      document.getElementById("errorEmail").style.visibility = "visible";
    }
  }
  limitarpasswd = async (e) => {
    document.getElementById("errorPass").style.visibility = "hidden";
    if (e.target.value.match("^[Ñña-zA-Z0-9]*$") != null) {
      await this.setState({
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value,
        }
      });
    }
    else {    
      document.getElementById("errorPass").innerHTML = "No se aceptan espacios ni caracteres especiales";
      document.getElementById("errorPass").style.visibility = "visible";
    }
  }
  // mostrarModalResponder = () => {          //cambia el estado de false a true
  //   this.setState({ modalResponder: true });
  // }

  // ocultarModalResponder = () => {
  //   this.setState({ modalResponder: false });
  // }
  // componentDidMount() {       //ciclo de vida
  //   axios.get(url)
  //     .then(response => {
  //       console.log(response.data);
  //       this.setState({ data: response.data });
  //     })
  //     .catch(console.log);
  // }
  // handleKeyPress= async e => {        //cuando se escriba en inputs se cambien en el estado form
  //   await this.setState({
  //     form: {
  //       ...this.state.form,
  //       [e.target.name]: e.target.value,
  //     }
  //   });
  // }
  // handleChange = async e => {        //cuando se escriba en inputs se cambien en el estado form
  //   await this.setState({
  //     form: {
  //       ...this.state.form,
  //       [e.target.name]: e.target.value,
  //     }
  //   });
  // }
  manejadorSubmit(e) {
    e.preventDefault();
  }
  logearse = async() => {
    await axios.post(url + "/logIn", this.state.form)
      .then(response => {        
        document.getElementById("errorEmail").style.visibility = "hidden";        
        document.getElementById("errorPass").style.visibility = "hidden";
        let res = response.data.res;
        if(res ===0){
          let comprobante = response.data.rol.nombreRol;
          if (comprobante === "admin") {
            alert("Bienvenido de vuelta admin ");
            window.location.href ="/TableroSolicitudes";
          }
          else {
            alert("Bienvenido de vuelta usuario");
            window.location.href = "/"+response.data.idUsuario + "/SolicitudCambioRol";
            
            // hashHistory.push("/"+response.data.idUsuario + "/SolicitudCambioRol");  
            
          }
        }else{
          if(res===2){
            document.getElementById("errorEmail").innerHTML = "El correo no existe";
            document.getElementById("errorEmail").style.visibility = "visible";
          }else if(res===1){
            document.getElementById("errorPass").innerHTML = "Contraseña invalida";
            document.getElementById("errorPass").style.visibility = "visible";
          }
        }
      })
  }
  aprobar() {
    //colocar lo que hara el boton aprobar
  }
  redireccionarResgistrarse=()=>{    
    window.location.href ="/RegistroUsuario";
  }
  render() {

    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <br /><br />
          </div>
          
          <form onSubmit={this.manejadorSubmit}>
          <h3 align="center" id="titulo">BIENVENIDO</h3>
            <br />
            <br />
            <br />
            <input type="email" className="fadeIn second"   placeholder="Correo" name="correo" onChange={this.limitarcorreo} value={this.state.form.correo} required />
            <small id="errorEmail" className="form-text text-danger" style={{visibility:"hidden"}}></small>
            <input type="password" className="fadeIn third" placeholder="Contraseña" name="contraseña"  onChange={this.limitarpasswd} value={this.state.form.contraseña }  required />
            <small id="errorPass" className="form-text text-danger" style={{visibility:"hidden"}}></small>
            <label htmlFor="" className="fadeIn fourth"><input type="checkbox"/> Recordar mi contraseña</label>
            <input type="submit" className="fadeIn fourth" value="Iniciar Sesion" onClick={this.logearse} />
            <input type="button" onClick={this.redireccionarResgistrarse} className="fadeIn fourth" value=" Registrarse " />
          </form>
          {/* <div id="formFooter">
            <a className="underlineHover" href="#">Forgot Password?</a>
          </div> */}

        </div>
      </div>
    );
  }
}
export default LogIn;