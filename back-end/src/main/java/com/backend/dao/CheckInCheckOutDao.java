package com.backend.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.backend.dao.rowmappers.CheckInCheckOutRowMapper;
import com.backend.pojo.CheckInCheckOut;

@Repository
public class CheckInCheckOutDao extends StarterDao {

	public String checkOut(int registrationNumber) {
		String query = "INSERT INTO `check_out` (`reg_no`) values(?);";
		try {	
			jdbcTemplate.update(query, registrationNumber);
			return "checked out";
		}catch(Exception e) {
			return "error";
		}
	}
	
	public String checkIn(int registrationNumber) {
		String query = "DELETE FROM `check_out` where `reg_no` = ?;";
		int res = jdbcTemplate.update(query, registrationNumber);
		if(res == 1) {	
			return "checked in";
		}
		return "error";
	}
	
	public List<CheckInCheckOut> listOfOutSideStudents(){
		String query="SELECT * FROM `check_out`;";
		List<CheckInCheckOut> outsiders = jdbcTemplate.query(query, new CheckInCheckOutRowMapper());
		return outsiders;
	}
	
	public List<String> emailsOfOutsideStudents(){
		List<CheckInCheckOut> outsiders=listOfOutSideStudents();
		List<String> outsidersEmail=new ArrayList<>();
		System.out.println(outsiders.size());
		for(int i=0;i<outsiders.size();i++) {
			System.out.println(outsiders.get(i));
		}
		for(int i=0;i<outsiders.size();i++) {
//			System.out.println(outsiders.get(i).getReg_no());
			String query="SELECT `email` FROM `students` WHERE `reg_no`= "+ outsiders.get(i).getReg_no() +";";
			String temp = (String)jdbcTemplate.queryForObject(query,String.class);
			outsidersEmail.add(temp);
		}
		return outsidersEmail;
//		String query="SELECT `email` FROM `students` INNER JOIN `check_out` where check_out.reg_no=students.reg_no;";
//		List<CheckInCheckOut> checkInCheckOut = jdbcTemplate.query(query, new CheckInCheckOutRowMapper());
	}
}