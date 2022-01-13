package com.backend.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.backend.dao.rowmappers.BranchRowMapper;
import com.backend.pojo.Branch;

@Repository
public class UtilityDao extends StarterDao{

	public List<Branch> fetchBranch(){
		String query = "SELECT * FROM `branch`;";
		try {
			List<Branch> branches = jdbcTemplate.query(query, new BranchRowMapper());  
			return branches;
		}
		catch (Exception e) {
			return null;
		}
	}
	
}
