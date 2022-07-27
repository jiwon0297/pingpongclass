package com.pingpong.backend.api.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Slf4j
@EnableScheduling
@Service
public class ScheduleService {

    @Autowired
    
    //매일 9시마다 실행
    @Scheduled(cron="0 0 9 * * *")
    public void everyDay_9_00_RankingJob(){

    }
}
