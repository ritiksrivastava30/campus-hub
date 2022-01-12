import React, { useEffect } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import _ from "lodash";
import { useParams, Link } from "react-router-dom";

import { Button } from "../_utility_components/Button";
import InputField from "../_utility_components/InputField";
import { replyComplaint,resetComplaints} from "../../_actions/hostel_actions";
//import { resetStatus } from "../../_actions/utility_actions";
//import ShowStudent from "./ShowStudent";
//import ErrorModal from "../_utility_components/ErrorModal";

const ReplyComplaint = (props) => {

    const params = useParams();
    const hostelName = params.hostelName;

    useEffect(() => {
        return () => props.resetComplaints();
    }, []);
    
    const onSubmit = (formValues) => {
        //props.resetStudents();
        props.replyComplaint(formValues);
    } 

    return (
        <div>
            <form onSubmit = { props.handleSubmit(onSubmit) }>
                <Field name = "regNo" component = { InputField } label = "Registration Number" />
                <Field name = "reply" component = { InputField } label = "Reply:" />
                <Button text = "Send" />
            </form>
        </div>
    )

}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.regNo) errors.regNo = "Enter a valid registration number";
    if(!formValues.reply) errors.reply = "Enter a valid reply";
    return errors; 
}

const formWrapped = reduxForm({
    form : "REPLY_COMPLAINT",
    validate
})(ReplyComplaint);

const actionCreators = {
    replyComplaint, resetComplaints
}

export default connect (null, actionCreators )(formWrapped);