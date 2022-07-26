package com.pingpong.backend.api.domain.response;

import com.pingpong.backend.api.domain.NoticeEntity;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Getter
@Setter
public class StudentExcelResponse {
    private int studentId;
    private String name;
    private int grade;
    private int classNum;
    private int studentNum;
    private String password;
    private String message;

    public void setEmpty(){
        this.studentId=0;
        this.name=null;
        this.grade=0;
        this.classNum=0;
        this.studentNum=0;
        this.password=null;
    }
}