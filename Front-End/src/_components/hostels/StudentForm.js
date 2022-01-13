import React, { useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { Button } from "../_utility_components/Button";
import InputField from "../_utility_components/InputField";
import { isNumericValue, isEmail, isPassword } from "../../_helpers/validation";

const StudentForm = (props) => {

  const allbranch = Object.values(props.allbranch);

  const renderBranchOptions = () => {  
    return allbranch.map((branch) => {
        return <option value = {branch.name} key = {branch.id}>{branch.name}</option>
    });
  }

  return (

    <div>
      <form className="row" onSubmit = { props.handleSubmit(props.onSubmit ) }>
      <div className="col-md-6 ">
        <Field name="registrationNumber" component={InputField} label="REGISTRATION NO" />
        </div>
        <div className="col-md-6 ">
        <Field name="password" component={InputField}  type = "password" label="PASSWORD" />
        </div>
        <div className="col-md-6 ">
        <Field name="name" component={InputField} label="NAME" />
        </div>
        <div className="col-md-6 ">
        <Field name="semester" component={InputField} label="SEMESTER" />
        </div>
        <div className="col-md-12 ">
        <Field name="address" component={InputField} label="ADDRESS" />
        </div>
        <div className="col-md-6 ">
        <Field name="phoneNumber" component={InputField} label="PHONE NUMBER" />
        </div>
        <div className="col-md-6 ">
        <Field name="parentPhoneNumber" component={InputField} label="PARENT'S PHONE NUMBER" />
        </div>
        <div className="col-md-6 ">
          <label>BRANCH</label>
            <Field name="branch" component="select">
              {renderBranchOptions()}
            </Field>
        </div>
        <div className="col-md-6 ">
        <Field name="roomNo" component={InputField} label="ROOM NUMBER" />
        </div>
        <div className="col-md-6 ">
        <Field name="email" component={InputField} label="EMAIL ID" />
        </div>
        <div className="col-md-6 ">
            <label>GENDER</label>
            <label> <Field name = "gender" component = "input" type="radio" value= "Male" checked="checked" /> MALE </label>
            <label> <Field name = "gender" component = "input" type = "radio" value = "Female" /> FEMALE </label>
        </div>
        <div className="col-md-6 ">
        <Field name = "dob" component = {InputField} label = "DOB" placeholder = "yyyy-mm-dd" />
        </div>
        <div className="col-md-6 ">
        <Field name="aadharCardNo" component={InputField} label="AADHAR CARD NO" />
        </div>
        <div className="col-md-6 ">
        <Field name="blackdots" component={InputField} label="BLACK DOTS" />
        </div>
        <Button text="ADD" />
      </form>
    </div>
  );

};

const validate = (formValues) => {
  const errors = {};
  if ( !isNumericValue( formValues.registrationNumber, 10 ) ) errors.registrationNumber = "Enter a valid registration number";
  if ( !formValues.name ) errors.name = "Enter a valid warden name";
  if ( !isEmail( formValues.email ) ) errors.email = "Enter a valid email id";
  if ( !isPassword( formValues.password ) ) errors.password = "Password must constain lowecase, uppercase, digit and a special character and length should atleast be 8.";
  if ( !isNumericValue( formValues.phoneNumber, 15) ) errors.phoneNumber = "Enter a valid phoneNumber";
  if ( !isNumericValue( formValues.parentPhoneNumber, 15) ) errors.parentPhoneNumber = "Enter a valid Parent's phoneNumber";
  if ( !formValues.hostelName ) errors.hostelName = "Select a valid hostel Id";
  if ( !formValues.branch ) errors.branch = "Select a valid branch name";
  if ( !isNumericValue(formValues.semester, 1) ) errors.semester = "Enter a valid semester";
  if ( !formValues.address ) errors.address = "Enter a valid address";
  if ( !isNumericValue(formValues.roomNo, 3) ) errors.roomNo = "Enter a valid Room No";
  if ( !formValues.dob ) errors.dob = "Enter a valid Date of Birth (yyyy-mm-dd)";
  if ( !formValues.gender ) errors.gender = "Select a valid gender";
  if ( !isNumericValue(formValues.aadharCardNo, 16) ) errors.aadharCardNo = "Enter a valid Aadhar No.";
  if ( !isNumericValue(formValues.blackdots, 1) ) errors.blackdots = "Enter a valid blackdots";
  return errors;
};

const mapStateToProps = (state) => {
    return { allbranch : state.branch }
}

const formWrapped = reduxForm({
  form: "STUDENT_FORM",
  validate,
})(StudentForm);

export default connect(mapStateToProps)(formWrapped);