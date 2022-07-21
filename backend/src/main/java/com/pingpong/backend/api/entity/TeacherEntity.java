package com.pingpong.backend.api.entity;


import javax.persistence.*;

//import lombok.*;
//@Getter
//@Builder
//@AllArgsConstructor
//@NoArgsConstructor

@Entity
@Table(name="teacher")
public class TeacherEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int teacherId;

    @Column(nullable = false, length=10)
    private String name;

    @Column(length=40)
    private String email;

    @Column(nullable = false, length=256)
    private String password;

    @Column(nullable = false, length = 256)
    private String profile;
}
