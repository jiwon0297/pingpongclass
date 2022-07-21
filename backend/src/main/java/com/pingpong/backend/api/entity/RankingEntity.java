package com.pingpong.backend.api.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="ranking")
@Getter
@Setter
public class RankingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private int rankId;

    @OneToOne
    @JoinColumn(name="student_id", nullable = false)
    private StudentEntity student;

    @Column(nullable = false)
    private int rankNum;
}