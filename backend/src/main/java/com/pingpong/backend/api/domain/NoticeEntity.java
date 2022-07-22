package com.pingpong.backend.api.domain;

import javax.persistence.*;
import java.sql.Timestamp;

//import lombok.*;
//@Getter
//@Builder
//@AllArgsConstructor
//@NoArgsConstructor

@Entity
@Table(name="notice")
public class NoticeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int noticeId;

    @ManyToOne
    @JoinColumn(name="teacher_id",nullable=false)
    private TeacherEntity teachEntity;

    @Column(nullable = false, length=50)
    private String title;

    @Column(nullable = false, length=2000)
    private String content;

    @Column(nullable = false)
    private Timestamp regtime;

}
