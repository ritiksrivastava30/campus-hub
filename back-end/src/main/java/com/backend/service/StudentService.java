package com.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.dao.StudentDao;

@Service
public class StudentService {

	@Autowired
	StudentDao studentDao;
	
	public String checkCredentials(String username, String password) {
		return studentDao.checkCredentials(username, password);
	}
	
}
