package com.pingpong.backend.api.domain;


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

    @ManyToOne
    @JoinColumn(name="class_id", nullable = false)
    private ClassEntity classEntity;

    @Column(nullable = false, length = 256)
    private String videoUrl;

    @Column(nullable = false)
    private Date videoSavetime;
}