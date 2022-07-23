package com.pingpong.backend.api.repository;

import com.pingpong.backend.api.domain.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface StudentRepository extends JpaRepository<StudentEntity, Integer> {
}
