package com.qualityhunters.Repository;

import java.util.List;

import com.qualityhunters.Model.Notificacion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface NotificacionRepository extends JpaRepository < Notificacion, Long > {
    @Query("select n from Notificacion n where n.user.id = :idUsuario")
    List<Notificacion> notificaciones(@Param("idUsuario") Long idUsuario);
}
