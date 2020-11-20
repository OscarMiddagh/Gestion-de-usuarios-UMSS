package com.qualityhunters.Repository;

import com.qualityhunters.Model.Permiso;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PermisoRepository extends JpaRepository<Permiso, Long> {
}