import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { Button } from "../_utility_components/Button";
import InputField from "../_utility_components/InputField";

const ComplaintForm = (props) => {

  return (
    <div>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <Field name="complaint" component={InputField} label="COMPLAINT TO BE FILED:" />
        <Button text="SUBMIT" />
      </form>
    </div>
  );

};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.notice) errors.notice = "Enter a valid complaint";
  return errors;
};

/*const mapStateToProps = (state) => {
    return { hostels : state.hostel}
}*/

const formWrapped = reduxForm({
  form: "COMPLAINT_FORM",
  validate,
})(ComplaintForm);

export default connect(null, {})(formWrapped);