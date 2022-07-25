package com.pingpong.backend.api.service;

import com.pingpong.backend.Exception.CustomException;
import com.pingpong.backend.Exception.ErrorCode;
import com.pingpong.backend.api.domain.TeacherEntity;
import com.pingpong.backend.api.repository.TeacherRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TeacherServiceImpl implements TeacherService {
    private final TeacherRepository repository;


    @Override
    @Transactional
    public void register(TeacherEntity teacher) {
        repository.save(teacher);
    }

    @Override
    public List<TeacherEntity> findByName(String name) {
        if(name.equals("전체")){
            return repository.findAll();
        } else{
            return repository.findTeacherEntitiesByName(name);
        }
    }

    public Optional<TeacherEntity> findByTeacherId(int teacherId) {
        return repository.findById(teacherId);
    }


    @Override
    public boolean hasEmail(String email) {
        return repository.existsByEmail(email);
    }

    @Override
    @Transactional
    public void modify(TeacherEntity teacher) {
        teacher.modifyTeacher(teacher);
    }

    @Override
    @Transactional
    public void modifyPassword(int teacherId, String password) {
        TeacherEntity teacherEntity = repository.findById(teacherId).orElseThrow(() -> new CustomException(ErrorCode.POSTS_NOT_FOUND));
        teacherEntity.updateRandomPassword(password);
    }

    @Override
    @Transactional
    public void modifyEmail(int teacherId, String email) {
        TeacherEntity teacherEntity = repository.findById(teacherId).orElseThrow(() -> new CustomException(ErrorCode.POSTS_NOT_FOUND));
        System.out.println("service : "+teacherId+","+ email);
        System.out.println(teacherEntity.getTeacherId()+"!!!"+teacherEntity.getEmail());
        teacherEntity.updateFirstEmail(email);
    }

    @Override
    @Transactional
    public void delete(int teacherId) {
        repository.deleteById(teacherId);
    }
}
