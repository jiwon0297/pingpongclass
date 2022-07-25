package com.pingpong.backend.api.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity(name = "student")
@Table(name="student")
@Getter @Setter
@NoArgsConstructor
public class StudentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int studentId;

    @Column(nullable = false, length = 10)
    private String name;

    @Column(nullable = false)
    private int grade;

    @Column(nullable = false)
    private int classNum;

    @Column(nullable = false)
    private int studentNum;

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

//    @OneToMany(mappedBy = "student")
//    private List<ItemStudentEntity> items = new ArrayList<>();

//    public update(String name, int grade, int classNum, int studentNum, String email, String password, String profile, int point, int totalPoint, String introduce){
//        this.name = name;
//        this.classNum = classNum;
//        this.studentId = studentNum;
//        this.email = email;
//        this.password = password;
//        this.profile = profile;
//        this.point = point;
//        this.totalPoint = totalPoint;
//        this.introduce = introduce;
//    }

}