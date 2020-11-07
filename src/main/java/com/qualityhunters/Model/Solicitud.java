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
    @ManyToOne(optional = false, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Sistema sistema;
    @OneToOne(cascade = CascadeType.ALL)
    private Rol rolDestino;
    @OneToOne(cascade = CascadeType.ALL)
    private Rol rolOrigen;

    public Solicitud(){

    }

    public Solicitud(Sistema sistema, Usuario usuario, String motivo,Rol rolO,Rol rolD){
        this.sistema = sistema;
        this.usuario = usuario;
        this.motivo = motivo;
        this.rolDestino = rolD;
        this.rolOrigen = rolO;
    }
    public void setSistema(Sistema sistema){
        this.sistema = sistema;
    }
    public void setUsuario(Usuario usuario){
        this.usuario = usuario;
    }
    public void setRolOrigen(Rol rolO){
        rolOrigen = rolO;
    }
    public void setRolDestino(Rol rolD){
        rolDestino = rolD;
    }
    public void setMotivo(String motivo){
        this.motivo = motivo;
    }
    public Sistema getSistema(){
        return sistema;
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

}
