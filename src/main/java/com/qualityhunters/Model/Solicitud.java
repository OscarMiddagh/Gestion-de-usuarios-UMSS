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
    @GeneratedValue(strategy=GenerationType.AUTO)
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

    public Solicitud(Sistema sistema, Usuario usuario, String motivo,Rol rol,Rol rolo){
        this.sistema = sistema;
        this.usuario = usuario;
        this.motivo = motivo;
        this.rolDestino = rol;
        this.rolOrigen = rolo;
    }
    public void setSistema(Sistema sistema){
        this.sistema = sistema;
    }
    public void setUsuario(Usuario usuario){
        this.usuario = usuario;
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
