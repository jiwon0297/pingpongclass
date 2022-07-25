package com.pingpong.backend.api.service;

import com.pingpong.backend.api.domain.TeacherEntity;

import java.util.List;
import java.util.Optional;


public interface TeacherService {
    //회원가입
    void register(TeacherEntity teacher);

    //선생님 목록 조회
    List<TeacherEntity> findByName(String name);

    //선생님 1명 조회
    public Optional<TeacherEntity> findByTeacherId(int teacherId);

    //이메일 중복체크
    boolean hasEmail(String email);

    void modify(TeacherEntity teacher);

    void modifyPassword(int teacherId, String password);

    void modifyEmail(int teacherId, String email);

    //선생님 삭제
    void delete(int teacherId);
}
