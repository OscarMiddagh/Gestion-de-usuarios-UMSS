package com.qualityhunters.Model;

import javax.persistence.*;

@Entity
public class Sistema {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private String nombreSistema;
    public String getNombreSistema(){
        return nombreSistema;
    }
    public void setNombreSistema(String nombreSistema){
        this.nombreSistema = nombreSistema;
    }
    public Long getId() {
        return id;
      }
}
