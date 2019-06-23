import React, { Component } from "react";

import { Link } from "react-router-dom";

class Landing extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            <b>Build</b> a login/auth app with the{" "}
                            <span style={{ fontFamily: "monospace" }}>MERN</span>
                            stack from scratch
                         </h4>
                         <p className="flow-text grey-text text-darken-1">
                             create an authentication app
                         </p>
                         <br />
                         <div className="col s6">
                             <Link to="/register" style={{ width: "140px", borderRadius: "3px", letterSpacing: "1.5px" }} className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                                 Log In
                             </Link>
                         </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;