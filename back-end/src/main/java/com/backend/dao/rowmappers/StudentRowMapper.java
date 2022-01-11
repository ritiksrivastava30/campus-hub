package com.backend.dao.rowmappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.backend.pojo.Student;

public class StudentRowMapper implements RowMapper<Student>{

	@Override
	public Student mapRow(ResultSet rs, int rowNum) throws SQLException {
		
		Student s = new Student();
		s.setRegistrationNo(rs.getInt(1));
		s.setPassword(rs.getString(2));
		s.setName(rs.getString(3));
		s.setSemester(rs.getInt(4));
		s.setAddress(rs.getString(5));
		s.setPhoneNumber(rs.getString(6));
		s.setParentPhoneNumber(rs.getString(7));
		s.setBranch(rs.getString(8));
		s.setRoomNo(rs.getInt(9));
		s.setHostelName(rs.getString(10));
		s.setEmail(rs.getString(11));
		s.setGender(rs.getString(12));
		s.setDob(rs.getString(13));
		s.setAadharCardNo(rs.getString(14));
		s.setBlackdots(rs.getInt(15));
		return s;
	}

}
