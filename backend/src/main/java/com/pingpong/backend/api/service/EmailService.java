package com.pingpong.backend.api.service;

import com.pingpong.backend.api.domain.StudentEntity;
import com.pingpong.backend.api.domain.TeacherEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {
    private final JavaMailSender emailSender;

    public void sendStudentMail(StudentEntity student, String randomPassword){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("ppclass403@gmail.com");
        message.setTo(student.getEmail());
        message.setSubject("[핑퐁클래스]"+student.getName()+"님 핑퐁클래스 임시비밀번호 생성");
        message.setText("<h1>"+student.getName()+"님 핑퐁클래스 비밀번호 재설정 메일입니다.</h1> <hr/><p>임시비밀번호는 <span color='blue'>"+randomPassword+"</span> 입니다. 로그인 후 비밀번호를 재설정해주세요.</p>");
        emailSender.send(message);
    }

    public void sendTeacherMail(TeacherEntity teacher, String randomPassword){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("ppclass403@gmail.com");
        message.setTo(teacher.getEmail());
        message.setSubject("[핑퐁클래스]"+teacher.getName()+"님 비밀번호 재설정 메일");
        message.setText("<h1>"+teacher.getName()+"님 핑퐁클래스 비밀번호 재설정 메일입니다.</h1> <hr/><p>임시비밀번호는 <span color='blue'>"+randomPassword+"</span> 입니다. 로그인 후 비밀번호를 재설정해주세요.</p>");
        emailSender.send(message);
    }
}
