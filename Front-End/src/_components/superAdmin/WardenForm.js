import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { Button } from "../_utility_components/Button";
import InputField from "../_utility_components/InputField";

const WardenForm = (props) => {

    const hostels = Object.values(props.hostels);

    const renderOptions = () => {
        return hostels.map((hostel) => {
            return <option value = {hostel.name} key = {hostel.id}>{hostel.name}</option>
        });
    }

  return (
    <div>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <Field name="name" component={InputField} label="NAME" />
        <Field name="email" component={InputField} label="EMAIL ID" />
        <Field name="password" component={InputField} label="PASSWORD" />
        <Field name="phoneNumber" component={InputField} label="PHONE NUMBER" />
        <div>
          <label>HOSTEL</label>
            <Field name="hostelName" component="select">
              {renderOptions()}
            </Field>
        </div>
        <Button text="ADD" />
      </form>
    </div>
  );

};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.name) errors.name = "Enter a valid warden name";
  if (!formValues.email) errors.email = "Enter a valid email id";
  if (!formValues.password) errors.password = "Enter a valid password";
  if (!formValues.phoneNumber) errors.phoneNumber = "Enter a valid phoneNumber";
  if (!formValues.hostelName) errors.hostelName = "Select a valid hostel name";
  return errors;
};

const mapStateToProps = (state) => {
    return { hostels : state.hostel }
}

const formWrapped = reduxForm({
  form: "WARDEN_FORM",
  validate,
})(WardenForm);

export default connect(mapStateToProps, {})(formWrapped);