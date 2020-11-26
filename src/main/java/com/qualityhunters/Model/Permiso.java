package com.qualityhunters.Model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Permiso {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id; 
    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    private Rol rol;
    private String nombrePermiso;
    private String ruta;
    protected Permiso(){}
    public Permiso(Rol rol, String nombrePermiso,String ruta){
        this.rol = rol;
        this.nombrePermiso = nombrePermiso;
        this.ruta = ruta;
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
    public String getRuta(){
        return ruta;
    }
    public void setNombrePermiso(String nombre){
        nombrePermiso = nombre;
    }
    public void setRol(Rol rol){
        this.rol = rol;
    }
    public void setRuta(String ruta){
        this.ruta = ruta;
    }

}
