package com.pingpong.backend.controller;

import com.pingpong.backend.api.entity.User;
import com.pingpong.backend.api.repository.UserRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/user")
@CrossOrigin("*")
@Api(tags = "회원 컨트롤러")
public class UserController {
d
    private static final Logger logger =LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserRepository userRepository;

    @ExceptionHandler
    public ResponseEntity<String> handler(Exception e){
        logger.info("ErrorHandler.......................................");
        logger.info("ErrorMessage.......................................{}",e.getMessage());
        e.printStackTrace();

        HttpHeaders resHeaders = new HttpHeaders();
        resHeaders.add("Content-Type", "application/json;charset=UTF-8");
//        if( e instanceof HappyHouseException) {
//            return new ResponseEntity<String>(e.getMessage(), resHeaders, HttpStatus.FAILED_DEPENDENCY);
//        }else {
//            return new ResponseEntity<String>("처리 중 오류 발생", resHeaders, HttpStatus.FAILED_DEPENDENCY);
//        }
    }

    @PatchMapping("/users/login")
    @ApiOperation(value = "로그인", notes="설명")
    public User create(@RequestBody User user) {


        return userRepository.save(user);
    }

    @PatchMapping("/users")
    @ApiOperation(value = "로그인", notes="설명")
    public ResponseEntity<?> Login(@RequestBody User user) {


        return new ResponseEntity<>() ;
    }

    @PostMapping("/users/login")
    @ApiOperation(value = "아이디 중복확인", notes="설명")
    public String read(@PathVariable Long id) {

        Optional<User> userOptional = userRepository.findById(id);
        userOptional.ifPresent(System.out::println);

        return "success : "+userOptional.toString();
    }
}