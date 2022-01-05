package com.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.dao.WardenDao;
import com.backend.pojo.Student;
import com.backend.pojo.Warden;

@Service
public class WardenService {

	@Autowired
	WardenDao wardenDao;
	
	public String getHostelName(String username, String password) {
		return wardenDao.getHostelName(username, password);
	}
	
	public Warden addWarden(Warden warden) {
		return wardenDao.addWarden(warden);
	}
	
	public List<Warden> fetchWardens(){
		return wardenDao.fetchWardens();
	}
	
	public Warden updateWarden(int id, Warden warden) {
		return wardenDao.updateWarden(id, warden);
	}
	
	public Student addStudent(Student s) {
		return wardenDao.addStudent(s);
	}
	
	public List<Student> fetchStudentsByHostelId(int hostelId){
		return wardenDao.fetchStudentsByHostelId(hostelId);
	}
}
