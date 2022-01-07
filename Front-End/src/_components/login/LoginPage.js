import React, { useEffect } from "react";
import { reduxForm, Field } from "redux-form";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";
import { useNavigate } from "react-router-dom";

import Title from "../_utility_components/Title"
import InputField from "../_utility_components/InputField";
import { Button }  from "../_utility_components/Button";
import { loginHostel } from "../../_actions/hostel_actions";
import { loginStudent } from "../../_actions/student_actions";  
import { loginGuard } from "../../_actions/guard_actions";
import { loginCanteen } from "../../_actions/canteen_actions";
import { resetLogin } from "../../_actions/utility_actions";
import ErrorModal from "../_utility_components/ErrorModal";

const LoginPage = (props) => {

  const navigate = useNavigate();
  const params = useParams();
  const loginAs = params.loginAs;

  useEffect(() => {
    if(_.isEmpty(props.login)) return;
    else if(loginAs === "students") navigate(`/students/${props.login.to}`);
    else if(loginAs === "wardens") {
      if(props.login.to === "superadmin") navigate("/superadmin");
      else navigate(`/hostels/${props.login.to}`);
    }
    else if(loginAs === "canteens") console.log("Canteen Detected");
    else if(loginAs === "guards") navigate(`/guards/${props.login.to}`);
  }, [props.login, loginAs]);

  let titleText;

  if (loginAs == "students") titleText = "Student Login";
  else if (loginAs == "wardens") titleText = "Warden Login";
  else if (loginAs == "canteens") titleText = "Canteen Login";
  else if(loginAs === "guards") titleText = "Guard Login";

  const onSubmit = (formValues) => {
    if(loginAs === "students") props.loginStudent(formValues);
    else if(loginAs === "wardens") props.loginHostel(formValues);
    else if(loginAs === "guards") props.loginGuard(formValues);
    else if(loginAs === "canteens") props.loginCanteen(formValues);
  };

  
  return (
    <div>
      <Title text={titleText} />
      <form onSubmit={props.handleSubmit(onSubmit)} >
        <Field name="userName" component={InputField} label="Username" />
        <Field name="password" component={InputField} label="Password" />
        <Button text="Submit" />      
      </form>
      {props.status.status === "Error" ? <ErrorModal /> : null }
    </div>
  );

};


const validate = (formValues) => {
  const errors = {};
  if(!formValues.userName) errors.userName = "Enter a valid username";
  if(!formValues.password) errors.password = "Enter a valid password";
  return errors;
};

const formWrapped =  reduxForm({
  form : "LOGIN_FORM",
  validate : validate
})(LoginPage);

const actionCreators = {
  loginHostel, loginCanteen, loginGuard, loginStudent, resetLogin
};

const mapStateToProps = (state) => {
  return { login : state.login, status : state.status };
}

export default connect( mapStateToProps, actionCreators )(formWrapped);