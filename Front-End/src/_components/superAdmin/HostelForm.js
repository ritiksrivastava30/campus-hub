import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import InputField from "../_utility_components/InputField";
import { Button } from "../_utility_components/Button";

const HostelForm = (props) => {
  return (
    <div>
      <form className="row" onSubmit={props.handleSubmit(props.onSubmit)}>
        <div className="col-md-4">
        <Field
          name="name"
          component={InputField}
          label="NAME OF HOSTEL"
        />
        </div>
        <div className="col-md-3">
        <Field name="capacity" component={InputField} label="NUMBER OF ROOMS" />
        </div>
        <div className="col-md-3">
            <label>Is Active?</label>
            <label> <Field name = "status" component = "input" type="radio" value= "1" checked="checked" /> Yes </label>
            <label> <Field name = "status" component = "input" type = "radio" value = "0" /> No </label>
        </div>
        <div className="col-md-2">
        <Button text="ADD" />
        </div>
      </form>
    </div>
  );
};

const validate = (formValues) => {
    const errors = {};
    if(!formValues.name) errors.name = "Enter a valid hostel name";
    if(!formValues.capacity) errors.capacity = "Enter a valid capacity";
    if(!formValues.status) errors.status = "Select a valid status";
    return errors;
  };

export default reduxForm({
  form: "HOSTEL_FORM",
  validate
})(HostelForm);