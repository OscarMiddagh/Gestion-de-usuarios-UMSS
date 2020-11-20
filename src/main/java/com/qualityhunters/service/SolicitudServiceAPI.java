package com.qualityhunters.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import com.qualityhunters.Model.Rol;
import com.qualityhunters.Model.Solicitud;
import com.qualityhunters.Repository.SolicitudRepository;

@Service
public class SolicitudServiceAPI {
    private SolicitudRepository solicitudRepository;
    private Logger logger = LoggerFactory.getLogger(SolicitudServiceAPI.class);
    
    public SolicitudServiceAPI(SolicitudRepository solicitudRepository){
        this.solicitudRepository = solicitudRepository;
    }

    public List<Map<String,Object>> findAll(){
        logger.debug("Request to get Solicitud");
        List<Solicitud> solicitudes = solicitudRepository.findAll();
        List<Map<String,Object>> res = new ArrayList<>();
        Map<String,Object> r;
        for (Solicitud solicitud : solicitudes) {
            r = new HashMap<>();
            r.put("idSolicitud",solicitud.getId());
            r.put("nombreUsuario", solicitud.getUsuario().getNombres()+solicitud.getUsuario().getApellidos());
            r.put("fecha", solicitud.getFecha());
            res.add(r);
        }
        return res;
    }
    public Model findById(Long id, Model res){
        logger.debug("Request to get Solicitud by id : {}",id);
        Optional<Solicitud> solicitud = solicitudRepository.findById(id);
        String nombreSolicitante=solicitud.get().getUsuario().getNombres()+solicitud.get().getUsuario().getApellidos();
        res.addAttribute("idSolicitud", id);
        res.addAttribute("idUsuario", solicitud.get().getUsuario().getId());
        res.addAttribute("nombreUsuario", nombreSolicitante);
        res.addAttribute("idRolOrigen", solicitud.get().getRolOrigen().getId());
        res.addAttribute("rolOrigen", solicitud.get().getRolOrigen().getNombreRol());
        res.addAttribute("idRolDestino", solicitud.get().getRolDestino().getId());
        res.addAttribute("rolDestino", solicitud.get().getRolDestino().getNombreRol());
        res.addAttribute("fecha", solicitud.get().getFecha());
        res.addAttribute("fecha", solicitud.get().getMotivo());
        return res;
    }
    public Solicitud save(Solicitud solicitud){
        return solicitudRepository.save(solicitud);
    }
    public Solicitud update(Solicitud solicitud){
        return solicitudRepository.save(solicitud);
    }
    public void delete(Solicitud solicitud){
        solicitudRepository.delete(solicitud);
    }

	public List<Solicitud> hayEnviado(long idUsuario) {
		return solicitudRepository.hayEnviado(idUsuario);
	}
}