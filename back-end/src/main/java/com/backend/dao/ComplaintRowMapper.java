package com.backend.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.backend.pojo.Complaint;

public class ComplaintRowMapper implements RowMapper<Complaint> {
	@Override
	public Complaint mapRow(ResultSet rs, int rowNum) throws SQLException {
		// TODO Auto-generated method stub
		Complaint complaint =new Complaint();
		complaint.setRegNo(rs.getInt(1));
		complaint.setName(rs.getString(2));
		complaint.setComplaint(rs.getString(3));
		complaint.setReply(rs.getString(4));
		complaint.setHostel_id(rs.getInt(5));
		return complaint;
	}
}
