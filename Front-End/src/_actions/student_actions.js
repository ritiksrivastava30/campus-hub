import _ from "lodash";
import { ADD_STUDENT, EDIT_STUDENT, FETCH_STUDENT, FETCH_STUDENTS,FETCH_STUDENTS_OF_HOSTEL, RESET_STUDENTS } from "./_types/student_types";
import { LOGIN_STUDENT } from "./_types/login_types";

import api from "../apis/main";

export const loginStudent = (formValues) => async dispatch => {
    const response = await api.get(`/students/${formValues.userName}/${formValues.password}`);
    if(response.data === "error"){
        dispatch({ type : "STATUS", payload : { status:"Error", description : "Check your credentials" } }); 
        return; 
    }

    dispatch({ type : "STATUS", payload : { status:"Success", description : `${response.data}` } }); 
    dispatch({ type : LOGIN_STUDENT, payload : response.data });
}

export const fetchStudents = () => async dispatch => {
    const response = await api.get("/students");
    
    dispatch({ type : FETCH_STUDENTS, payload : response.data });
}

export const fetchStudentsOfHostel = (hostelName) => async dispatch => {
    const response = await api.get(`/students/hostel/${hostelName}`);

    dispatch({ type : FETCH_STUDENTS_OF_HOSTEL, payload : response.data });
}

export const addStudent = (formValues) => async dispatch => {
    const response = await api.post("/students", formValues);
    
    if(_.isEmpty(response.data)) {
        dispatch({ type : "STATUS", payload : { status:"Error", description : "Check the credentials." } }); 
        return; 
    }

    dispatch({ type : "STATUS", payload : { status:"Success", description : `${response.data.registrationNumber}` } });
    dispatch({ type : ADD_STUDENT, payload : response.data });
}

export const editStudent = (registrationNumber, formValues) => async dispatch => {
    const response = await api.patch(`/students/${registrationNumber}`, formValues);

    if(_.isEmpty(response.data)) {
        dispatch({ type : "STATUS", payload : { status:"Error", description : "A student with same registration number already exists." } }); 
        return; 
    }

    dispatch({ type : "STATUS", payload : { status:"Success", description : `${response.data.registrationNumber}` } }); 
    dispatch({ type : EDIT_STUDENT, payload : response.data });
}

export const fetchStudentByRegistrationNumber = (registrationNumber) => async dispatch => {
    const response = await api.get(`/students/${registrationNumber}`);
    
    dispatch({ type : FETCH_STUDENT, payload : response.data });
}

export const resetStudents = () => async dispatch => {
    dispatch ({ type : RESET_STUDENTS, payload : {} });
}
