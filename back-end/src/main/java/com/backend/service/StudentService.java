package com.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.dao.StudentDao;
import com.backend.pojo.Student;

@Service
public class StudentService {

	@Autowired
	StudentDao studentDao;
	
	public String checkCredentials(String username, String password) {
		return studentDao.checkCredentials(username, password);
	}
	
	public Student addStudent(Student s) {
		return studentDao.addStudent(s);
	}
	
	public List<Student> fetchStudentsByHostelId(int hostelId){
		return studentDao.fetchStudentsByHostelId(hostelId);
	}
}
