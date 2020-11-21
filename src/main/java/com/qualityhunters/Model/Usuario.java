package com.qualityhunters.Model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
@Entity
public class Usuario {

  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Long id;
  private String nombres;
  private String apellidos;
  private String correo;
  private String documentoDeIdentidad;
  private String direccion;
  private String ciudad;
  private String pais;
  @ManyToOne(optional = false, fetch = FetchType.EAGER)
  private Rol rol;
  private String contraseña;


  public Usuario() {}
  
  public Usuario(Long id){
    this.id =id;
  }
  public Usuario(String nombres, String apellidos, String correo, String documentoDeIdentidad,
                 String direccion, String ciudad, String pais, String contraseña) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.correo = correo;
    this.documentoDeIdentidad = documentoDeIdentidad;
    this.direccion = direccion;
    this.ciudad = ciudad;
    this.pais =pais;
    this.contraseña = contraseña;
  }
  
  public Long getId() {
    return id;
  }
  public String getCorreo() {
    return correo;
  }
  public String getContraseña() {
    return contraseña;
  }
  public String getDireccion(){
      return direccion;
  }
  public String getNombres(){
      return nombres;
  }
  public String getApellidos(){
      return apellidos;
  }
  public String getDocumentoDeIdentidad(){
      return documentoDeIdentidad;
  }
  public String getCiudad(){
      return ciudad;
  }
  public String getPais(){
      return pais;
  }
  public Rol getRol(){
      return rol;
  }
  public void setCorreo(String correo) {
    this.correo = correo;
  }
  public void setContraseña(String contraseña) {
    this.contraseña = contraseña;
  }
  public void setDireccion(String direccion){
      this.direccion = direccion;
  }
  public void setNombres(String nombres){
      this.nombres = nombres;
  }
  public void setApellidos(String apellidos){
      this.apellidos = apellidos;
  }
  public void setDocumentoDeIdentidad(String documentoDeIdentidad){
      this.documentoDeIdentidad = documentoDeIdentidad;
  }
  public void setCiudad(String ciudad){
      this.ciudad = ciudad;
  }
  public void setPais(String pais){
      this.pais = pais;
  }
  public void setRol(Rol rol){
      this.rol = rol;
  }
}