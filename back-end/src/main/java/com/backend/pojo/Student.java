package com.backend.pojo;

public class Student {
	private int registrationNumber;
	private String password;
	private String name;
	private int semester;
	private String address;
	private String phoneNumber;
	private String parentPhoneNumber;
	private String branch;
	private int roomNo;
	private String hostelName;
	private String email;
	private String gender;
	private String dob;
	private String aadharCardNo;
	private int blackdots;
	public Student() {
		super();
	}
	public Student(int registrationNumber, String password, String name, int semester, String address, String phoneNumber,
			String parentPhoneNumber, String branch, int roomNo, String hostelName, String email, String gender, String dob,
			String aadharCardNo, int blackdots) {
		super();
		this.registrationNumber = registrationNumber;
		this.password = password;
		this.name = name;
		this.semester = semester;
		this.address = address;
		this.phoneNumber = phoneNumber;
		this.parentPhoneNumber = parentPhoneNumber;
		this.branch = branch;
		this.roomNo = roomNo;
		this.hostelName = hostelName;
		this.email = email;
		this.gender = gender;
		this.dob = dob;
		this.aadharCardNo = aadharCardNo;
		this.blackdots = blackdots;
	}
	public int getRegistrationNumber() {
		return registrationNumber;
	}
	public void setRegistrationNo(int registrationNumber) {
		this.registrationNumber = registrationNumber;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getSemester() {
		return semester;
	}
	public void setSemester(int semester) {
		this.semester = semester;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getParentPhoneNumber() {
		return parentPhoneNumber;
	}
	public void setParentPhoneNumber(String parentPhoneNumber) {
		this.parentPhoneNumber = parentPhoneNumber;
	}
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	public int getRoomNo() {
		return roomNo;
	}
	public void setRoomNo(int roomNo) {
		this.roomNo = roomNo;
	}
	
	public String getHostelName() {
		return hostelName;
	}
	public void setHostelName(String hostelName) {
		this.hostelName = hostelName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getAadharCardNo() {
		return aadharCardNo;
	}
	public void setAadharCardNo(String aadharCardNo) {
		this.aadharCardNo = aadharCardNo;
	}
	public int getBlackdots() {
		return blackdots;
	}
	public void setBlackdots(int blackdots) {
		this.blackdots = blackdots;
	}
	@Override
	public String toString() {
		return "Student [registrationNo=" + registrationNumber + ", password=" + password + ", name=" + name + ", semester="
				+ semester + ", address=" + address + ", phoneNumber=" + phoneNumber + ", parentPhoneNumber="
				+ parentPhoneNumber + ", branch=" + branch + ", roomNo=" + roomNo + ", hostelName=" + hostelName
				+ ", email=" + email + ", gender=" + gender + ", dob=" + dob + ", aadharCardNo=" + aadharCardNo
				+ ", blackdots=" + blackdots + "]";
	}
}
