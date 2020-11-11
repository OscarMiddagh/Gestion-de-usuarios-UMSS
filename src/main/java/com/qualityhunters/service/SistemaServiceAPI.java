package com.qualityhunters.service;


import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.qualityhunters.Model.Sistema;
import com.qualityhunters.Repository.SistemaRepository;

@Service
public class SistemaServiceAPI {
    private SistemaRepository sistemaRepository;
    private Logger logger = LoggerFactory.getLogger(SistemaServiceAPI.class);
    
    public SistemaServiceAPI(SistemaRepository sistemaRepository){
        this.sistemaRepository = sistemaRepository;
    }
    public List<Sistema> findAll(){
        logger.debug("Request to get Sistema");
        return sistemaRepository.findAll();
    }
    public Optional<Sistema> findById(Long id){
        logger.debug("Request to get Sistema by id : {}",id);
        Optional<Sistema> sistema = sistemaRepository.findById(id);
        return sistema;
    }
    public Sistema save(Sistema sistema){
        return sistemaRepository.save(sistema);
    }
    public Sistema update(Sistema sistema){
        return sistemaRepository.save(sistema);
    }
    public void delete(Sistema sistema){
        sistemaRepository.delete(sistema);
    }
}

