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
import image1 from "../images/student.jpeg";
import image2 from "../images/warden.jpeg";
import image3 from "../images/guard.jpeg";

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
    <div className="bgimg">
    <div className="container">
      <div className="row">
      <div className="col-md-4 ">
      <div className="card" id="main">
      <img src={image1} height="300px" alt="studentlogo"/>
      <Link to="/login/students">
        <Button text={LOGIN_AS_STUDENT} />
      </Link>
      </div>
      </div>
      <div className="col-md-4 ">
      <div className="card" id="main">
      <img src={image2} height="300px" alt="wardenlogo"/>
      <Link to="/login/wardens">
        <Button text={LOGIN_AS_WARDEN} />
      </Link>
      </div>
      </div>
      {/* <div className="col-md-3 ">
      <div className="card">
      <img src={image3} alt="guardlogo"/>
      <Link to="/login/canteens">
        <Button text={LOGIN_AS_CANTEEN} />
      </Link>
      </div> 
      </div> */}
      <div className="col-md-4 ">
      <div className="card" id="main">
      <img src={image3} height="300px" alt="guard"/>
      <Link to="/login/guards">
        <Button text={LOGIN_AS_GUARD} />
      </Link>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { login : state.login }
}

export default connect(mapStateToProps, { loginStudentThroughLocalStorage })(HomePage);
