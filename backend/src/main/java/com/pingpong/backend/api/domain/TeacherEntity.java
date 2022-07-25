package com.pingpong.backend.api.domain;


import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

//import lombok.*;
//@Getter
//@Builder
//@AllArgsConstructor
//@NoArgsConstructor

@Entity(name = "teacher")
@Table(name = "teacher")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class TeacherEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int teacherId;

    @Column(nullable = false, length=10)
    private String name;

    @Column(length=40, unique=true)
    private String email;

    @Column(nullable = false, length=256)
    private String password;

    private String profile;

    @Builder
    public TeacherEntity(int teacherId, String name, String email, String password, String profile) {
        this.teacherId = teacherId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.profile = profile;
    }

    public void updateRandomPassword(String password){
        this.password = password;
    }

    public void updateFirstEmail(String email){
        this.email = email;
    }

    public void modifyTeacher(TeacherEntity teacher){
        this.name = teacher.getName();
        this.email = teacher.getEmail();
        this.password = teacher.getPassword();
        this.profile = teacher.getProfile();
    }

}
