package com.backend.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.backend.dao.GuardDao;
import com.backend.pojo.Guard;

@Service
public class GuardService {
	
	@Autowired
	GuardDao guardDao;
	
	public String guardLogin(String id, String password) {
		return guardDao.guardLogin(id, password);
	}

	public Guard addGuard(Guard guard) {
		return guardDao.addGuard(guard);
	}

	public Guard updateGuard(int id, Guard guard) {
		return guardDao.updateGuard(id, guard);
	}

	public List<Guard> fetchGuards() {
		return guardDao.fetchGuards();
	}

}
