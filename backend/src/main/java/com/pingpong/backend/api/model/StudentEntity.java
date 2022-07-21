package com.pingpong.backend.api.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="student")
@Getter
@Setter
public class StudentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private int studentId;

    @Column(nullable = false, length = 10)
    private String name;

    @Column(nullable = false)
    private Byte grade;

    @Column(nullable = false)
    private Byte class_num;

    @Column(nullable = false)
    private Byte studentNum;

    @Column(length = 40, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String profile;

    @Column(nullable = false)
    private int point;

    @Column(nullable = false)
    private int totalPoint;

    @Column(nullable = false, length = 50)
    private String introduce;
}