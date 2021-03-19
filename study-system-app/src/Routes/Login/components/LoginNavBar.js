import React from "react";
import { withRouter } from "react-router-dom";
import {Navbar, Button} from "react-bootstrap";
import Logo from "../../../Assets/Logo.png";

import "./LoginNavBar.scss";

// Using history in props for routing to different components
const LoginNavBar = (props) => {

  return (
    <React.Fragment>
    <div class="shadow-lg p-3 mb-5 bg-white rounded">
      <Navbar>
        <Navbar.Brand alt="LandingPage"
        href="/">
        <img
          alt=""
          src={Logo}
          width="200px"
          height="auto"
          className="d-inline-block align-top"/>{' '}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
              <a href="/Login">  Sign in </a>
        </Navbar.Text>
        {/* Onclick it will redirect the user to the registration page */}
        <Button block size="lg" type="submit"
        variant="outline-secondary"
        onClick={() => props.history.push("/Registration")}
        >
          Sign up
        </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
    </React.Fragment>
  );
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(LoginNavBar);
