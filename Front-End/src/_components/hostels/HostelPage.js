import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "../_utility_components/Button";
import { fetchStudentsOfHostel, resetStudents } from "../../_actions/student_actions";
import {resetStatus, resetLogin } from "../../_actions/utility_actions";
import {ADD_STUDENT,EDIT_STUDENT,ALL_STUDENTS,COMPLAINTS} from "../_constants/hostel_constants";

const HostelPage = (props) => {
    
    const params = useParams();
    const hostelName = params.hostelName;

    useEffect(() => {
        props.resetStatus();
        props.fetchStudentsOfHostel(hostelName);
    }, []);

    const reset = () => {
        props.resetStudents();
        props.resetLogin();
    }

    return (
        <div>
            <h1> {hostelName}</h1>
            <Link to = {`/hostels/${hostelName}/addStudent`}>
                <Button text = {ADD_STUDENT} />
            </Link>
            <Link to = {`/hostels/${hostelName}/allStudents`}>
                <Button text = {ALL_STUDENTS} />
            </Link>
            <Link to = {`/hostels/${hostelName}/editStudent`}>
                <Button text = {EDIT_STUDENT} />
            </Link>
            <Link to = {`/hostels/${hostelName}/complaints`}>
                <Button text = {COMPLAINTS} />
            </Link>
            <Link to = "/">
                <Button onClick = { reset } text = "LOG OUT" />
            </Link>
            <Outlet />
        </div>
    );
}
const actionCreators = {
    fetchStudentsOfHostel, resetStudents, resetStatus, resetLogin
}

export default connect(null, actionCreators )(HostelPage);