package com.backend.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.backend.pojo.Day;

@Repository
public class MessMenuDao extends StarterDao{
	public void addMenuForNewHostel(int hostel_id) {
		String[] days= {"sunday","monday","tuesday","wednesday","thursday","friday","saturday"};
		for(int i=0;i<7;i++) {
			String query="INSERT INTO `messmenu` (`hostel_id`,`day`) VALUES (?,?)";
			jdbcTemplate.update(query,hostel_id,days[i]);
		}
	}

	public List<Day> updateMenu(String hostelName,String day,String time,String updatedItem) {
		String query = "select `id` from `hostels` where name = ?;";
		int hostel_id = (int)jdbcTemplate.queryForObject(query,Integer.class, hostelName);
		query="UPDATE `messmenu` SET `"+ time +"` = '"+updatedItem+"' WHERE (`hostel_id` = '"+ hostel_id +"' AND `day` = '" + day + "');";
		try {
			jdbcTemplate.update(query);
			return fetchMessMenu(hostelName);
		}catch(Exception e) {
			System.out.println("error in updating menu");
			return null;
		}
	}

	public List<Day> fetchMessMenu(String hostelName){
		String query = "select `id` from `hostels` where name = ?;";
		int hostel_id = (int)jdbcTemplate.queryForObject(query,Integer.class, hostelName);
		query="SELECT `day`,`breakfast`,`lunch`,`dinner` from `messmenu` WHERE `hostel_id` = ?;";
		try {
			List<Day> menu = jdbcTemplate.query(query, new MessMenuRowMapper(),hostel_id);
			return menu;
		}catch(Exception e) {
			return null;
		}
	}
}