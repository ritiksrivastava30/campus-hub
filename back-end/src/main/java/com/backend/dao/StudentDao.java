package com.backend.dao;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Repository;

@Repository
public class StudentDao extends StarterDao{
	public String checkCredentials(String reg_no,String password) {
		String query = "SELECT `reg_no` FROM `students` WHERE `reg_no` = '" +Integer.parseInt(reg_no)+ "' AND `password` = '" + password +"';";
		String ss="";
		try {
			ss = (String)jdbcTemplate.queryForObject(query,String.class);
		}
		catch(EmptyResultDataAccessException e) {
			ss="-1";
		}
//		System.out.println(ss);
		return ss;
	}
}
