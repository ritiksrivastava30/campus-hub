import { React, useEffect, useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { editStudent, fetchStudentByRegistrationNumber, resetStudents } from "../../_actions/student_actions";
import { fetchBranch, resetBranch } from "../../_actions/utility_actions";
import StudentForm from "./StudentForm";
import ErrorModal from "../_utility_components/ErrorModal";
import ShowStudent from "./ShowStudent";
import { useParams } from "react-router-dom";

const EditStudent = (props) => {

    const [ updatedStudent, setUpdatedStudent ] = useState({});

    const params = useParams();
    const registrationNumber = params.regNo;

    const student = Object.values(props.student);
    
    useEffect(() => {
        props.fetchStudentByRegistrationNumber(registrationNumber);
        props.fetchBranch();

        return () => {
            props.resetBranch();
            props.resetStudents();
        }

    }, []);

    const onSubmit = (formValues) => {
        props.editStudent(registrationNumber, formValues);
        setUpdatedStudent(formValues);
    }


    return (
        <div>
            { 
            props.status.status === "Success" ? 
                <ShowStudent title = "EDITED SUCCESSFULLY" student = { updatedStudent } /> : 
                <div>
                    <h1>EDIT STUDENT</h1>
                    { student.length == 1 ? 
                        <StudentForm initialValues = { student[0] } onSubmit={onSubmit} /> : 
                        null 
                    }
                    { props.status.status === "Error" ? <ErrorModal /> : null }
                </div>
            }
        </div>
    );

};

const mapStateToProps = (state) => {
    return { student : state.students, status : state.status }
}

const actionCreators = {
    editStudent, fetchStudentByRegistrationNumber, fetchBranch, resetBranch, resetStudents
}
export default connect( mapStateToProps, actionCreators )(EditStudent);