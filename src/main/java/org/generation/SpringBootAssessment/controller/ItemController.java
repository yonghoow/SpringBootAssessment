package org.generation.SpringBootAssessment.controller;

import org.generation.SpringBootAssessment.repository.Entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.util.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

import org.generation.SpringBootAssessment.service.ItemService;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

import org.generation.SpringBootAssessment.controller.dto.ItemDTO;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.CrossOrigin;

import java.io.*;
import java.util.*;

import org.generation.SpringBootAssessment.repository.ItemRepository;

import java.sql.Date;

@RestController
@RequestMapping("/item")
public class ItemController {

    final ItemService itemService;
    /*final ItemRepository itemRepository;

    public ItemController(@Autowired ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    @GetMapping
    public Iterable<Item> getItems() {
        return itemRepository.findAll();
    }*/

    public ItemController(@Autowired ItemService itemService) {
        this.itemService = itemService;
    }

    @CrossOrigin
    @GetMapping("/all")
    public Iterable<Item> getItems() {
        return itemService.all();
    }

    @CrossOrigin
    @PostMapping("/add")
    public Item save(@RequestParam(name="title", required = true) String title,
                     @RequestParam(name="description", required = true) String description,
                     @RequestParam(name="targetDate", required = true) Date targetDate) {

        System.out.println("In save");

        Item itemDto = new Item(title, description, targetDate);
        return itemService.save(itemDto);
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public Item findItemById(@PathVariable Integer id) {
        return itemService.findById(id);
    }

    @CrossOrigin
    @PutMapping("/{id}")
    public Item update(@PathVariable Integer id, @RequestBody ItemDTO itemDto)
    {
        System.out.println("Hello");
        Item item = itemService.findById(id);
        item.setTitle(itemDto.getTitle());
        item.setDescription(itemDto.getDescription());
        return itemService.save(item);
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        itemService.delete(id);
    }
}
