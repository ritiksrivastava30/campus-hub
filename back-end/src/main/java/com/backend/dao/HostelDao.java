package com.backend.dao;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.backend.pojo.Hostel;
import com.backend.pojo.Notice;
import com.backend.pojo.Complaint;

@Repository
public class HostelDao extends StarterDao {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	public Hostel addHostel(Hostel hostel) {
		String query = "INSERT INTO `hostels`(`name`, `capacity`, `status`) values (?, ?, ?);";
		try {
			jdbcTemplate.update(query, hostel.getName(), hostel.getCapacity(), hostel.getStatus());
			query = "SELECT * from `hostels` WHERE `name` = ?;";
			RowMapper<Hostel> rowMapper = new HostelRowMapper();
			Hostel addedHostel = jdbcTemplate.queryForObject(query, rowMapper, hostel.getName());
			return addedHostel;
		}catch(Exception e) {
			return null;
		}
	}
	
	public Notice addNotice(String hostelName, String notice) {
		System.out.println("In notice");
		String query = "select `id` from `hostels` where name = ?;";
		int id = (int)jdbcTemplate.queryForObject(query,Integer.class, hostelName);
		query = "INSERT INTO `notices`(`notice`, `hostel_id`) values (?, ?);";
		try {
			jdbcTemplate.update(query, notice, id);
			query = "SELECT * from `hostels` WHERE `name` = ?;";
			RowMapper<Notice> rowMapper = new NoticeRowMapper();
			Notice addedNotice = jdbcTemplate.queryForObject(query, rowMapper, hostelName);
			return addedNotice;
		}catch(Exception e) {
			return null;
		}
	}
	
	public Complaint replyComplaint(int regNo, String reply) {
		System.out.println("In reply Complaint");
		String query="UPDATE `complaints` SET `reply`=? WHERE `regNo`=? ;";
		try {
			jdbcTemplate.update(query, reply, regNo);
			query = "SELECT * from `complaints` WHERE `regNo` = ?;";
			RowMapper<Complaint> rowMapper = new ComplaintRowMapper();
			Complaint repliedComplaint = jdbcTemplate.queryForObject(query, rowMapper, regNo);
			return repliedComplaint;
		}catch(Exception e) {
			return null;
		}
	} 
	
	public List<Complaint> fetchComplaints(String hostelName){
		String que = "select `id` from `hostels` where name = ?;";
		int id = (int)jdbcTemplate.queryForObject(que,Integer.class, hostelName);
		System.out.println(id);
		que="SELECT * from `complaints` WHERE `hostel_id` = ? AND reply IS NULL;";
		List<Complaint> st=jdbcTemplate.query(que, new ComplaintRowMapper(),id);
		return st;
	}
	
	public List<Hostel> fetchHostels(){
		String query = "SELECT * from `hostels` where `id` != ?;";
		RowMapper<Hostel> rowMapper = new HostelRowMapper();
		List<Hostel> hostels = jdbcTemplate.query(query, rowMapper, 1);
		return hostels;
	}
	
	public Hostel updateHostel(int id, Hostel hostel) {
		String query = "update `hostels` set `name` = ?, `capacity` = ?, `status` = ? where `id` = ?;";
		try {
			jdbcTemplate.update(query, hostel.getName(), hostel.getCapacity(), hostel.getStatus(), id);
			query = "SELECT * from `hostels` WHERE `id` = ?;";
			Hostel addedHostel = jdbcTemplate.queryForObject(query, new HostelRowMapper(), id);
			return addedHostel;
		}catch(Exception e) { 
			return null;
		}
	}
	
}