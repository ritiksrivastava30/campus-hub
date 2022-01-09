package com.backend.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.backend.pojo.Day;

public class MessMenuRowMapper implements RowMapper<Day>{

	@Override
	public Day mapRow(ResultSet rs, int rowNum) throws SQLException {

		Day d = new Day();
		d.setDayName(rs.getString(1));
		d.setBreakfast(rs.getString(2));
		d.setLunch(rs.getString(3));
		d.setDinner(rs.getString(4));
		return d;
	}

}