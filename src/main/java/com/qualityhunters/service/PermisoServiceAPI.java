package com.qualityhunters.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.qualityhunters.Model.Permiso;
import com.qualityhunters.Repository.PermisoRepository;

@Service
public class PermisoServiceAPI {
    private PermisoRepository permisoRepository;
    private Logger logger = LoggerFactory.getLogger(PermisoServiceAPI.class);
    
    public PermisoServiceAPI(PermisoRepository permisoRepository){
        this.permisoRepository = permisoRepository;
    }
    public List<Permiso> findAll(){
        logger.debug("Request to get Permiso");
        return permisoRepository.findAll();
    }
    public Optional<Permiso> findById(Long id){
        logger.debug("Request to get Permiso by id : {}",id);
        Optional<Permiso> permiso = permisoRepository.findById(id);
        return permiso;
    }
    public Permiso save(Permiso permiso){
        return permisoRepository.save(permiso);
    }
    public Permiso update(Permiso permiso){
        return permisoRepository.save(permiso);
    }
    public void delete(Permiso permiso){
        permisoRepository.delete(permiso);
    }

    public Boolean buscarPermiso(String nombre){
        return permisoRepository.findPermiso(nombre).size()>0;
    }
}

