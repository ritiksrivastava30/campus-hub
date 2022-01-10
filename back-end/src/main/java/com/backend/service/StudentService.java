package com.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.dao.StudentDao;
import com.backend.pojo.Notice;
import com.backend.pojo.Student;

@Service
public class StudentService {
	
	@Autowired
	StudentDao studentDao;
	
	public String studentLogin(String username, String password) {
		return studentDao.studentLogin(username, password);
	}
	
	public Student addStudent(Student s) {
		return studentDao.addStudent(s);
	}
	
	public Student updateStudent(int registrationNumber, Student student) {
		return studentDao.updateStudent(registrationNumber, student);
	}

	public List<Student> fetchStudentsByHostelName(String hostelName){
		return studentDao.fetchStudentsByHostelName(hostelName);
	}
	
	public Student fetchStudentByRegistrationNumber(int registrationNumber) {
		return studentDao.fetchStudentByRegistrationNumber(registrationNumber);
	}
	
	public Student fetchStudentByRegistrationNumberOfSpecificHostel(int registrationNumber) {
		return studentDao.fetchStudentByRegistrationNumberOfSpecificHostel(registrationNumber);
	}
	
	public List<Student> fetchStudents() {
		return studentDao.fetchStudents();
	}
	
	public List<Notice> fetchNotices(int regNo){
		return studentDao.fetchNotices(regNo);
	}
}
