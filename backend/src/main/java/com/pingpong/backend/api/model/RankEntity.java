package com.pingpong.backend.api.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="rank")
@Getter
@Setter
public class RankEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private int rankId;

    @Column(nullable = false)
    private int studentId;

    @Column(nullable = false)
    private int rankNum;
}