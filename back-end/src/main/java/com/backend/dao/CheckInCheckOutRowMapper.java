package com.backend.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.backend.pojo.CheckInCheckOut;

public class CheckInCheckOutRowMapper implements RowMapper<CheckInCheckOut>{

	@Override
	public CheckInCheckOut mapRow(ResultSet rs, int rowNum) throws SQLException {
		CheckInCheckOut checkInCheckOut = new CheckInCheckOut();
		return checkInCheckOut;
	}

}
