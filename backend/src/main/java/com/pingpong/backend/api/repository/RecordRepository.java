package com.pingpong.backend.api.repository;

import com.pingpong.backend.api.domain.RecordEntity;
import io.netty.util.internal.IntegerHolder;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecordRepository extends JpaRepository <RecordEntity, Integer>{
    List<RecordEntity> findRecordByClassId(int classId);
    List<RecordEntity> findByClassIdAndTitle(int classId, String title, Sort sort);
}
