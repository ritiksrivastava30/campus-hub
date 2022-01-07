import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const GuardPrivateRoute = ({ children, login }) => {
    return (
        login.as === "guard" ? children : <Navigate to = "/login/guards" />
    );
};

const mapStateToProps = ( state ) => {
    return { login : state.login }
}

export default connect(mapStateToProps, {})(GuardPrivateRoute);