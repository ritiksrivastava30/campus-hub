package com.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.dao.UtilityDao;
import com.backend.pojo.Branch;

@Service
public class UtilityService {
	
	@Autowired
	UtilityDao utilityDao;
	
	public List<Branch> fetchBranch(){
		return utilityDao.fetchBranch();
	}
	
}
