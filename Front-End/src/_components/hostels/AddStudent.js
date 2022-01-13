import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import StudentForm from "./StudentForm";
import ShowStudent from "./ShowStudent";
import { addStudent } from "../../_actions/student_actions";
import { fetchBranch, resetBranch } from "../../_actions/utility_actions";
import ErrorModal from "../_utility_components/ErrorModal";

const AddStudent = (props) => {

    const [ student, setStudent ] = useState({});

    useEffect(() => {
        props.fetchBranch();

        return () => props.resetBranch();
    }, [])

    const params = useParams();
    const hostelName = params.hostelName;
    
    const onSubmit = (formValues) => {
        props.addStudent(formValues);
        setStudent(formValues);
    }

    return (
        <div className="container">
            <div className="card">
            {
            props.status.status === "Success" ? 
                <ShowStudent title = "Student Added Successfully" student = {student} /> :
                <div> 
                    <h1>ADD STUDENT</h1>
                    <StudentForm onSubmit={onSubmit} initialValues={{hostelName : `${hostelName}`, branch : "Information Technology", gender : "Male" }} />
                    {props.status.status === "Error" ? <ErrorModal /> : null }
                </div>
            }
        </div>
        </div>
    );

};

const mapStateToProps = (state) => {
    return { status : state.status }
}

const actionCreators = {
    addStudent, fetchBranch, resetBranch
}
export default connect( mapStateToProps, actionCreators )(AddStudent);