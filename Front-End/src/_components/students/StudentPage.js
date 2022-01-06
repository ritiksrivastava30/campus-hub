import React, { useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { connect } from "react-redux";

import { Button } from "../_utility_components/Button";
import {FILE_COMPLAINT,EDIT_DETAILS, PROFILE } from "../_constants/student_constants";
import { fetchStudentByRegistrationNumber, resetStudents } from "../../_actions/student_actions";
import { resetStatus, resetLogin } from "../../_actions/utility_actions";

const StudentPage = (props) => {

    console.log(props.student);

    const params = useParams();
    const registrationNumber = params.regNo;

    useEffect(() => {
        props.resetStatus();
        props.fetchStudentByRegistrationNumber(registrationNumber);
    }, []);

    const reset = () => {
        props.resetLogin();
        props.resetStudents();
    }

    return (
        <div>
            {props.student == undefined ? <h1></h1> : <h1> {props.student.name} </h1>}
            <Link to = { `/students/${registrationNumber}/editDetails`} >
                <Button text = {EDIT_DETAILS} />
            </Link>
            <Link to = { `/students/${registrationNumber}/fileComplaint`} >
                <Button text = {FILE_COMPLAINT} />
            </Link>
            <Link to = { `/students/${registrationNumber}/profile`} >
                <Button text = {PROFILE} />
            </Link>
            <Link to = "/">
                <Button onClick = { reset } text = "LOG OUT" />
            </Link>
            <Outlet />
        </div>
    );
}

const mapStateToProps = (state) => {
    return { student : Object.values(state.students)[0] }
}

const actionCreators = {
    fetchStudentByRegistrationNumber, resetLogin, resetStatus, resetStudents
}
export default connect( mapStateToProps, actionCreators )(StudentPage);