package com.qualityhunters.Model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class detallePermisoRol {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long idDetalle;
    @ManyToOne(optional = false,  fetch = FetchType.EAGER)
    private Rol rol;
    @ManyToOne(optional = false,  fetch = FetchType.EAGER)
    private Permiso permiso;
    
    protected detallePermisoRol(){}
    
    public void setRol(Rol rol){
        this.rol=rol;
    }
    public void setPermiso(Permiso permiso){
        this.permiso=permiso;
    }
    public Long getId(){
        return idDetalle;
    }
    public Rol getRol(){
        return rol;
    }
    public Permiso getPermiso(){
        return permiso;
    }
}
