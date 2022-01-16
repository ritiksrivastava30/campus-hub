package com.backend.controller;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.backend.pojo.Day;
import com.backend.service.MessMenuService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MessMenuController {

	@Autowired
	private MessMenuService messMenuService;

	@PatchMapping("/menu/{hostelName}/{day}/{time}/{updatedItem}")
	public List<Day> updateMenu(@PathVariable String hostelName, @PathVariable String day, @PathVariable String time, @PathVariable String updatedItem) {
//		System.out.println(hostelName +  day + time +  updatedItem);
		return messMenuService.updateMenu(hostelName, day, time, updatedItem);
	}
	
	@GetMapping("/menu/{hostelName}")
	public List<Day> fetchMessMenu(@PathVariable String hostelName) {
		System.out.println(hostelName);
		return messMenuService.fetchMessMenu(hostelName);
	}
	
}
