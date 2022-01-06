package com.backend.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.backend.pojo.Branch;

public class BranchRowMapper implements RowMapper<Branch>{

	@Override
	public Branch mapRow(ResultSet rs, int rowNum) throws SQLException {
		Branch branch = new Branch();
		branch.setId(rs.getInt(1));
		branch.setName(rs.getString(2));
		return branch;
	}
	
}
