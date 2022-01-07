package com.backend.dao;

import org.springframework.stereotype.Repository;

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
	
}