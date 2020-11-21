package com.qualityhunters.service;

import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.springframework.stereotype.Service;
import com.qualityhunters.Repository.UsuarioRepository;
import com.qualityhunters.Model.Usuario;
import com.qualityhunters.Model.Rol;

@Service
public class UsuarioServiceAPI {
    private UsuarioRepository usuarioRepository;
    private Logger logger = LoggerFactory.getLogger(UsuarioServiceAPI.class);
    
    public UsuarioServiceAPI(UsuarioRepository usuarioRepository){
        this.usuarioRepository = usuarioRepository;
    }
    public List<Usuario> findAll(){
        logger.debug("Request to get Usuario");
        return usuarioRepository.findAll();
    }
    public Optional<Usuario> findById(Long id){
        logger.debug("Request to get Usuario by id : {}",id);
        Optional<Usuario> usuario = usuarioRepository.findById(id);
        return usuario;
    }
    // public Optional<Usuario> findByCorreo(String correo){

    // }
    public Usuario save(Usuario usuario){
        return usuarioRepository.save(usuario);
    }
    public Usuario update(Usuario usuario){
        return usuarioRepository.save(usuario);
    }
    public void delete(Usuario usuario){
        usuarioRepository.delete(usuario);
    }
    public Boolean confirmarDatos(String mail){
        return usuarioRepository.existeUsuario(mail).size()>0;
    }
    /*public void cambiarRol(Rol rol,long id){
        usuarioRepository.cambiarRol(rol, id);
    }*/
}
