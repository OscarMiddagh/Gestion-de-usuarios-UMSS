package com.qualityhunters.Model;

import javax.persistence.*;
@Entity
public class Rol {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private String nombreRol;
    public Rol(){}
    public Rol(String nombreRol){
        this.nombreRol = nombreRol;
    }
    public Long getId() {
        return id;
    }
    public String getNombreRol(){
        return nombreRol;
    }
    public void setNombreRol(String nombre){
        nombreRol = nombre;
    }
    
}
