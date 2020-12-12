package com.qualityhunters.service;

import java.util.List;

import com.qualityhunters.Model.Notificacion;
import com.qualityhunters.Model.Usuario;
import com.qualityhunters.Repository.NotificacionRepository;

import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;
@Service
public class NotificacionServiceAPI {
    private NotificacionRepository notificacionRepository;
    private UsuarioServiceAPI usuarioServiceAPI;
    public NotificacionServiceAPI(NotificacionRepository notificacionRepository){
        this.notificacionRepository = notificacionRepository;
    }
    public List<Notificacion> findAllByIdUsuario(Long id){
        Usuario usuario = usuarioServiceAPI.findById(id).get();
        Notificacion notificacion = new Notificacion();
        notificacion.setUsuario(usuario);
        Example<Notificacion> notificacionExample = Example.of(notificacion);
        return notificacionRepository.findAll(notificacionExample);
    }
    public List<Notificacion> findAll(){
        return notificacionRepository.findAll();
    }
    public Notificacion save(Notificacion notificacion){
        return notificacionRepository.save(notificacion);
    }
}
