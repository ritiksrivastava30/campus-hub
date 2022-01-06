import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const StudentPrivateRoute = ({ children, login }) => {
    return (
        login.as === "student" ? children : <Navigate to = "/login/students" />
    );
};

const mapStateToProps = ( state ) => {
    return { login : state.login }
}

export default connect(mapStateToProps, {})(StudentPrivateRoute);