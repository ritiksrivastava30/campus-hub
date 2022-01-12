import _ from "lodash";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchStudentByRegistrationNumber } from "../../_actions/student_actions";

const Profile = (props) => {

    return (
        <div className="container">
            <div className="card">
            {_.isEmpty(props.student) ? null :
                <div>
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
            }   
        </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { student : Object.values(state.students)[0] }
}
export default connect(mapStateToProps, { fetchStudentByRegistrationNumber })(Profile);