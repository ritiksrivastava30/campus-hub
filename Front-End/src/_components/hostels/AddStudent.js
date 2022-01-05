import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import StudentForm from "./StudentForm";
import { addStudent } from "../../_actions/student_actions";

const AddStudent = (props) => {

    const params = useParams();
    console.log(params);
    
    const onSubmit = (formValues) => {
        props.addStudent(formValues);
    }

    return (
        <div>
            <h1>ADD STUDENT</h1>
            <StudentForm onSubmit={onSubmit} />
        </div>
    );

};

export default connect( null, { addStudent } )(AddStudent);