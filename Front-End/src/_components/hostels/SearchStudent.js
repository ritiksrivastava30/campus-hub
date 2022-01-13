import React, { useEffect } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import _ from "lodash";
import { useParams, Link } from "react-router-dom";

import { Button } from "../_utility_components/Button";
import InputField from "../_utility_components/InputField";
import { fetchStudentByRegistrationNumberOfSpecificHostel, resetStudents } from "../../_actions/student_actions";
import { resetStatus } from "../../_actions/utility_actions";
import ShowStudent from "./ShowStudent";
import ErrorModal from "../_utility_components/ErrorModal";

import { isNumericValue } from "../../_helpers/validation";

const SearchStudent = (props) => {

    const params = useParams();
    const hostelName = params.hostelName;

    useEffect(() => {
        return () => props.resetStudents();
    }, []);
    
    const onSubmit = (formValues) => {
        props.resetStudents();
        props.fetchStudentByRegistrationNumberOfSpecificHostel(formValues.registrationNumber, hostelName)
    } 

    return (
        <div className="container">
            <div className="card">            
            <form className="row" onSubmit = { props.handleSubmit(onSubmit) }>
                <div className="col-md-8">
                <Field name = "registrationNumber" component = { InputField } label = "Registration Number" />
                </div>
                <div className="col-md-4">
                <Button text = "Search" />
                </div>
            </form>
            { props.status.status === "Error" ? <ErrorModal /> : null }
            { _.isEmpty(props.student) ? null : 
                <div>
                    <ShowStudent student = { props.student } />
                    <Link to = {`/hostels/${hostelName}/editStudent/${props.student.registrationNumber}`} >
                        <Button text = "EDIT" />
                    </Link>
                </div>
            }
        </div>
        </div>
    )

}

const validate = (formValues) => {
    const errors = {};
    if(!isNumericValue(formValues.registrationNumber, 10)) errors.registrationNumber = "Enter a valid registration number";
    return errors; 
}

const mapStateToProps = (state) => {
    return { student : Object.values(state.students)[0], status : state.status }
}

const formWrapped = reduxForm({
    form : "SEARCH_STUDENT_FORM",
    validate
})(SearchStudent);

const actionCreators = {
    fetchStudentByRegistrationNumberOfSpecificHostel, resetStatus, resetStudents
}

export default connect (mapStateToProps, actionCreators )(formWrapped);