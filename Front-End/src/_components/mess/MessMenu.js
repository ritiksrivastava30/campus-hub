import _ from "lodash";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchMenu, resetMenu } from "../../_actions/mess_actions";
import ChangeMessMenu from "./ChangeMessMenu";
import MenuTable from "./MenuTable";

const MessMenu = ( props ) => {

    const loginAs = window.location.pathname.split("/")[1]
    
    useEffect(() => {
        let hostelName;
        if(loginAs === "hostels"){
            hostelName = props.login.to
        }
        else{
            hostelName = props.student.hostelName
        }
        
        props.fetchMenu(hostelName);

        return () => props.resetMenu();

    }, []);

    const menu = Object.values(props.menu);

    return (
        <div className="container">
            <div className="card">
            <h2>Mess Menu</h2>
            <MenuTable data = { menu } rowsPerPage = {8} />
            { props.login.as === "hostel" ? <ChangeMessMenu hostelName = {props.login.to} /> : null }
        </div>
        </div>
    )

}

const mapStateToProps = ( state ) => {
    return { login : state.login, menu : state.menu, student : Object.values(state.students)[0] }
}

export default connect(mapStateToProps, { fetchMenu, resetMenu } )(MessMenu);