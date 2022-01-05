package com.backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.backend.service.StudentService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {
	
	@Autowired
	StudentService studentService;
	
	@GetMapping("/students/{userName}/{password}")
	public String checkCredentials(@PathVariable String userName, @PathVariable String password) {
		return studentService.checkCredentials(userName, password);
	}
	
}
