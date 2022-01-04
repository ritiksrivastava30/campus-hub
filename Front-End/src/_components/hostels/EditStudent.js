import { React, useEffect } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { editStudent } from "../../_actions/student_actions";
import StudentForm from "./StudentForm";
import ErrorModal from "../_utility_components/ErrorModal";
import ShowStudent from "./ShowStudent";

const EditStudent = (props) => {

    const onSubmit = (formValues) => {
        props.editStudent(props.student.regNo, formValues);
    }

    return (
        <div>
            { 
            props.status.status === "Success" ? 
                <ShowStudent title = "EDITED SUCCESSFULLY" student = {props.student } /> : 
                //console.log("edited successfully"):
                <div>
                    <h1>EDIT STUDENT</h1>
                    <StudentForm initialValues={props.student} onSubmit={onSubmit} />
                    { props.status.status === "Error" ? <ErrorModal /> : null }
                </div>
            }
        </div>
    );

};

const mapStateToProps = (state) => {
    const id = window.location.pathname.split("/")[3];
    const student = Object.values(state.student).filter((student) => {
        return student.regNo == id
    })
    return { student : student[0], status : state.status };
}

export default connect(mapStateToProps, { editStudent })(EditStudent);