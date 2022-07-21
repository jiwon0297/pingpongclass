package com.pingpong.backend.api.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="item_student")
@Getter
@Setter
public class ItemStudentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private int itemIndex;

    @Column(nullable = false)
    private int itemId;

    @Column(nullable = false)
    private int studentId;
}