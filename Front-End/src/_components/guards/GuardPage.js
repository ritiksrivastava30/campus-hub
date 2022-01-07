import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "../_utility_components/Button";
import { CHECK_IN_CHECK_OUT,STUDENT_OUTSIDE } from "../_constants/guard_constants";
import { resetLogin, resetStatus } from "../../_actions/utility_actions";

const GuardPage = (props) => {
    const params = useParams();
    const hostelName = params.hostelName;

    useEffect(() => {
        props.resetStatus();
    }, []);

    const reset = () => {
        props.resetLogin();
    }

    return (
        <div>
            <h1> { hostelName } </h1>
            <Link to = { `/guards/${hostelName}/CheckInCheckOut` }>
                <Button text = {CHECK_IN_CHECK_OUT} />
            </Link>
            <Link to = { `/guards/${hostelName}/studentOutside` }>
                <Button text = {STUDENT_OUTSIDE} />
            </Link>
            <Link to = "/">
                <Button onClick = { reset } text = "LOG OUT" />
            </Link>
            <Outlet />
        </div>
    );
}

export default connect(null, { resetLogin, resetStatus } )(GuardPage);