import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "../_utility_components/Button";
import {FILE_COMPLAINT,EDIT_DETAILS, PROFILE } from "../_constants/student_constants";
//import { fetchStudentByRegistrationNumber } from "../../_actions/student_actions";

const studentPage = (props) => {
   /* useEffect(() => {
        props.fetchStudentByRegistrationNumber();
    }, []);*/
    return (
        <div>
            <h1>Registration Number</h1>
            <Link to = "/students/:regNo/editDetails">
                <Button text = {EDIT_DETAILS} />
            </Link>
            <Link to = "/students/:regNo/fileComplaint">
                <Button text = {FILE_COMPLAINT} />
            </Link>
            <Link to = "/students/:regNo/profile">
                <Button text = {PROFILE} />
            </Link>
            <Outlet />
        </div>
    );
}

export default connect(null, {} )(studentPage);