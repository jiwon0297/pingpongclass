package com.pingpong.backend.api.controller;

import com.pingpong.backend.api.domain.request.RecordRequest;
import com.pingpong.backend.api.domain.response.RecordResponse;
import com.pingpong.backend.api.service.RecordService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/records")
@RequiredArgsConstructor
public class RecordController {

    private final RecordService recordService;

    //강의 다시보기 저장
    @ApiOperation(value = "강의다시보기 저장", notes="선생님, 수업명, 수업아이디,과목코드, 시간표아이디, 비디오링크를 저장합니다.")
    @PostMapping("")
    public void insertRecord(@RequestBody final RecordRequest req){
        recordService.save(req);
    }

    //강의 다시보기 목록 조회 및 검색
    @ApiOperation(value = "강의다시보기 목록 조회", notes="userId, title로 목록 조회")
    @GetMapping("")
    public List<RecordResponse> findBySearch(@RequestParam(value="id") int id, @RequestParam(value="title") String classTitle){
        List<RecordResponse> list = new ArrayList<>();
        //학생일때 - 검색(수업명)
        if(id<400000){
            list = recordService.findRecordsForStudent(id, classTitle);
        }else{//선생님일때
            list = recordService.findRecordsForTeacher(id);
        }
        return list;
    }

}
