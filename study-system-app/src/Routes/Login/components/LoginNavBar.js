import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {Navbar, Button, DropdownButton, Dropdown} from "react-bootstrap";
import Logo from "../../../Assets/logo4.png";
import Media from 'react-media';
import Hamburger from 'hamburger-react';

import "./LoginNavBar.scss";

// Using history in props for routing to different components
const LoginNavBar = (props) => {

  // setting the initial state to false so when the user clicks on the icon
  // it changes to a cross
  const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
    <div id="parent">
      <Media query="(max-width: 599px)">
        {matches =>
          matches ? (
            <div class="shadow-lg p-3 mb-5 bg-white rounded">
              <Navbar>
                <Navbar.Brand alt="LandingPage"
                href="/">
                <img
                  alt=""
                  src={Logo}
                  width="130px"
                  height="auto"
                  className="d-inline-block align-top"/>{' '}
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <DropdownButton
                    menuAlign="right"
                    id="dropdown-menu-align-right"
                    title={
                        <div class="Dropdown right">
                          <Hamburger toggled={isOpen} toggle={setOpen} />
                        </div>
                    }
                    >
                    <Dropdown.Item>
                    <i> <a href={'/#'} className="sign-in"
                    onClick={() => props.history.push("/StudentLogin")}>
                    Sign in
                    </a></i>
                    </Dropdown.Item>
                    <Dropdown.Item>
                    <i> <a href={'/#'} className="sign-up"
                    onClick={() => props.history.push("/Registration")}>
                    Sign up
                    </a></i>
                    </Dropdown.Item>
                </DropdownButton>
                </Navbar.Collapse>
              </Navbar>
            </div>
          ) : (
            <div class="shadow-lg p-3 mb-5 bg-white rounded">
              <Navbar>
                <Navbar.Brand alt="LandingPage"
                href="/">
                <img
                  alt=""
                  src={Logo}
                  width="160px"
                  height="auto"
                  className="d-inline-block align-top"/>{' '}
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                      <a href="/Login">  Sign in </a>
                </Navbar.Text>
                {/* Onclick it will redirect the user to the registration page */}
                <Button variant="custom" block size="lg" type="submit"
                onClick={() => props.history.push("/Registration")}
                >
                  Sign up
                </Button>
                </Navbar.Collapse>
              </Navbar>
            </div>
          )
        }
      </Media>
    </div>
    </React.Fragment>
  );
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(LoginNavBar);
