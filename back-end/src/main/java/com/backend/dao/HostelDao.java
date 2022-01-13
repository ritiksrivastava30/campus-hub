package com.backend.dao;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.backend.dao.rowmappers.HostelRowMapper;
import com.backend.dao.rowmappers.NoticeRowMapper;
import com.backend.pojo.Hostel;
import com.backend.pojo.Notice;

@Repository
public class HostelDao extends StarterDao {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private MessMenuDao messMenuDao;
	
	public Hostel addHostel(Hostel hostel) {
		String query = "INSERT INTO `hostels`(`name`, `capacity`, `status`) values (?, ?, ?);";
		try {
			jdbcTemplate.update(query, hostel.getName(), hostel.getCapacity(), hostel.getStatus());
			query = "SELECT * from `hostels` WHERE `name` = ?;";
			RowMapper<Hostel> rowMapper = new HostelRowMapper();
			Hostel addedHostel = jdbcTemplate.queryForObject(query, rowMapper, hostel.getName());
			messMenuDao.addMenuForNewHostel(addedHostel.getId());
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