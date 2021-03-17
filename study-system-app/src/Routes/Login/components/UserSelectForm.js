import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Form, Button, Card, Navbar} from "react-bootstrap";
//BrowserRouter for routing between pages
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {StudentLogin, AdminLogin} from "../../Routes";

import "./UserSelectFormStyling.scss";
import Logo from "../../../Assets/Logo.png";


const UserSelectForm = () => {

    return (
        <React.Fragment>
            <div className="SelectBox">
                <img
                    alt=""
                    src={Logo}
                    width="350px"
                    height="auto"
                    className="logo"/>{' '}
                <div class="shadow p-3 mb-5 bg-white rounded">
                    <Card style={{width: '25rem', height: '25rem', border: 'none' }}>
                        <Card.Body>
                            <Card.Title className="card-title">Select User</Card.Title>
                            <div className="button-container">
                                <Link to="./StudentLogin" className="linkBtn">
                                    Student
                                </Link>
                                <Link to="./AdminLogin" className="linkBtn">
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

export default UserSelectForm;
