package com.pingpong.backend.api.entity;

import javax.persistence.*;

//import lombok.*;
//@Getter
//@Builder
//@AllArgsConstructor
//@NoArgsConstructor

@Entity
@Table(name="subject")
public class SubjectEntity {
    @Id
    private byte classSubjectCode;

    @Column(nullable = false, length=10)
    private String name;

}
