package com.backend.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository; 
import com.backend.pojo.Guard;

@Repository
public class GuardDao extends StarterDao {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public String guardLogin(String email, String password) {
//		String query = "SELECT `name` FROM `hostels` WHERE `id` = (SELECT `hostel_id` FROM `guards` WHERE `email` = '" +id+ "' AND `password` = '" + password +"');";
//		String ss="";
//		try {
//			ss = (String) jdbcTemplate.queryForObject(query,String.class);
//		}
//		catch(EmptyResultDataAccessException e) {
//			ss="error";
//		}
//		return ss;
		
		String query = "select password from guards where email = ?;";
		try {
			String encodedPassword = (String)jdbcTemplate.queryForObject(query, String.class, email);
			if(passwordEncoder.matches(password, encodedPassword)) {
				query = "SELECT `name` FROM `hostels` WHERE `id` = (SELECT `hostel_id` FROM `guards` WHERE `email` = ?);";
				String hostelName = (String)jdbcTemplate.queryForObject(query, String.class, email);
				System.out.println(hostelName);
				return hostelName;
			}
			return "error";
		}catch(Exception e) {
			System.out.println(2);
			return "error";
		}
	}
 
	public Guard addGuard(Guard guard) {
		String encodedPassword = passwordEncoder.encode(guard.getPassword());
		String query = "select `id` from `hostels` where name = ?;";
		int id = (int)jdbcTemplate.queryForObject(query, Integer.class, guard.getHostelName());
		query = "INSERT IGNORE INTO `guards` (`name`, `email`, `password`, `phone_no`, `hostel_id`) VALUES (?, ?, ?, ?, ?);";
		try {
			jdbcTemplate.update(query, guard.getName(), guard.getEmail(), encodedPassword, guard.getPhone_no(), id);
			query = "select guards.id, guards.name, `email` , `password`, `phone_no`, hostels.name from `guards` inner join `hostels` where hostels.id = ? and guards.email = ?";
			Guard addedguard = jdbcTemplate.queryForObject(query, new GuardRowMapper(), id, guard.getEmail());
			return addedguard;
		}catch(Exception e) {
			return null;
		}
	}
	
	public Guard updateGuard(int id,Guard guard) {
		String encodedPassword = passwordEncoder.encode(guard.getPassword());
		String query = "select `id` from `hostels` where name = ?;";
		int hostelId = (int)jdbcTemplate.queryForObject(query,Integer.class, guard.getHostelName());
		try {
			query = "update `guards` set `name` = ?, `email` = ?, `password` = ?, `phone_no` = ?, `hostel_id` = ? where `id` = ?;";
			jdbcTemplate.update(query, guard.getName(), guard.getEmail(), encodedPassword, guard.getPhone_no(), hostelId, id);
			query = "select guards.id, guards.name, `email` , `password`, `phone_no`, hostels.name from `guards` inner join `hostels` where hostels.id = ? and guards.email = ?";
			Guard addedGuard = jdbcTemplate.queryForObject(query, new GuardRowMapper(), hostelId, guard.getEmail());
			return addedGuard;
		}catch (Exception e) {
			return null;
		}
	}

	public List<Guard> fetchGuards() {
		System.out.println("FETCHING...");
		String query = "select guards.id, guards.name, `email` , `password`, `phone_no`, hostels.name from `guards` inner join `hostels` where hostels.id = guards.hostel_id and hostels.id != ?;";
		RowMapper<Guard> rowMapper = new GuardRowMapper();
		try {
			List<Guard> guards =jdbcTemplate.query(query,rowMapper);
			return guards;
		}catch(Exception e) {
			return null;
		}
	}
	
}
