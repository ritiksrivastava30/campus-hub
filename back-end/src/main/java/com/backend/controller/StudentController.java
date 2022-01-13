package com.backend.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.pojo.Complaint;
import com.backend.pojo.Notice;
import com.backend.pojo.Student;
import com.backend.service.StudentService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {
	
	@Autowired
	StudentService studentService;
	
	@GetMapping("/students/{userName}/{password}")
	public String studentLogin(@PathVariable String userName, @PathVariable String password) {
		return studentService.studentLogin(userName, password);
	}
	
	@PostMapping("/students")
	public Student addStudent(@RequestBody Student s) {
		return studentService.addStudent(s);
	}
	
	@PostMapping("/students/fileComplaint/{regNo}/{complaint}")
	public Complaint addComplaint(@PathVariable int regNo ,@PathVariable String complaint) {
		return studentService.addComplaint(regNo, complaint);
	}
	
	@PatchMapping("/students/{registrationNumber}")
	public Student updateStudent(@PathVariable int registrationNumber, @RequestBody Student student) {
		return studentService.updateStudent(registrationNumber, student);
	}
	
	@GetMapping("/students/hostel/{hostelName}")
	public List<Student> fetchStudentsByHostelName(@PathVariable String hostelName){
		return studentService.fetchStudentsByHostelName(hostelName);
	}
	
	@GetMapping("/students/showReply/{regNo}")
	public Complaint showReply(@PathVariable int regNo) {
		return studentService.showReply(regNo);
	}
	@GetMapping("/students/{registrationNumber}")
	public Student fetchStudentByRegistrationNumber(@PathVariable int registrationNumber) {
		return studentService.fetchStudentByRegistrationNumber(registrationNumber);
	}
	
	@GetMapping("/student/{hostelName}/{registrationNumber}")
	public Student fetchStudentByRegistrationNumberOfSpecificHostel(@PathVariable String hostelName, @PathVariable int registrationNumber) {
		System.out.println(hostelName);
		System.out.println(registrationNumber);
		return studentService.fetchStudentByRegistrationNumberOfSpecificHostel(hostelName,registrationNumber);
	}
	
	@GetMapping("/students")
	public List<Student> fetchStudents(){
		return studentService.fetchStudents();
	}
	
	@GetMapping("/students/notices/{regNo}")
	public List<Notice> fetchNotices(@PathVariable int regNo){
		return studentService.fetchNotices(regNo);
	}
}
