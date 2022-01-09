import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchMenu, resetMenu } from "../../_actions/mess_actions";
import { fetchStudentByRegistrationNumber } from "../../_actions/student_actions";
import ChangeMessMenu from "./ChangeMessMenu";
import MenuTable from "./MenuTable";

const MessMenu = ( props ) => {

    useEffect(() => {
        let hostelName;
        if(props.login.as == "student"){
            hostelName = props.student.hostelName
        }
        else{
            hostelName = props.login.to
        }
        props.fetchMenu(hostelName);

        return () => props.resetMenu();

    }, []);

    const menu = Object.values(props.menu);

    return (
        <div>
            <h2>Mess Menu</h2>
            <MenuTable data = { menu } rowsPerPage = {8} />
            { props.login.as === "hostel" ? <ChangeMessMenu hostelName = {props.login.to} /> : null }
        </div>
    )

}

const mapStateToProps = ( state ) => {
    return { login : state.login, menu : state.menu, student : Object.values(state.students)[0] }
}

export default connect(mapStateToProps, { fetchMenu, resetMenu } )(MessMenu);