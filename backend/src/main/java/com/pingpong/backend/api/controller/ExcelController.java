package com.pingpong.backend.api.controller;

import com.pingpong.backend.api.domain.StudentExcelTest;
import com.pingpong.backend.api.service.StudentExcelService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Api(value = "학생 엑셀 TEST API", tags={"엑셀"})
@RestController
@CrossOrigin("*")
@RequestMapping("/excel")
@RequiredArgsConstructor
public class ExcelController {

    private final StudentExcelService excelService;

    @ApiOperation(value = "학생 일괄등록", notes = "엑셀 파일 첨부를 통해 학생을 일괄등록 합니다.", httpMethod = "POST", produces = "multipart/form-data")
    @RequestMapping(value = "/addExcel", method = RequestMethod.POST)
    public String addExcel(@RequestPart("file") MultipartFile file) throws IOException, InvalidFormatException {
        String message = excelService.addExcel(file);
        return message;
    };
}
