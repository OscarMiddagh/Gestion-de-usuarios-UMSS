package com.qualityhunters.Controller;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.qualityhunters.Model.Solicitud;
import com.qualityhunters.Model.Usuario;
import com.qualityhunters.Model.Rol;

import com.qualityhunters.service.RolServiceAPI;
import com.qualityhunters.service.SolicitudServiceAPI;
import com.qualityhunters.service.UsuarioServiceAPI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class SolicitudController {
    
    @Autowired
    private SolicitudServiceAPI solicitudAPI;
    @Autowired
    private UsuarioServiceAPI usuarioAPI;
    @Autowired 
    private RolServiceAPI rolAPI;
    
    @GetMapping("/solicitud/{idSolicitud}")
    public ResponseEntity<Model> getSolicitud(@PathVariable long idSolicitud,Model model){
        Model  sol= solicitudAPI.findById(idSolicitud,model);
        return ResponseEntity.ok(sol);
    }
    @GetMapping("/solicitudes")
    public List<Map<String,Object>> getSolicitudes(Model model){        
        return solicitudAPI.findAll();
    }
        
    @GetMapping("/{idUsuario}/sol_cambio_rol")
    public ResponseEntity<Model> solicitudCambioRol(@PathVariable long idUsuario,Model model){
        Optional<Usuario> user = usuarioAPI.findById(idUsuario);
        model.addAttribute("roles", rolAPI.findAllExcept(user.get().getRol().getId()));
        //model.addAttribute("solicitud", new Solicitud());
        return ResponseEntity.ok(model);
    }
    @GetMapping("/enviado/{idUsuario}")
    public ResponseEntity<Model> getEnviado(@PathVariable long idUsuario,Model model){
        model.addAttribute("respuesta",solicitudAPI.hayEnviado(idUsuario));
        return ResponseEntity.ok(model);
    }
    // @GetMapping("/{subsistema}/generar_respuesta/{idSolicitud}")
    // public Model generar(@PathVariable long subsistema,@PathVariable long idSolicitud,Model model){ 
    //     Optional<Solicitud>  sol= solicitudRepo.findById(idSolicitud);
    //     Sistema subsis = new Sistema();
    //     subsis.setId(subsistema);
    //     // List<Rol> roles = rolRepo.rolesPorSubsistema(subsis);
    //     // model.addAttribute("solicitud", new Solicitud());
    //     // Usuario user = usuarioRepo.findById(sol.get().getUsuario().getId()).get();
    //     // String nombreSolicitante = user.getNombres()+" " + user.getApellidos();
    //     // Rol rolD = sol.get().getRolDestino();
    //     // model.addAttribute("roles",roles);
    //     // model.addAttribute("nombreSolicitante", nombreSolicitante);
    //     // model.addAttribute("rolDestino", rolD.getNombreRol());
    //     // model.addAttribute("motivo", sol.get().getMotivo());
    //     return model; 
    // }
    @PostMapping("/{idUsuario}/sol_cambio_rol")
    public ResponseEntity<Solicitud> solicitudCambioRolSubmit(@RequestBody Solicitud solicitud,@PathVariable long idUsuario){
        Optional<Usuario> user = usuarioAPI.findById(idUsuario);
        // Optional<Rol> rol = rolAPI.findById(Long.parsemodel.getAttribute("a"));
        // Solicitud solicitud =  new Solicitud();
        // Sistema sis = user.get().getSistema();
        // Aumentar el estado y la fecha
        // Solicitud solicitud = new Solicitud();
        solicitud.setEstado("S/R");
        solicitud.setFecha(new Date());
        solicitud.setUsuario(user.get());
        solicitud.setRolOrigen(user.get().getRol());

        return ResponseEntity.ok(solicitudAPI.save(solicitud)); 
    }
    // @PostMapping("/sol_cambio_rol")
    // public ResponseEntity<Solicitud> solicitudCambioRolSubmit(@RequestBody Solicitud solicitud){
    //     Optional<Usuario> user = usuarioAPI.findById(solicitud.getUsuario().getId());
    //     // Optional<Rol> rol = rolAPI.findById(Long.parsemodel.getAttribute("a"));
    //     // Solicitud solicitud =  new Solicitud();
    //     // Sistema sis = user.get().getSistema();
    //     // Aumentar el estado y la fecha
    //     // Solicitud solicitud = new Solicitud();
    //     solicitud.setEstado("S/R");
    //     solicitud.setFecha(new Date());
    //     solicitud.setRolOrigen(user.get().getRol());
    //     solicitud.setUsuario(user.get());

    //     return ResponseEntity.ok(solicitudAPI.save(solicitud)); 
    // }
    @PostMapping("/changeRol/{idUsuario}")
    public ResponseEntity<Usuario> changeRol(@RequestBody Rol rol,@PathVariable long idUsuario){
        //usuarioAPI.cambiarRol(rol,idUsuario);
        Optional<Usuario> user = usuarioAPI.findById(idUsuario);
        Usuario aux = user.get();
        aux.setRol(rol);
        usuarioAPI.update(aux);
        solicitudAPI.borrarSolicitud(idUsuario);
        return ResponseEntity.ok(usuarioAPI.findById(idUsuario).get());
    }
}
