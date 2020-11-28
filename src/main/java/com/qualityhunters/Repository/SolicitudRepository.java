package com.qualityhunters.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import java.util.List;
import com.qualityhunters.Model.Solicitud;

@Repository
public interface SolicitudRepository extends JpaRepository < Solicitud, Long > {
    @Query("select s from Solicitud s where s.usuario.id = :id and s.estado='S/R'")
    List<Solicitud> hayEnviado(@Param("id") Long id);
    
}