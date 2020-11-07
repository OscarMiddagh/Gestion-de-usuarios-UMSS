package com.qualityhunters.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qualityhunters.Model.Solicitud;

@Repository
public interface SolicitudRepository extends JpaRepository < Solicitud, Long > {

}