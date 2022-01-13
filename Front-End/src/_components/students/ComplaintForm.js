import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { Button } from "../_utility_components/Button";
import InputField from "../_utility_components/InputField";

const ComplaintForm = (props) => {

  return (
    <div>
      <form className="row" onSubmit={props.handleSubmit(props.onSubmit)}>
        <div className="col-md-8">
          <Field name="complaint" component={InputField} label="COMPLAINT TO BE FILED:" />
        </div>
        <div className="col-md-4">
          <Button text="SUBMIT" />
        </div>
      </form>
    </div>
  );

};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.complaint) errors.complaint = "Enter a valid complaint";
  return errors;
};

const formWrapped = reduxForm({
  form: "COMPLAINT_FORM",
  validate,
})(ComplaintForm);

export default connect(null, {})(formWrapped);