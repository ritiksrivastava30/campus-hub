import React, { useEffect } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Field } from "redux-form";

import InputField from "../_utility_components/InputField";
import { Button } from "../_utility_components/Button";
import { checkIn, checkOut } from "../../_actions/checkin_checkout_actions";
import ErrorModal from "../_utility_components/ErrorModal";
import { resetStatus } from "../../_actions/utility_actions";

const CheckInCheckOut = (props) => {

    useEffect(() => {
        if(props.status.status === "Success") props.resetStatus();
    }, [ props.status ]);

    const check_type = window.location.pathname.split("/")[3];
    const hostelName = window.location.pathname.split("/")[2];

    const onSubmit = ( formValues ) => {
        if(check_type == "checkIn") props.checkIn(hostelName, formValues.registrationNumber);
        else if(check_type == "checkOut") props.checkOut(hostelName, formValues.registrationNumber);
        props.reset();
    }

    return (
        <div className="container">
            <div className="card">
            <form className="row" onSubmit = { props.handleSubmit(onSubmit) }>
                <div className="col-md-11">
                <Field name = "registrationNumber" component = {InputField} label = "Registration Number" />
                </div>
                <div className="col-md-1">
                <Button text = "ENTER" />
                </div>
                { props.status.status === "Error" ? <ErrorModal /> : null }
            </form>
        </div>
        </div>
    );
}


const validate = ( formValues ) => {
    const errors = {};
    if(!formValues.registrationNumber) errors.registrationNumber = "Enter a valid registration number";
    return errors;
}

const actionCreators = {
    checkIn, checkOut, resetStatus
}

const mapStateToProps = (state) => {
    return { status : state.status }
}

const formWrapped = reduxForm({
    form : "CHECK_IN_CHECK_OUT_FORM",
    validate
})(CheckInCheckOut);

export default connect( mapStateToProps, actionCreators )(formWrapped);