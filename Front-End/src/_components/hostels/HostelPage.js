import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "../_utility_components/Button";
import {resetStatus, resetLogin } from "../../_actions/utility_actions";
import { fetchStudentsOfHostel, resetStudents } from "../../_actions/student_actions";
import { ADD_STUDENT,SHOW_STUDENTS,SHOW_COMPLAINTS,ADD_NOTICE, SEARCH_STUDENT, MESS_MENU } from "../_constants/hostel_constants";
import "../css/style.css";

const HostelPage = (props) => {
    
    const params = useParams();
    const hostelName = params.hostelName;

    useEffect(() => {
        props.resetStatus();
    }, []);

    const reset = () => {
        localStorage.clear();
        props.resetStudents();
        props.resetLogin();
    }

    return (
        <div className="bgimg">
                <div className="navbar">
                <h1 navbar-brand mb-0 h1>{hostelName}</h1>
                <Link to = {`/hostels/${hostelName}/addStudent`}>
                    <Button text = {ADD_STUDENT} />
                </Link>
                <Link to = {`/hostels/${hostelName}/showStudents`}>
                    <Button text = {SHOW_STUDENTS} />
                </Link>
                <Link to = {`/hostels/${hostelName}/showComplaints`}>
                    <Button text = {SHOW_COMPLAINTS} />
                </Link>
                <Link to = {`/hostels/${hostelName}/searchStudent`}>
                    <Button text = {SEARCH_STUDENT} />
                </Link>
                <Link to = {`/hostels/${hostelName}/addNotice`}>
                    <Button text = {ADD_NOTICE} />
                </Link>
                <Link to = {`/hostels/${hostelName}/messMenu`}>
                    <Button text = {MESS_MENU} />
                </Link>
                <Link to = "/">
                    <Button onClick = { reset } text = "LOG OUT" />
                </Link>
                </div>
            <Outlet />
        </div>
    );
}
const actionCreators = {
    resetStudents, resetStatus, resetLogin, fetchStudentsOfHostel
}

export default connect(null, actionCreators )(HostelPage);