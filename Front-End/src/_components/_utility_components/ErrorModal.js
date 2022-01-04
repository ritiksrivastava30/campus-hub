import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import { resetStatus } from "../../_actions/utility_actions";
import { Button } from "./Button";

const ErrorModal = (props) => {

    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
                <div className="header"> { props.status.status } </div>
                <div className="content"> { props.status.description } </div>
                <div className="actions">
                    <Button onClick = { () => props.resetStatus() } text = "OK" />
                </div>
            </div>
        </div>,
        document.getElementById("errorModal")
    )
}

const mapStateToProps = (state) => {
    return { status : state.status }
}

export default connect(mapStateToProps, { resetStatus })(ErrorModal);