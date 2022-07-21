package com.pingpong.backend.api.entity;


import javax.persistence.*;
import java.util.Date;

//import lombok.*;
//@Getter
//@Builder
//@AllArgsConstructor
//@NoArgsConstructor

@Entity
@Table(name="record")
public class RecordEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int recordId;

    @Column( nullable = false, length=10)
    private String teacherId;

    @Column(nullable = false)
    private int classId;

    @Column(nullable = false)
    private byte subjectCode;

    @Column(nullable = false)
    private int timeId;

    @Column(nullable = false, length = 256)
    private String videoUrl;

    @Column(nullable = false)
    private Date videoSavetime;
}