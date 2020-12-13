
import React from "react";

import axios from "axios"; 
import BarraNav from "../NavBar-Usuario/NavBarUsuario";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Container,
} from "reactstrap";


const url = "https://gestiondeusuariosumss.herokuapp.com"

class NotificacionRespuestas extends React.Component{ 
  state= {
    data :[],
    form: {
      respuesta:"",
      mensaje:"",
      fecha:"",
    } 
  };

  componentDidMount(){       //ciclo de vida
    axios.get(url+"/notificaciones")
    .then(response=>{
      console.log(response.data);
      this.setState({data:response.data});
    })
    .catch(console.log);
  }
  render (){
    
    return (
      
    <Container>
       <BarraNav/>
          <div className="container">
          <h3 align="center" id="titulo">NOTIFICACIONES</h3>           
          <div className="justify-content-center align-items-center">
          <Table>
              <table className="table">
              <tbody className="table-dark">
               {this.state.data.map((dato) => (   //por cada dato que se muestre lo siguiente, se debe colocar el nombre de la base de datos 
              <tr>                 
              <td>{dato.respuesta}</td>
              <td>{dato.mensaje}</td>
              <td>{dato.fecha}</td>
              </tr>
               ))}
               </tbody>
              </table>
          </Table>
           </div>
          </div>
          </Container>

    );
  }
}  

export default NotificacionRespuestas