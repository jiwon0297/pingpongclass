package com.pingpong.backend.api.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="item")
@Getter
@Setter
public class ItemEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private int itemId;

    @Column(nullable = false, length = 20)
    private String name;

    @Column(nullable = false)
    private byte rarity;
}