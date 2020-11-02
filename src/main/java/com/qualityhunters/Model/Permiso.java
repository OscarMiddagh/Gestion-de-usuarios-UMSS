package com.qualityhunters.Model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Permiso {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id; 
    @ManyToOne(optional = false, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Rol rol;
    private String nombrePermiso;
    protected Permiso(){}
    public Permiso(Rol rol, String nombrePermiso){
        this.rol = rol;
        this.nombrePermiso = nombrePermiso;
    }
    public Long getId() {
        return id;
    }
    public String getNombrePermiso(){
        return nombrePermiso;
    }
    public Rol getRol(){
        return rol;
    }
    public void setNombrePermiso(String nombre){
        nombrePermiso = nombre;
    }
    public void setRol(Rol rol){
        this.rol = rol;
    }

}
