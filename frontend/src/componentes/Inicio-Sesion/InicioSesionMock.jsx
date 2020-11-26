import React from "react";
//import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Inicio-Sesion/InicioSesionMock.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";
import {Router, Route, history, Switch,Redirect,hashChange} from 'react-router-dom'
let hashHistory = Router.hashHistory;

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

    if (e.target.value.match("^[Ññíóáéú@.a-zA-Z0-9]*$") != null) {
      
      if(e.target.value.match("^[Ññíóáéú@.a-zA-Z0-9]*$")[0]===''){

        // alert("No se aceptan espacios ni caracteres especiales");
      }else{
        await this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          }
        });        
      }

      console.log(e.target.value.match("^[Ññíóáéú@.a-zA-Z0-9]*$")[0])
    }
    else {
      alert("No se aceptan espacios ni caracteres especiales");
    }
  }
  limitarpasswd = async (e) => {
    if (e.target.value.match("^[Ñña-zA-Z0-9]*$") != null) {
      await this.setState({
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value,
        }
      });
    }
    else {
      alert("No se aceptan espacios ni caracteres especiales");
    }
  }
  mostrarModalResponder = () => {          //cambia el estado de false a true
    this.setState({ modalResponder: true });
  }

  ocultarModalResponder = () => {
    this.setState({ modalResponder: false });
  }
  componentDidMount() {       //ciclo de vida
    axios.get(url)
      .then(response => {
        console.log(response.data);
        this.setState({ data: response.data });
      })
      .catch(console.log);
  }
  handleKeyPress= async e => {        //cuando se escriba en inputs se cambien en el estado form
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    });
  }
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
  logearse = () => {
    axios.post(url + "/logIn", this.state.form)
      .then(response => {        
        document.getElementById("errorEmail").style.visibility = "hidden";        
        document.getElementById("errorPass").style.visibility = "hidden";
        console.log(document.getElementById("errorPass").style );
        let res = response.data.res;
        if(res ===0){
          let comprobante = response.data.rol.nombreRol;
          if (comprobante === "admin") {
            alert("Bienvenido de vuelta admin ");
            window.location.href ="/TableroSolicitudes";
          }
          else {
            alert("Bienvenido de vuelta usuario");
            // window.location.href = "/"+response.data.idUsuario + "/SolicitudCambioRol";
            
            hashHistory.push("/"+response.data.idUsuario + "/SolicitudCambioRol");  
            
          }
        }else{
          console.log(res);
          if(res===2){
            document.getElementById("errorEmail").innerHTML = "El correo no existe";
            document.getElementById("errorEmail").style.visibility = "visible";
          }else if(res===1){
            document.getElementById("errorPass").innerHTML = "Contraseña invalida";
            document.getElementById("errorPass").style.visibility = "visible";
          }
        }
      })
      .catch(console.log);
  }
  aprobar() {
    //colocar lo que hara el boton aprobar
  }
  render() {

    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <br /><br />
            <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_reactjs_icon_130205.png" width="50px" />
          </div>
          
          <form onSubmit={this.manejadorSubmit}>
            <br />
            <br />
            <div className="container">
              <div className="alert alert-danger" role="alert" hidden={true}>
            </div>
            </div>
            <br />

            <input type="email" className="fadeIn second" name="correo" aria-describedby="emailHelp"  placeholder="Correo"  onChange={this.limitarcorreo} required />
            <small id="errorEmail" class="form-text text-danger" style={{visibility:"hidden"}}></small>
            <input type="password" className="fadeIn third" name="contraseña" placeholder="Contraseña" onChange={this.limitarpasswd}  required />
            <small id="errorPass" class="form-text text-danger" style={{visibility:"hidden"}}></small>
            <input type="submit" className="fadeIn fourth" value="Iniciar Sesion" onClick={this.logearse} />
            <input type="button" className="fadeIn fourth" value=" Registrarse " />
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