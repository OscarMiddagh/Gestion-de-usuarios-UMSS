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
import { Route, Link } from "react-router-dom";

const url = "https://gestiondeusuariosumss.herokuapp.com";
// const url = "http://localhost:8080"
class LogIn extends React.Component {
  state = {
    form: {
      "usuario": {
        "correo": "",
        "contraseña": ""
      }
    }
  };
  limitarcorreo = async (e) => {

    if (e.target.value.match("^[Ññíóáéú@.a-zA-Z0-9]*$") != null) {
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

  handleChange = async e => {        //cuando se escriba en inputs se cambien en el estado form
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    });
  }
  manejadorSubmit(e) {
    e.preventDefault();
  }
  logearse = () => {
    axios.post(url + "/logIn", this.state.form)
      .then(response => {
        let comprobante = response.data.rol.nombreRol;
        if (comprobante === "admin") {
          alert("Bienvenido de vuelta admin ");
          window.location.pathname ="/TableroSolicitudes";
        }
        else {
          alert("Bienvenido de vuelta usuario");
          window.location.pathname = "/"+response.data.idUsuario + "/SolicitudCambioRol";
        }
      })
      .catch(console.log);
  }
  aprobar() {
    //colocar lo que hara el boton aprobar
  }

  render() {

    return (
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <br /><br />
            <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_reactjs_icon_130205.png" width="50px" />
          </div>
          <form onSubmit={this.manejadorSubmit}>
            <br />
            <br />
            <br />
            <input type="text" className="fadeIn second" name="correo" placeholder="Correo" onChange={this.limitarcorreo} required />
            <input type="password" className="fadeIn third" name="contraseña" placeholder="Contraseña" onChange={this.limitarpasswd} required />
            <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.logearse} />
          </form>

          <div id="formFooter">
            <a className="underlineHover" href="#">Forgot Password?</a>
          </div>

        </div>
      </div>
    );
  }
}
export default LogIn;