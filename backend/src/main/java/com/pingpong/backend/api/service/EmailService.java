package com.pingpong.backend.api.service;

import com.pingpong.backend.api.domain.StudentEntity;
import com.pingpong.backend.api.domain.TeacherEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import javax.mail.Message;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

@Service
@RequiredArgsConstructor
public class EmailService {
    private final JavaMailSender javaMailSender;

    public void sendStudentMail(StudentEntity student, String randomPassword){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("ppclass403@gmail.com");
        message.setTo(student.getEmail());
        message.setSubject("[핑퐁클래스]"+student.getName()+"님 핑퐁클래스 임시비밀번호 생성");
        message.setText("<h1>"+student.getName()+"님 핑퐁클래스 비밀번호 재설정 메일입니다.</h1> <hr/><p>임시비밀번호는 <span color='blue'>"+randomPassword+"</span> 입니다. 로그인 후 비밀번호를 재설정해주세요.</p>");
        javaMailSender.send(message);
    }

    public void sendTeacherMail(TeacherEntity teacher, String randomPassword){
        try {
            MimeMessage message = javaMailSender.createMimeMessage();
            message.setFrom("ppclass403@gmail.com");
            message.addRecipient(Message.RecipientType.TO ,new InternetAddress(teacher.getEmail(),teacher.getName(),"UTF-8"));
            message.setSubject("[핑퐁클래스]" + teacher.getName() + "님 비밀번호 재설정 메일");

            String mailForm = "<div style='width:960px; margin:0 auto;'>";
            mailForm += "<table  cellpadding='0' cellspacing='0' border='0' width='960' align='left' valign='middle' style='margin:0 auto; padding:0; min-width:960px; border:1px solid #ebebeb; font-family:'맑은 고딕', 'Malgun Gothic', '돋움', Dotum, sans-serif; font-size:18px; color:#666666; letter-spacing:-1.3px; line-height:1.8;'>";
            mailForm += "<tbody>";
            mailForm += "<tr>";
            mailForm += "<td width='70' height='80'></td>";
            mailForm += "<td width='820' height='80'></td>";
            mailForm += "<td width='70' height='80'></td>";
            mailForm += "</tr>";
            mailForm += "<tr>";
            mailForm += "<td height='30'></td>";
            mailForm += "<td height='30' align='right'>";
            mailForm += "<a href='http://localhost:9002/'><img src='http://localhost:9002/image/logo2.png' alt='바니마켓 로고' style='height:30px;'/></a>";
            mailForm += "</td>";
            mailForm += "<td height='30'></td>";
            mailForm += "</tr>";
            mailForm += "<tr>";
            mailForm += "<td height='30'></td>";
            mailForm += "<td height='30'></td>";
            mailForm += "<td height='30'></td>";
            mailForm += "</tr>";
            mailForm += "<tr>";
            mailForm += "<td></td>";
            mailForm += "<td>";
            mailForm += "<p style='font-size:40px; color:#333333; font-weight:300; line-height:1; letter-spacing:-4px;'>인증번호 안내</p>";
            mailForm += "</td>";
            mailForm += "<td></td>";
            mailForm += "</tr>";
            mailForm += "<tr>";
            mailForm += "<td height='30'></td>";
            mailForm += "<td height='30'></td>";
            mailForm += "<td height='30'></td>";
            mailForm += "</tr>";
            mailForm += "<tr>";
            mailForm += "<td></td>";
            mailForm += "<td>";
            mailForm += "<p style='font-size:16px;'>안녕하세요.고객님<br/>바니마켓 회원가입을 위한 인증번호를 안내해드립니다.<br/> 인증번호를 입력해주세요.</p>";
            mailForm += "</td>";
            mailForm += "<td></td>";
            mailForm += "</tr>";
            mailForm += "<tr>";
            mailForm += "<td height='15'></td>";
            mailForm += "<td height='15'></td>";
            mailForm += "<td height='15'></td>";
            mailForm += "</tr>";
            mailForm += "<tr>";
            mailForm += "<td></td>";
            mailForm += "<td style='padding:30px; background:#f5f5f5; text-align:center;'>";
            mailForm += "<p style='font-size:25px; font-weight:500; color:#333333;'><span style='margin-right:20px; color:#666666;'>인증번호</span>" + randomPassword + "</p>";
            mailForm += "</td>";
            mailForm += "<td></td>";
            mailForm += "</tr>";
            mailForm += "<tr>";
            mailForm += "<td height='15'></td>";
            mailForm += "<td height='15'></td>";
            mailForm += "<td height='15'></td>";
            mailForm += "</tr>";
            mailForm += "<tr>";
            mailForm += "<td></td>";
            mailForm += "<td>";
            mailForm += "<p style='font-size:16px;'>감사합니다.</p>";
            mailForm += "</td>";
            mailForm += "<td></td>";
            mailForm += "</tr>";
            mailForm += "<tr>";
            mailForm += "<td width='70' height='80'></td>";
            mailForm += "<td width='820' height='80'></td>";
            mailForm += "<td width='70' height='80'></td>";
            mailForm += "</tr>";
            mailForm += "</tbody>";
            mailForm += "</table>";
            mailForm += "</div>";
            message.setText(mailForm, "UTF-8", "html");
            javaMailSender.send(message);
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
