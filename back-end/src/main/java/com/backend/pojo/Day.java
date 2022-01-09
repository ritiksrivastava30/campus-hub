package com.backend.pojo;

public class Day {
	private String dayName;
	private String breakfast;
	private String lunch;
	private String dinner;
	public Day() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getDayName() {
		return dayName;
	}
	public void setDayName(String dayName) {
		this.dayName = dayName;
	}
	public String getBreakfast() {
		return breakfast;
	}
	public void setBreakfast(String breakfast) {
		this.breakfast = breakfast;
	}
	public String getLunch() {
		return lunch;
	}
	public void setLunch(String lunch) {
		this.lunch = lunch;
	}
	public String getDinner() {
		return dinner;
	}
	public void setDinner(String dinner) {
		this.dinner = dinner;
	}
	@Override
	public String toString() {
		return "Day [dayName=" + dayName + ", breakfast=" + breakfast + ", lunch=" + lunch + ", dinner=" + dinner + "]";
	}
}
