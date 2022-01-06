import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const HostelPrivateRoute = ({ children, login }) => {
    return (
        login.as === "hostel" && login.to !== "superadmin" ? children : <Navigate to = "/login/wardens" />
    );
};

const mapStateToProps = ( state ) => {
    return { login : state.login }
}

export default connect(mapStateToProps, {})(HostelPrivateRoute);