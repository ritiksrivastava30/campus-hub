package com.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.pojo.Branch;
import com.backend.service.UtilityService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UtilityController {
	
	@Autowired
	UtilityService utilityService;
	
	@GetMapping("/branch")
	public List<Branch> fetchBranch(){
		return utilityService.fetchBranch();
	}
	
}
