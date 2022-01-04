import React, { useEffect } from "react";
import { connect } from "react-redux";
import { resetStatus } from "../../_actions/utility_actions";

const ShowWarden = (props) => {

    useEffect(() => {
        return () => props.resetStatus(); 
    }, [])
    return (
        <div>
            <h3> { props.title } </h3>
            <h2> Name = { props.warden.name } </h2>
            <h2> Email id = { props.warden.email } </h2>
            <h2> Phone Number = { props.warden.phoneNumber } </h2>
            <h2> Hostel = { props.warden.hostelName } </h2>
        </div>
    );
} 

export default connect(null, { resetStatus })(ShowWarden);