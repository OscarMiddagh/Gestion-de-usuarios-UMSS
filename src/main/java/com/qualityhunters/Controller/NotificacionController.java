package com.qualityhunters.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.qualityhunters.Model.Notificacion;
import com.qualityhunters.Repository.NotificacionRepository;
import com.qualityhunters.service.NotificacionServiceAPI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class NotificacionController {
    @Autowired
    private NotificacionServiceAPI notificacionServiceAPI;
    @Autowired
    private NotificacionRepository notrep;
    @GetMapping("/{idUsuario}/notificaciones")
    public List<Notificacion>getNotificaciones(@PathVariable Long idUsuario){        
        return notrep.notificaciones(idUsuario);
    }
    @PostMapping("/enviar_notificacion")
    public ResponseEntity<Notificacion> enviarNotificacion(@RequestBody Notificacion notificacion){
        notificacionServiceAPI.save(notificacion);
        return ResponseEntity.ok(notificacionServiceAPI.save(notificacion));
    }
}
