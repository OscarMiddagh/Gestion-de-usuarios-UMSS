class solicitud{
    constructor(usuario,rol,motivo){
        this.usuario=usuario;
        this.rol=rol;
        this.motivo=motivo;
    }
}
class respuesta{
    constructor(usuario,soli,respuesta,comentario){
        this.usuario=usuario;
        this.soli=soli;
        this.respuesta=respuesta;
        this.comentario=comentario;
    }
}
var res='';
function rechazar(){
    res='Rechazado';
}
function aprobar(){
    res='Aprobado';
}
function showMessage(){
    const div=document.createElement('div');
    div.className=`alert`;
    div.appendChild(document.createTextNode("Campo obligatorio"));
    //mostrar en el dom
    const cont=document.querySelector('.secC');	
    const app=document.querySelector('.textA');
    cont.insertBefore(div,app);
    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000);
}
function añadirSolicitud(nombre,rolDestino,motivo){
    sol1=new solicitud(nombre,rolDestino,motivo); 
    innerSolicitud();
}

 

function innerSolicitud(){  
    const datos = document.getElementById('datos');
    const element = document.createElement("div");
    const cont=`<div>
    <h2>solicitud</h2>
    <p>El usuario: ${sol1.usuario}</p>
    <p>Desea cambiar su rol a: ${sol1.rol}</p>
    <p>Por el siguiente motivo: ${sol1.motivo}<p>
    </div>
    `;
    element.innerHTML=cont;
    datos.appendChild(element);

}

document.getElementById("botones-bot").addEventListener('click',function(e){
    if(e.target.name==='enviar'){
        const comen=document.getElementById("com").value;
        if(res==='' || comen.length<20){ 
            if(comen.length>0 && comen.length<20) alert("minimo 20 caracteres");
            else{
                if(comen==='') showMessage();
                alert("Faltan llenar campos");
            }
        }
        else {
            const resp=new respuesta(sol1.usuario,"Solicita cambiar su rol a: "+sol1.rol+", por el siguiente motivo: "+sol1.motivo,res,comen);
            alert(`se ha enviado la respuesta\n
                Usuario: ${sol1.usuario}\n
                Ha sido: ${res}\n
            `);
        }
    }
})
document.getElementById("aprobar").addEventListener('click',function(){
    aprobar();
    alert(res);
})
document.getElementById("rechazar").addEventListener('click',function(){
    rechazar();
    alert(res);
})
