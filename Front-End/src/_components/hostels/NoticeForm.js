import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { Button } from "../_utility_components/Button";
import InputField from "../_utility_components/InputField";

const NoticeForm = (props) => {

  return (
    <div>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <Field name="notice" component={InputField} label="NOTICE TO BE ADDED:" />
        <Button text="ADD" />
      </form>
    </div>
  );

};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.notice) errors.notice = "Enter a valid notice";
  return errors;
};

/*const mapStateToProps = (state) => {
    return { hostels : state.hostel}
}*/

const formWrapped = reduxForm({
  form: "NOTICE_FORM",
  validate,
})(NoticeForm);

export default connect(null, {})(formWrapped);