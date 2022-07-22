package com.pingpong.backend.api.controller;

import com.pingpong.backend.api.domain.NoticeEntity;
import com.pingpong.backend.api.domain.NoticeRequest;
import com.pingpong.backend.api.domain.NoticeResponse;
import com.pingpong.backend.api.repository.NoticeRepository;
import com.pingpong.backend.api.service.NoticeService;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/notice")
@RequiredArgsConstructor
public class NoticeController {

    private final NoticeService noticeService;

    @ApiOperation(value = "공지사항 작성", notes = "teacherId, classId, title, content를 이용하여 공지사항을 작성합니다.")
    @PostMapping()
    public int save(@RequestBody final NoticeRequest params){
        return noticeService.save(params);
    }

    @ApiOperation(value = "공지사항 수정", notes = "teacherId, classId, title, content를 이용하여 공지사항을 수정합니다.")
    @PatchMapping("/{noticeId}")
    public int save(@PathVariable final int noticeId, @RequestBody final NoticeRequest params){
        return noticeService.update(noticeId, params);
    }

    @ApiOperation(value = "공지사항 조회 및 검색", notes = "공지사항을 조회하고, 필터에 따라 검색합니다.")
    @GetMapping("/list")
    public List<NoticeResponse> select(@RequestParam(value="type") int type, @RequestParam(value="userId") String userId, @RequestParam(value="classId") String classId, @RequestParam(value="titleSearch") String titleSearch){
        if(type==1){
            //관리자일 때
            if(userId.charAt(0)=='5') {
                return noticeService.findAll();
            }
            //선생님일 때
            else {
                return noticeService.findAll();
            }
        //학생일 때
        } else if(type==0){

        }
        return noticeService.findAll();
    }

    @ApiOperation(value = "공지사항 삭제", notes = "해당 번호의 공지글을 삭제합니다.")
    @DeleteMapping("/{noticeId}")
    public int delete(@PathVariable final int noticeId){
        noticeService.delete(noticeId);
        return 200;
    }
}
