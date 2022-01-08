import React, { useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "../_utility_components/Button";
import { fetchStudentByRegistrationNumber, resetStudents, fetchNotices, resetNotices } from "../../_actions/student_actions";
import { resetStatus, resetLogin } from "../../_actions/utility_actions";
import {FILE_COMPLAINT,EDIT_DETAILS, PROFILE, NOTICES } from "../_constants/student_constants";

const StudentPage = (props) => {

    const params = useParams();
    const registrationNumber = params.regNo;

    useEffect(() => {
        props.resetStatus();
        props.fetchStudentByRegistrationNumber(registrationNumber);
        props.fetchNotices(registrationNumber);
    }, []);

    const reset = () => {
        props.resetLogin();
        props.resetStudents();
        props.resetNotices();
    }

    return (
        <div>
            {props.student == undefined ? <h1></h1> : <h1> {props.student.name} </h1>}
            <Link to = { `/students/${registrationNumber}/fileComplaint`} >
                <Button text = {FILE_COMPLAINT} />
            </Link>
            <Link to = {`/students/${registrationNumber}/editDetails`}>
                <Button text = {EDIT_DETAILS} />
            </Link>
            <Link to = { `/students/${registrationNumber}/profile`} >
                <Button text = {PROFILE} />
            </Link>
            <Link to = { `/students/${registrationNumber}/notices`}>
                <Button text = {NOTICES} />
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
    fetchStudentByRegistrationNumber, resetLogin, resetStatus, resetStudents,fetchNotices, resetNotices
}
export default connect( mapStateToProps, actionCreators )(StudentPage);