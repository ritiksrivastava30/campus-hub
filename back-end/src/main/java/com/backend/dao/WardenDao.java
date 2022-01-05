package com.backend.dao;

import java.util.List;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.backend.pojo.Hostel;
import com.backend.pojo.Student;
import com.backend.pojo.Warden;

@Repository
public class WardenDao extends StarterDao{
	
	public String getHostelName(String email, String password) {
		String query = "SELECT `name` FROM `hostels` WHERE `id` = (SELECT `hostel_id` FROM `wardens` WHERE `email` = '" +email+ "' AND `password` = '" + password +"');";
		String ss="";
		try {
			ss = (String) jdbcTemplate.queryForObject(query,String.class);
		}
		catch(EmptyResultDataAccessException e) {
			ss="error";
		}
		return ss;
	}
	
	public Warden addWarden(Warden warden) {
		String query = "select `id` from `hostels` where name = ?;";
		int id = (int)jdbcTemplate.queryForObject(query,Integer.class, warden.getHostelName());
		query = "INSERT IGNORE INTO `wardens` (`name`, `email`, `password`, `phone_no`, `hostel_id`) VALUES (?, ?, ?, ?, ?);";
		int res = jdbcTemplate.update(query, warden.getName(), warden.getEmail(), warden.getPassword(), warden.getPhoneNumber(), id);
		if(res == 1) {
			query = "select wardens.id, wardens.name, `email` , `password`, `phone_no`, hostels.name from `wardens` inner join `hostels` where hostels.id = ? and wardens.email = ?";
			Warden addedWarden = jdbcTemplate.queryForObject(query, new WardenRowMapper(), id, warden.getEmail());
			return addedWarden;
		}
		return null;
	}
	
	public List<Warden> fetchWardens(){
		String query = "select wardens.id, wardens.name, `email` , `password`, `phone_no`, hostels.name from `wardens` inner join `hostels` where hostels.id = wardens.hostel_id and hostels.id != ?;";
		List<Warden> wardens = jdbcTemplate.query(query, new WardenRowMapper(), 1);
		return wardens;
	}
	
	public Warden updateWarden(int id, Warden warden) {
		String query = "select `id` from `hostels` where name = ?;";
		int hostelId = (int)jdbcTemplate.queryForObject(query,Integer.class, warden.getHostelName());
		try {
			query = "update `wardens` set `name` = ?, `email` = ?, `password` = ?, `phone_no` = ?, `hostel_id` = ? where `id` = ?;";
			jdbcTemplate.update(query, warden.getName(), warden.getEmail(), warden.getPassword(), warden.getPhoneNumber(), hostelId, id);
			query = "select wardens.id, wardens.name, `email` , `password`, `phone_no`, hostels.name from `wardens` inner join `hostels` where hostels.id = ? and wardens.email = ?";
			Warden addedWarden = jdbcTemplate.queryForObject(query, new WardenRowMapper(), hostelId, warden.getEmail());
			return addedWarden;
		}catch (Exception e) {
			return null;
		}
	}
	
	public Student addStudent(Student s) {
		String query="INSERT INTO `students` (`reg_no`, `password`, `name`, `semester`, `address`, `personal_mob`, `parent_mob`, `branch`, `room_no`, `hostel_id`, `email`, `gender`, `dob`, `adhaarcard_no`, `blackdots`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
		int res = jdbcTemplate.update(query, s.getRegistrationNo(),s.getPassword(),s.getName(),s.getSemester(),s.getAddress(),s.getPhoneNumber(),s.getParentPhoneNumber(),s.getBranch(),s.getRoomNo(),s.getHostelId(),s.getEmail(),s.getGender(),s.getDob(),s.getAadharCardNo(),s.getBlackdots());
		if(res == 1) {
			query = "SELECT * from `students` WHERE `reg_no` = ?;";
			Student addedStudent = jdbcTemplate.queryForObject(query, new StudentRowMapper(), s.getRegistrationNo());
			return addedStudent;
		}
		return null;
	}
	
	public List<Student> fetchStudentsByHostelId(int hostelId){
		String que="SELECT * from `students` WHERE `hostel_id` = ?;";
		List<Student> st=jdbcTemplate.query(que, new StudentRowMapper(),hostelId);
		return st;
	}
	
	public Student updateStudent(int regNo, Student s) {
		try {
			String query = "update `students` set `reg_no` = ? ,`password` = ? ,`name` = ?,`semester` = ?,`address` = ?,`personal_mob` = ? ,`parent_mob` =  ? ,`branch` = ? ,`room_no` = ?,`hostel_id` = ?,`email` = ?,`gender` = ?,`dob` = ?,`adhaarcard_no` = ? ,`blackdots` = ? where `reg_no` = ?;";
			jdbcTemplate.update(query, s.getRegistrationNo(),s.getPassword(),s.getName(),s.getSemester(),s.getAddress(),s.getPhoneNumber(),s.getParentPhoneNumber(),s.getBranch(),s.getRoomNo(),s.getHostelId(),s.getEmail(),s.getGender(),s.getDob(),s.getAadharCardNo(),s.getBlackdots(),regNo);
			query = "select * from 'students' where reg_no = ?";
			Student addedStudent = jdbcTemplate.queryForObject(query, new StudentRowMapper(), regNo);
			return addedStudent;
		}catch (Exception e) {
			return null;
		}
	}
}
