package com.pingpong.backend.api.service;

import com.pingpong.backend.api.domain.ItemEntity;
import com.pingpong.backend.api.domain.response.ItemStudentResponse;

import java.util.List;

public interface ItemService {
    //전체 아이템 가져오기
    List<ItemEntity> loadItem() throws Exception;

    //보유 아이템 목록 조회
    List<ItemStudentResponse> findItemById(int studentId) throws Exception;

    //아이템 사용
    void delete(int studentId, int itemId) throws Exception;
}