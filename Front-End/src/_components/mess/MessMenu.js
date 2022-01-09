import React from "react";
import { connect } from "react-redux";

import ChangeMessMenu from "./ChangeMessMenu";

const MessMenu = ( props ) => {

    return (
        <div>
            <div> MessMenu </div>
            { props.login.as === "hostel" ? <ChangeMessMenu hostelName = {props.login.to} /> : null }
        </div>
    )

}

const mapStateToProps = ( state ) => {
    return { login : state.login }
}

export default connect(mapStateToProps, { } )(MessMenu);