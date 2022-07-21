package com.pingpong.backend.api.entity;

import javax.persistence.*;

@Entity
@Table(name="timetable")
public class TimetableEntity {
    @Id
    private byte timetableId;

    @Column(nullable = false)
    private byte startTimehh;

    @Column(nullable = false)
    private byte startTimemm;

    @Column(nullable = false)
    private byte endTimehh;

    @Column(nullable = false)
    private int endTimemm;
}
