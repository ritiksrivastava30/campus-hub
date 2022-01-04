import React, { useEffect } from "react";
import { connect } from "react-redux";

import { resetStatus } from "../../_actions/utility_actions";

const ShowHostel = (props) => {

    useEffect(() => {
        return () => props.resetStatus();
    }, []);

    return (
        <div>
            <h3> { props.title } </h3>
            <h2>Hostel Name : { props.hostel.name } </h2>
            <h2>Capacity : { props.hostel.capacity } </h2>
            <h2>IsActive : { props.hostel.status } </h2>
        </div>
    );
} 

export default connect(null, { resetStatus })(ShowHostel);