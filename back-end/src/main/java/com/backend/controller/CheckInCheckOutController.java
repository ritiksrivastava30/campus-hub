package com.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.service.CheckInCheckOutService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CheckInCheckOutController {

	
	@Autowired
	CheckInCheckOutService checkInCheckOutService;
	
	@PostMapping("/checkOut/{registrationNumber}")
	public String checkOut(@PathVariable int registrationNumber) {
		return checkInCheckOutService.checkOut(registrationNumber);
	}
	
	@PostMapping("/checkIn/{registrationNumber}")
	public String chechIn(@PathVariable int registrationNumber) {
		return checkInCheckOutService.checkIn(registrationNumber);
	}
	
}


