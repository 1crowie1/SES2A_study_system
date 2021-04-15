import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {Navbar, NavLink, Nav, DropdownButton, Dropdown} from "react-bootstrap";
import Avatar from 'react-avatar';
import Logo from "../../../Assets/logo4.png";

import "./StudentNavBar.scss";

// Using history in props for routing to different components
const StudentNavBar = (props) => {

  // On hover the dropdown menu will show
  const [show, setShow] = useState(false);

  const showDropdown = (e)=>{
      setShow(!show);
  }

  const hideDropdown = e => {
      setShow(false);
  }

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
          width="160px"
          height="auto"
          className="d-inline-block align-top"/>{' '}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">

        {/*Links to different pages for the student*/}
        <Nav className="page-links">
        <NavLink className="link-one"
        onClick={() => props.history.push("/StudentHome")}
        color="inherit" >
        Dashboard
        </NavLink>

        <NavLink className="link-two" href="#" color="inherit" >
        Groups
        </NavLink>

        <NavLink className="link-three" href="#" color="inherit" >
        Contact
        </NavLink>

        </Nav>

        <Nav className="nav-avatar">
        <Navbar.Text className="nav-avatar-text"> John Doe </Navbar.Text>
          <DropdownButton
            menuAlign="right"
            id="dropdown-menu-align-right"
            show={show}
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
            title={
                <div class="Dropdown right">
                  <Avatar name="John Doe" size="40" round={true}/>
                </div>
            }>
              <Dropdown.Item
              onClick={() => props.history.push("/StudentProfile")}>
              Profile</Dropdown.Item>
          </DropdownButton>
        </Nav>

        </Navbar.Collapse>
      </Navbar>
    </div>
    </React.Fragment>
  );
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(StudentNavBar);
