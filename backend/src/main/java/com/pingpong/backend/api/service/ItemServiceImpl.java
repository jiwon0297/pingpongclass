package com.pingpong.backend.api.service;

import com.pingpong.backend.api.domain.ItemEntity;
import com.pingpong.backend.api.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Collections;
import java.util.List;

public class ItemServiceImpl implements ItemService{
    @Autowired
    private ItemRepository itemRepository;

    @Override
    public List<ItemEntity> loadItem() throws Exception {
        return itemRepository.findAll();
    }

    //FIXME
    @Override
    public ItemEntity findItemById(int studentId) throws Exception {
        return (ItemEntity) itemRepository.findAllById(Collections.singleton(studentId));
    }
}
