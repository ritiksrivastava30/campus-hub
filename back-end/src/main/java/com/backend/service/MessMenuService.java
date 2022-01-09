package com.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.dao.MessMenuDao;
import com.backend.pojo.Day;

@Service
public class MessMenuService {
	
	@Autowired
	private MessMenuDao messMenuDao;
	
	public List<Day> fetchMessMenu(String hostelName) {
		return messMenuDao.fetchMessMenu(hostelName);
	}
	
	public List<Day> updateMenu(String hostelName, String day, String time, String updatedItem) {
		return messMenuDao.updateMenu(hostelName, day, time, updatedItem);
	}
}
