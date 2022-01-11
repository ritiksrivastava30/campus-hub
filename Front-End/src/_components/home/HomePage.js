import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { Button } from "../_utility_components/Button";
import {
  LOGIN_AS_CANTEEN,
  LOGIN_AS_STUDENT,
  LOGIN_AS_WARDEN,
  LOGIN_AS_GUARD
} from "../_constants/login_constants";
import { loginStudentThroughLocalStorage } from "../../_actions/student_actions";

const HomePage = (props) => {

  const navigate = useNavigate();

  useEffect(() => {
    if(props.login.as === "student"){
      navigate(`/students/${props.login.to}`)
    }
    else if(props.login.as === "hostel"){
      if(props.login.to === "superadmin") navigate("/superadmin")
      else navigate(`/hostels/${props.login.to}`)
    }
    else if(props.login.as === "guard"){
      navigate(`/guards/${props.login.to}`)
    }
  }, [props.login]);

  return (
    <div>
      <Link to="/login/students">
        <Button text={LOGIN_AS_STUDENT} />
      </Link>

      <Link to="/login/wardens">
        <Button text={LOGIN_AS_WARDEN} />
      </Link>

      <Link to="/login/canteens">
        <Button text={LOGIN_AS_CANTEEN} />
      </Link>

      <Link to="/login/guards">
        <Button text={LOGIN_AS_GUARD} />
      </Link>

    </div>
  );
};

const mapStateToProps = (state) => {
  return { login : state.login }
}

export default connect(mapStateToProps, { loginStudentThroughLocalStorage })(HomePage);
