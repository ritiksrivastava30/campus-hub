import React, { useEffect } from "react";
import { connect } from "react-redux";

import { resetStatus } from "../../_actions/utility_actions";

const ShowStudent = (props) => {

    useEffect(() => {
        return () => props.resetStatus();
    }, []);

    return (
        <div>
            <h3> { props.title } </h3>
            <h2> Registration Number : { props.student.registrationNumber } </h2>
            <h2> Name : { props.student.name } </h2>
            <h2> Email Id: { props.student.email } </h2>
            <h2> Semester : { props.student.semester } </h2>
            <h2> Address : { props.student.address } </h2>
            <h2> Phone Number : { props.student.phoneNumber } </h2>
            <h2> Parent Phone Number : {props.student.parentPhoneNumber } </h2>
            <h2> Branch : { props.student.branch } </h2>
            <h2> Hostel Name : { props.student.hostelName } </h2>
            <h2> Gender : { props.student.gender } </h2>
            <h2> Date of Birth : {props.student.dob } </h2>
            <h2> Aadhar Card Number : { props.student.aadharCardNo } </h2>
            <h2> Black Dots : { props.student.blackdots } </h2>
            <h2> Room Number : { props.student.roomNo } </h2>
        </div>
    );

}

export default connect(null, { resetStatus })(ShowStudent);