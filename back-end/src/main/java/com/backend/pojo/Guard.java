package com.backend.pojo;

public class Guard {
	private int id;
	private String name;
	private String email;
	private String password;
	private int hostel_id;
	private String phone_no;
	
	public Guard(int id, String name, String email, String password, int hostel_id, String phone_no) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.hostel_id = hostel_id;
		this.phone_no = phone_no;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getHostel_id() {
		return hostel_id;
	}

	public void setHostel_id(int hostel_id) {
		this.hostel_id = hostel_id;
	}

	public String getPhone_no() {
		return phone_no;
	}

	public void setPhone_no(String phone_no) {
		this.phone_no = phone_no;
	}
}
