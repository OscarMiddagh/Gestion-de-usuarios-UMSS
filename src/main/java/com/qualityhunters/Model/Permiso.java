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
    private String nombrePermiso;
    private String descripcion;
    protected Permiso(){}
    public Permiso(Long id){
        this.id=id;
    }
    public Permiso(String nombrePermiso){
        this.nombrePermiso = nombrePermiso;
    }
    public Long getId() {
        return id;
    }
    public String getNombrePermiso(){
        return nombrePermiso;
    }
    public String getDescripcion(){
        return descripcion;
    }
    public void setNombrePermiso(String nombre){
        nombrePermiso = nombre;
    }
    public void setDescripcion(String descrip){
        descripcion = descrip;
    }
}
