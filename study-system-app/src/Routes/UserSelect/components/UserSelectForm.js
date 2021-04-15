import React from "react";
import { Card } from "react-bootstrap";
//BrowserRouter for routing between pages
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./UserSelectForm.scss";
import Logo from "../../../Assets/logo4.png";


const UserSelectForm = () => {

    return (
        <React.Fragment>
        <div class="page-banner">
        <div class="circle">
          <div class="page-banner-text">
          <img
                 alt=""
                 src={Logo}
                 width="300px"
                 height="auto"
                 className="logo"/>{' '}
          </div>
        </div>
        <div class="shadow p-3 mb-5 bg-white rounded">
                  <Card style={{width: '20rem', height: '11rem', border: 'none' }}>
                      <Card.Body>
                          <Card.Title className="card-title">Select User</Card.Title>
                          <div className="button-container">
                              <Link to="./StudentLogin" className="linkBtn1">
                                  Student
                              </Link>
                              <Link to="./AdminLogin" className="linkBtn2">
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
