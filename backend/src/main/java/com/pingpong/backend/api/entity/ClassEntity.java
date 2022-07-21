package com.pingpong.backend.api.entity;

import javax.persistence.*;

@Entity
@Table(name="class")
public class ClassEntity {
    @Id
    private int classId;

    @ManyToOne
    @JoinColumn(name="teacher_id",nullable = false)
    private TeacherEntity teacherentity;

    @ManyToOne
    @JoinColumn(name="subject_code", nullable = false)
    private SubjectEntity subjectentity;

    @ManyToOne
    @JoinColumn(name="timetable_id", nullable = false)
    private TimetableEntity timetableentity;

    @Column(nullable = false, length = 20)
    private String classTitle;

    @Column(nullable = false)
    private byte classDay;
}
