import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "../_utility_components/Button";
import { CHECK_IN, CHECK_OUT, STUDENTS_OUTSIDE } from "../_constants/guard_constants";
import { resetLogin, resetStatus } from "../../_actions/utility_actions";

const GuardPage = (props) => {
    const params = useParams();
    const hostelName = params.hostelName;

    useEffect(() => {
        props.resetStatus();
    }, []);

    const reset = () => {
        localStorage.clear();
        props.resetLogin();
    }

    return (
        <div>
            <h1> { hostelName } </h1>
            <Link to = { `/guards/${hostelName}/checkIn` }>
                <Button text = { CHECK_IN } />
            </Link>
            <Link to = { `/guards/${hostelName}/checkOut` }>
                <Button text = { CHECK_OUT } />
            </Link>
            <Link to = { `/guards/${hostelName}/studentsOutside` }>
                <Button text = { STUDENTS_OUTSIDE } />
            </Link>
            <Link to = "/">
                <Button onClick = { reset } text = "LOG OUT" />
            </Link>
            <Outlet />
        </div>
    );
}

export default connect(null, { resetLogin, resetStatus } )(GuardPage);