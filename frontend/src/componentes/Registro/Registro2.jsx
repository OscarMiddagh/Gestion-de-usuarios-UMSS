/*//Campo para la historia Registrar Usuario
import React from 'react'
import './RegistroUsuario.css';
import axios from "axios"; 
import "bootstrap/dist/css/bootstrap.min.css";


const url = "https://gestiondeusuariosumss.herokuapp.com/";

class Registro2 extends React.Component{

    constructor(props){
        super(props)
    this.state = {
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
    contraseña: ''
}
    }
    

      handleChange= (e) =>{        //cuando se escriba en inputs se cambien en el estado form
        this.setState({
        [e.target.name]: e.target.value,
        })
    }

    //handlerSubmit=(e) =>{
      //  e.preventDefault()
        //console.log(this.state)
        //axios.post()
    //}


      registrarse = async (e) => {
        await axios.post(url + "/guardarUsuario/", this.state)
          .then(response=>{
              console.log(response)

          })
          .catch(error=>{
              console.log(error)
          })
      }

    render (){
        const {correo} =this.state
        return(
            <div>

            <form onSubmit={this.registrarse}>
            <div>
            <label htmlFor="name">Correo:</label>
            <input id="name" name="correo" type="text" value={correo} onChange={this.handleChange} />
            </div>

            <div>
            <button type="submit" className="btn btn-primary"
                      //onClick={() => this.registrarse(this.state.form.documentoDeIdentidad)}
                      >REGISTRARSE
                    </button>
            </div>
            </form>
            </div>



        )
    }
        








}
    export default Registro2; 


*/