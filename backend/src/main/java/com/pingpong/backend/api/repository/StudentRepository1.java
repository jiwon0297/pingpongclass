package com.pingpong.backend.api.repository;

import com.pingpong.backend.api.domain.StudentEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class StudentRepository1 {
    private final EntityManager em;

    //학생 등록
    public void register(StudentEntity student) {
        em.persist(student);
    }

    //학생 리스트 조회
    public List<StudentEntity> findAll(int grade, int classNum, String name) {
        String query = "SELECT s FROM student s WHERE 1=1";
        if(grade != 0){
            query += "AND grade = :grade";
        }
        if(classNum != 0){
            query += "AND classNum = :classNum";
        }
        if(name != "전체"){
            query += "AND name = :name";
        }
        return em.createQuery(query, StudentEntity.class)
                .setParameter("grade", grade)
                .setParameter("classNum", classNum)
                .setParameter("name", name)
                .getResultList();
    }

    //학생 1명 조회
    public StudentEntity findOne(int studentId){
        return em.find(StudentEntity.class, studentId);
    }

    //FIXME
    //이메일 존재 유무 체크
//    public Optional<StudentEntity> hasEmail(String email){
//        List<StudentEntity> student = em.createQuery("SELECT s from student s where s.email= : email ", StudentEntity.class)
//                .setParameter("email", email).getResultList();
//        return student.stream().findAny();
//    }



}