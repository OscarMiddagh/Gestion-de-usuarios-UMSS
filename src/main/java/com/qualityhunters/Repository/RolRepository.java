package com.qualityhunters.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qualityhunters.Model.Rol;

@Repository
public interface RolRepository extends JpaRepository < Rol, Long > {
}
