package com.pingpong.backend.api.service;

import com.pingpong.backend.Exception.CustomException;
import com.pingpong.backend.Exception.ErrorCode;
import com.pingpong.backend.api.domain.*;
import com.pingpong.backend.api.repository.ClassRepository;
import com.pingpong.backend.api.repository.NoticeRepository;
import com.pingpong.backend.api.repository.TeacherRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class NoticeService {

    private final NoticeRepository noticeRepository;
    private final TeacherRepository teacherRepository;
    private final ClassRepository classRepository;

    //공지사항 작성
    @Transactional
    public int save(final NoticeRequest request){
        ClassEntity classEntity = classRepository.getOne(request.getClassId());
        TeacherEntity teacherEntity = teacherRepository.getOne(request.getTeacherId());
        NoticeEntity noticeEntity = NoticeEntity.builder()
                .classEntity(classEntity)
                .teacherEntity(teacherEntity)
                .title(request.getTitle())
                .content(request.getContent())
                .build();
        NoticeEntity entity = noticeRepository.save(noticeEntity);
        return entity.getNoticeId();
    }

    //공지사항 리스트 모두 조회(관리자)
    public List<NoticeResponse> findAll(){
        Sort sort = Sort.by(Sort.Direction.DESC, "noticeId", "regtime");
        List<NoticeEntity> list = noticeRepository.findAll(sort);
        return list.stream().map(NoticeResponse::new).collect(Collectors.toList());
    }
    //todo : 현재 로그인한 사용자의 고유 수업들만 공지 Filtering

    //공지사항 검색

    //공지사항 페이지네이션

    //공지사항 수정
    @Transactional
    public int update(final int noticeId, final NoticeRequest request){
        NoticeEntity entity = noticeRepository.findById(noticeId).orElseThrow(() -> new CustomException(ErrorCode.POSTS_NOT_FOUND));
        ClassEntity classEntity = classRepository.getOne(request.getClassId());
        entity.update(classEntity, request.getTitle(), request.getContent());
        return noticeId;
    }

    //공지사항 삭제
    @Transactional
    public void delete(final int noticeId){
        NoticeEntity entity = noticeRepository.findById(noticeId).orElseThrow(() -> new CustomException(ErrorCode.POSTS_NOT_FOUND));
        noticeRepository.delete(entity);
    }
}
