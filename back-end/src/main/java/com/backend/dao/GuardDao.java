package com.backend.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository; 
import com.backend.pojo.Guard;

@Repository
public class GuardDao extends StarterDao {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	public String guardLogin(String id, String password) {
		System.out.println(id);
		System.out.println(password);
		String sql = "SELECT `name` FROM `hostels` WHERE `id` = (SELECT `hostel_id` FROM `guards` WHERE `email` = '" +id+ "' AND `password` = '" + password +"');";
		String ss="";
		try {
			ss = (String) jdbcTemplate.queryForObject(sql,String.class);
		}
		catch(EmptyResultDataAccessException e) {
			ss="error";
		}
		return ss;
	}
 
	public Guard addGuard(Guard guard) {

		String query = "select `id` from `hostels` where name = ?;";
		int id = (int)jdbcTemplate.queryForObject(query, Integer.class, guard.getHostelName());
		query = "INSERT IGNORE INTO `guards` (`name`, `email`, `password`, `phone_no`, `hostel_id`) VALUES (?, ?, ?, ?, ?);";
		try {
			jdbcTemplate.update(query, guard.getName(), guard.getEmail(), guard.getPassword(), guard.getPhone_no(), id);
			query = "select guards.id, guards.name, `email` , `password`, `phone_no`, hostels.name from `guards` inner join `hostels` where hostels.id = ? and guards.email = ?";
			Guard addedguard = jdbcTemplate.queryForObject(query, new GuardRowMapper(), id, guard.getEmail());
			return addedguard;
		}catch(Exception e) {
			return null;
		}
	}
	
	public Guard updateGuard(int id,Guard guard) {
		String query = "select `id` from `hostels` where name = ?;";
		int hostelId = (int)jdbcTemplate.queryForObject(query,Integer.class, guard.getHostelName());
		try {
			query = "update `guards` set `name` = ?, `email` = ?, `password` = ?, `phone_no` = ?, `hostel_id` = ? where `id` = ?;";
			jdbcTemplate.update(query, guard.getName(), guard.getEmail(), guard.getPassword(), guard.getPhone_no(), hostelId, id);
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
