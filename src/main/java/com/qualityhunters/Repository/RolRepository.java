package com.qualityhunters.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

import com.qualityhunters.Model.Rol;
import com.qualityhunters.Model.Sistema;

@Repository
public interface RolRepository extends JpaRepository < Rol, Long > {
    @Query("select r from Rol r where r.sistema = :subSistemaId")
    List<Rol> rolesPorSubsistema(@Param("subSistemaId") Sistema subSistemaId);
}
