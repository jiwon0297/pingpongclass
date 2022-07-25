package com.pingpong.backend.api.repository;

import com.pingpong.backend.api.domain.ItemEntity;
import com.pingpong.backend.api.domain.ItemStudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemStudentRepository extends JpaRepository<ItemStudentEntity, Integer> {

}
