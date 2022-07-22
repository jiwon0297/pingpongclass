package com.pingpong.backend.api.domain;

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
    private int itemIndex;

    @ManyToOne
    @JoinColumn(name="student_id", nullable = false)
    private StudentEntity student;

    @ManyToOne
    @JoinColumn(name="item_id", nullable = false)
    private ItemEntity item;
}