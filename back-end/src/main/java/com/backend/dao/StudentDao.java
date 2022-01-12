package com.backend.dao;

import java.util.List;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.backend.pojo.Notice;
import com.backend.pojo.Student;
import com.backend.pojo.Complaint;

@Repository
public class StudentDao extends StarterDao{
	
	public String studentLogin(String reg_no,String password) {
		String query = "SELECT `reg_no` FROM `students` WHERE `reg_no` = '" +Integer.parseInt(reg_no)+ "' AND `password` = '" + password +"';";
		String ss="";
		try {
			ss = (String)jdbcTemplate.queryForObject(query,String.class);
		}
		catch(EmptyResultDataAccessException e) {
			ss = "error";
		}
		return ss;
	}
	
	public Student addStudent(Student s) {
		int branch_id = getBranchId(s.getBranch());
		int hostel_id = getHostelId(s.getHostelName());
		String query = "INSERT INTO `students` (`reg_no`, `password`, `name`, `semester`, `address`, `personal_mob`, `parent_mob`, `branch_id`, `room_no`, `hostel_id`, `email`, `gender`, `dob`, `adhaarcard_no`, `blackdots`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
		try {
			jdbcTemplate.update(query, s.getRegistrationNumber(),s.getPassword(),s.getName(),s.getSemester(),s.getAddress(),s.getPhoneNumber(),s.getParentPhoneNumber(), branch_id, s.getRoomNo(), hostel_id, s.getEmail(),s.getGender(),s.getDob(),s.getAadharCardNo(),s.getBlackdots());
			return fetchStudentByRegistrationNumber(s.getRegistrationNumber());
		}catch(Exception e) {
			return null;
		}
	}
	
	public List<Student> fetchStudentsByHostelName(String hostelName){
		int hostelId = getHostelId(hostelName);
		String query = "SELECT `reg_no`, `password`, students.name, `semester`, `address`, `personal_mob`, `parent_mob`, branch.name, `room_no`, hostels.name, `email`, `gender`, `dob`, `adhaarcard_no`, `blackdots` FROM `students` join `branch` join `hostels` WHERE students.branch_id = branch.id AND students.hostel_id = hostels.id AND hostels.id = ?;";
		try {
			List<Student> students = jdbcTemplate.query(query, new StudentRowMapper(), hostelId);
			
			return students;
		}
		catch(Exception e) {
			return null;
		}
	}
	
	public Complaint addComplaint(int regNo, String complaint) {
		System.out.println("In Complaint");
		String query = "select `hostel_id` from `students` where reg_no = ?;";
		int hid = (int)jdbcTemplate.queryForObject(query,Integer.class, regNo);
		query="select `name` from `students` where reg_no = ?;";
		String name = (String)jdbcTemplate.queryForObject(query,String.class, regNo);
		System.out.println(hid+" "+name);
		//String reply=null;
		query = "INSERT INTO `complaints`(`regNo`,`name`,`complaint`,  `hostel_id`) values (?, ?, ?, ?);";
		try {
			jdbcTemplate.update(query, regNo,name,complaint,hid);
			query = "SELECT * from `complaints` WHERE `regNo` = ?;";
			RowMapper<Complaint> rowMapper = new ComplaintRowMapper();
			Complaint addedComplaint = jdbcTemplate.queryForObject(query, rowMapper, regNo);
			System.out.println("complaint added");
			return addedComplaint;
		}catch(Exception e) {
			return null;
		}
	}
	
	public List<Notice> fetchNotices(int regNo){
		String que = "select `hostel_id` from `students` where reg_no = ?;";
		int id = (int)jdbcTemplate.queryForObject(que,Integer.class, regNo);
		que="SELECT * from `notices` WHERE `hostel_id` = ?;";
		List<Notice> st=jdbcTemplate.query(que, new NoticeRowMapper(),id);
		return st;
	}
	
	public Complaint showReply(int regNo){
		String que = "SELECT `regNo`, `name`, `complaint`, `reply` ,`hostel_id` FROM `complaints` WHERE `regNo`=? ;";
	    Complaint st=jdbcTemplate.queryForObject(que, new ComplaintRowMapper(),regNo);
	    que="DELETE FROM `complaints` WHERE `regNo`=?;";
	    jdbcTemplate.update(que,regNo);
		return st;
	}
	
	public Student updateStudent(int registrationNumber, Student s) {
		int branch_id = getBranchId(s.getBranch());
		int hostel_id = getHostelId(s.getHostelName());
		String query = "update `students` set `reg_no` = ? ,`password` = ? ,`name` = ?,`semester` = ?,`address` = ?,`personal_mob` = ? ,`parent_mob` =  ? ,`branch_id` = ? ,`room_no` = ?,`hostel_id` = ?,`email` = ?,`gender` = ?,`dob` = ?,`adhaarcard_no` = ? ,`blackdots` = ? where `reg_no` = ?;";

		try {
			jdbcTemplate.update(query, s.getRegistrationNumber() ,s.getPassword() ,s.getName(), s.getSemester(), s.getAddress(), s.getPhoneNumber(), s.getParentPhoneNumber(), branch_id, s.getRoomNo(), hostel_id, s.getEmail(), s.getGender(), s.getDob(), s.getAadharCardNo(), s.getBlackdots(), registrationNumber);
			return fetchStudentByRegistrationNumber(s.getRegistrationNumber());
		}catch (Exception e) {
			return null;
		}
	}
	
	public Student fetchStudentByRegistrationNumber(int registrationNumber) {
		String query = "SELECT `reg_no`, `password`, students.name, `semester`, `address`, `personal_mob`, `parent_mob`, branch.name, `room_no`, hostels.name, `email`, `gender`, `dob`, `adhaarcard_no`, `blackdots` FROM `students` join `branch` join `hostels` WHERE `reg_no` = ? AND students.branch_id = branch.id AND students.hostel_id = hostels.id;";
		try {
			Student student = jdbcTemplate.queryForObject(query, new StudentRowMapper(), registrationNumber);
			return student;
		}
		catch(EmptyResultDataAccessException e) {
			return null;
		}
	}
	
	public Student fetchStudentByRegistrationNumberOfSpecificHostel(int registrationNumber) {
		String query = "SELECT `reg_no`, `password`, students.name, `semester`, `address`, `personal_mob`, `parent_mob`, branch.name, `room_no`, hostels.name, `email`, `gender`, `dob`, `adhaarcard_no`, `blackdots` FROM `students` join `branch` join `hostels` WHERE `reg_no` = ? AND students.branch_id = branch.id AND students.hostel_id = hostels.id;";
		try {
			Student student = jdbcTemplate.queryForObject(query, new StudentRowMapper(), registrationNumber);
			return student;
		}
		catch(EmptyResultDataAccessException e) {
			return null;
		}
	}
	
	public List<Student> fetchStudents(){
		String query = "SELECT `reg_no`, `password`, students.name, `semester`, `address`, `personal_mob`, `parent_mob`, branch.name, `room_no`, hostels.name, `email`, `gender`, `dob`, `adhaarcard_no`, `blackdots` FROM `students` join `branch` join `hostels` WHERE students.branch_id = branch.id AND students.hostel_id = hostels.id;";
		try {
			List<Student> students = jdbcTemplate.query(query, new StudentRowMapper());
			return students;
		}catch (Exception e) {
			return null;
		}
	}

	public int getBranchId(String branchName) {
		String query = "SELECT `id` FROM `branch` where `name` = ?;";
		int branch_id = (int)jdbcTemplate.queryForObject(query, Integer.class, branchName);
		return branch_id;
	}
	
	public int getHostelId(String hostelName) {
		String query = "SELECT `id` FROM `hostels` where `name` = ?;";
		int hostel_id = (int)jdbcTemplate.queryForObject(query, Integer.class, hostelName);
		return hostel_id;
	}
	
}
