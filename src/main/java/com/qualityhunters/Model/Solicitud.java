package com.qualityhunters.Model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Solicitud { 
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private String motivo;
    @ManyToOne(optional = false, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Usuario usuario;

    @OneToOne(cascade = CascadeType.ALL)
    private Rol rolDestino;
    @OneToOne(cascade = CascadeType.ALL)
    private Rol rolOrigen;
    private String estado;
    private String fecha;
    public Solicitud(){

    }


    public Solicitud( Usuario usuario, String motivo,Rol rolD){
        this.usuario = usuario;
        this.motivo = motivo;
        this.rolDestino = rolD;
    }
    public void setUsuario(Usuario usuario){
        this.usuario = usuario;
    }
    public void setRolDestino(Rol rolD){
        rolDestino = rolD;
    }
    public void setRolOrigen(Rol rolO){
        rolOrigen = rolO;
    }
    public void setMotivo(String motivo){
        this.motivo = motivo;
    }
    public void setEstado(String estado){
        this.estado=estado;
    }
    public void setFecha(String fecha){
        this.fecha=fecha;
    }
    public Usuario getUsuario(){
        return usuario;
    }
    public String getMotivo(){
        return motivo;
    }
    public Rol getRolDestino(){
        return rolDestino;
    }
    public Rol getRolOrigen(){
        return rolOrigen;
    }
    public Long getId(){
        return id;
    }
    public String getFecha(){
        return fecha;
    }
    public String getEstado(){
        return estado;
    }

}
