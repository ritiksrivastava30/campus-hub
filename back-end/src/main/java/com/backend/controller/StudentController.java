package com.backend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.pojo.Student;
import com.backend.service.StudentService;
import com.backend.service.WardenService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {
	
	@Autowired
	StudentService studentService;
	
	@Autowired
	WardenService wardenService;
	
	@GetMapping("/students/{userName}/{password}")
	public String checkCredentials(@PathVariable String userName, @PathVariable String password) {
		return studentService.checkCredentials(userName, password);
	}
	
	@PostMapping("/students")
	public Student addStudent(@RequestBody Student s) {
		return studentService.addStudent(s);
	}
	
	@GetMapping("/students")
	public List<Student> fetchStudentsByHostelId(int hostelId){
		return studentService.fetchStudentsByHostelId(hostelId);
	}
	
}
