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

const url = "https://gestiondeusuariosumss.herokuapp.com";
class LogIn extends React.Component {
    state = {
      form: {
        "correo": "",
        "contraseña":""
      }
    };
      mostrarModalResponder=()=>{          //cambia el estado de false a true
      this.setState({modalResponder: true});
    }
  
    ocultarModalResponder=()=>{
      this.setState({modalResponder: false});
    }
    componentDidMount(){       //ciclo de vida
      axios.get(url)
      .then(response=>{
        console.log(response.data);
        this.setState({data:response.data});
      })
      .catch(console.log);
    }
  
    handleChange = async e =>{        //cuando se escriba en inputs se cambien en el estado form
        await this.setState({
          form:{
            ...this.state.form,
          [e.target.name]: e.target.value,
          }
         });
    }
    manejadorSubmit(e){
      e.preventDefault();
    }
    logearse = () =>{
      axios.post(url+"/logIn",this.state.form)
        .then(response=>{
          console.log(response);
        })
      .catch(console.log);
    }
    aprobar(){
        //colocar lo que hara el boton aprobar
    }
  
    render() {
      
      return (
            <React.Fragment>
                <div class="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first">
                          <br/><br/>
                        <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_reactjs_icon_130205.png" width="50px" />
                        </div>
                        <form onSubmit={this.manejadorSubmit}>
                          <br/>
                          <br/>
                          <br/>
                        <input type="text" className="fadeIn second" name="correo" placeholder="Correo" onChange={this.handleChange} required/>
                        <input type="password" className="fadeIn third" name="contraseña" placeholder="Contraseña" onChange={this.handleChange} required/>
                        <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.logearse}/>
                        </form>

                        <div id="formFooter">
                        <a className="underlineHover" href="#">Forgot Password?</a>
                        </div>

                    </div>
                    </div>
            </React.Fragment>
      );
    }
  }
  export default LogIn;