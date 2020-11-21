package com.qualityhunters.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

import com.qualityhunters.Model.Rol;

@Repository
public interface RolRepository extends JpaRepository < Rol, Long > {
    @Query("select r from Rol r where r.id <> :id")
    List<Rol> findAllExcept(@Param("id") Long id);
}
