package com.qualityhunters.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.qualityhunters.Model.Solicitud;
import com.qualityhunters.Repository.SolicitudRepository;

@Service
public class SolicitudServiceAPI {
    private SolicitudRepository solicitudRepository;
    private Logger logger = LoggerFactory.getLogger(SolicitudServiceAPI.class);
    
    public SolicitudServiceAPI(SolicitudRepository solicitudRepository){
        this.solicitudRepository = solicitudRepository;
    }
    public List<Solicitud> findAll(){
        logger.debug("Request to get Solicitud");
        return solicitudRepository.findAll();
    }
    public Optional<Solicitud> findById(Long id){
        logger.debug("Request to get Solicitud by id : {}",id);
        Optional<Solicitud> solicitud = solicitudRepository.findById(id);
        return solicitud;
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
}