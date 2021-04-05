import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Form, Button, Card, Navbar} from "react-bootstrap";
//BrowserRouter for routing between pages
import {BrowserRouter as Router, Link, Route, Switch, withRouter} from "react-router-dom";
import {StudentLogin, AdminLogin} from "../../Routes";

import "./UserSelectFormStyling.scss";
import Logo from "../../../Assets/Logo.png";


const UserSelectForm = (props) => {

    return (
        <React.Fragment>
            <div className="SelectBox">
                <img
                    alt=""
                    src={Logo}
                    width="250px"
                    height="auto"
                    className="logo"/>{' '}
                <div class="shadow p-3 mb-5 bg-white rounded">
                    <Card>
                        <Card.Body>
                            <Card.Title className="card-title">Login as...</Card.Title>
                            <div className="button-container">
                                <Link onClick={() => props.history.push("/StudentLogin")} className="linkBtn">
                                    Student
                                </Link>
                                <Link onClick={() => props.history.push("/AdminLogin")} className="linkBtn">
                                    Admin
                                </Link>
                            </div>

                        </Card.Body>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    )
};

export default withRouter(UserSelectForm);
