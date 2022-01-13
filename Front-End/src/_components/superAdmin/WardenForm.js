import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { Button } from "../_utility_components/Button";
import InputField from "../_utility_components/InputField";
import { isNumericValue, isEmail, isPassword } from "../../_helpers/validation";

const WardenForm = (props) => {

    const hostels = Object.values(props.hostels);

    const renderOptions = () => {
        return hostels.map((hostel) => {
            return <option value = {hostel.name} key = {hostel.id}>{hostel.name}</option>
        });
    }

  return (
    <div>
      <form className="row" onSubmit={props.handleSubmit(props.onSubmit)}>
      <div className="col-md-6 ">
        <Field name="name" component={InputField} label="NAME" />
      </div>
      <div className="col-md-6 ">
        <Field name="email" component={InputField} label="EMAIL ID" />
        </div>
        <div className="col-md-6 ">
        <Field name="password" component={InputField} label="PASSWORD"  type = "password"  />
        </div>
        <div className="col-md-6 ">
        <Field name="phoneNumber" component={InputField} label="PHONE NUMBER" />
        </div>
        <div className="col-md-6 ">
          <label>HOSTEL</label>
            <Field name="hostelName" component="select">
              {renderOptions()}
            </Field>
        </div>
        <div className="col-md-6 ">
        <Button text="ADD" />
        </div>
      </form>
    </div>
  );

};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.name) errors.name = "Enter a valid warden name";
  if (!isEmail(formValues.email)) errors.email = "Enter a valid email id";
  if (!isPassword(formValues.password)) errors.password = "Password must constain lowecase, uppercase, digit and a special character and length should atleast be 8.";
  if (!isNumericValue(formValues.phoneNumber, 15)) errors.phoneNumber = "Enter a valid phoneNumber";
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