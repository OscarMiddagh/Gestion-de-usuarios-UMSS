package com.qualityhunters.Model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Notificacion {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String respuesta;
    private String mensaje;
    @Temporal(TemporalType.DATE)
    private Date fecha;
    @ManyToOne(optional = false,  fetch = FetchType.EAGER)
    private Usuario user;

    public Notificacion(){}
    public Notificacion(String respuesta, String mensaje,Date fecha,Usuario user){
        this.respuesta = respuesta;
        this.mensaje = mensaje;
        this.fecha = fecha;
        this.user = user;
    }

    public String getMensaje(){
        return mensaje;
    }
    public String getRespuesta(){
        return respuesta;
    }
    public Date getFecha(){
        return fecha;
    }
    public void setMensaje(String mensaje){
        this.mensaje = mensaje;
    }
    public void setRespuesta(String respueta){
        this.respuesta = respueta;
    }
    public void setFecha(Date fecha){
        this.fecha = fecha;
    }
    public Usuario getUsuario(){
        return user;
    }
    public void setUsuario(Usuario usuario){
        user = usuario;
    }

}
