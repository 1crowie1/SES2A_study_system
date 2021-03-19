import React from "react";
import { withRouter } from "react-router-dom";
import {Navbar, NavLink} from "react-bootstrap";
import Logo from "../../../Assets/Logo.png";

import "./StudentNavBar.scss";

// Using history in props for routing to different components
const StudentNavBar = (props) => {

  return (
    <React.Fragment>
    <div class="shadow-lg p-3 mb-5 bg-white rounded">
      <Navbar>
      {/*Clicking logo will redirect to student home page*/}
        <Navbar.Brand alt="StudentHome"
        href="/StudentHome">
        <img
          alt=""
          src={Logo}
          width="200px"
          height="auto"
          className="d-inline-block align-top"/>{' '}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">

        {/*Links to different pages for the student*/}

        <NavLink className="link-one" href="#" color="inherit" >
        Groups
        </NavLink>

        <NavLink className="link-two" href="#" color="inherit" >
        Groups
        </NavLink>

        <NavLink className="link-three" href="#" color="inherit" >
        Groups
        </NavLink>


        </Navbar.Collapse>
      </Navbar>
    </div>
    </React.Fragment>
  );
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(StudentNavBar);
