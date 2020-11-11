package com.qualityhunters.Model;

import javax.persistence.*;
@Entity
public class Rol {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(optional = false, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Sistema sistema;
    private String nombreRol;
    public Rol(){}
    public Rol(Sistema sistema, String nombreRol){
        this.sistema = sistema;
        this.nombreRol = nombreRol;
    }
    public void setNombreRol(String nombre){
        nombreRol = nombre;
    }
    public void setSistema(Sistema sistema){
        this.sistema = sistema;
    }
    public Long getId() {
        return id;
    }
    public String getNombreRol(){
        return nombreRol;
    }
    public Sistema getSistema(){
        return sistema;
    }
}
