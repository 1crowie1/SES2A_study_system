import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {Navbar, NavLink, Nav, DropdownButton, Dropdown} from "react-bootstrap";
import Avatar from 'react-avatar';
import Logo from "../../../Assets/logo4.png";
import firebase from 'firebase';

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

  function signOut(){
    firebase.auth().signOut().then((res) => {
      // console.log(res.user);
      props.history.push('/');
    }).catch((error) => {
      console.log(error.message)
    });
  }

  var user = firebase.auth().currentUser;

  // if (user != null) {
  //   user.providerData.forEach(function (profile) {
  //     console.log("Sign-in provider: " + profile.providerId);
  //     console.log("  Provider-specific UID: " + profile.uid);
  //     console.log("  Name: " + profile.displayName);
  //     console.log("  Email: " + profile.email);
  //     console.log("  Photo URL: " + profile.photoURL);
  //   });
  // }

  var name, email, photoUrl, uid, emailVerified;
  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;
  }

  return (
    <React.Fragment>
    <div class="shadow-lg p-3 mb-5 bg-white rounded">
      <Navbar className="student-nav">
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

        <NavLink className="link-two"
        onClick={() => props.history.push("/Groups")}
        color="inherit" >
        Groups
        </NavLink>

        {/* <NavLink className="link-two" href="#" color="inherit" >
        Groups
        </NavLink> */}

        <NavLink className="link-three" href="#" color="inherit" >
        Contact
        </NavLink>

          <Nav className="nav-avatar">
            <Navbar.Text className="nav-avatar-text"> {name} </Navbar.Text>
            <DropdownButton
              menuAlign="right"
              id="dropdown-menu-align-right"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
              title={
                  <div class="Dropdown right">
                    <Avatar name={name} size="40" round={true}/>
                  </div>
              }>
                <Dropdown.Item onClick={() => props.history.push("/StudentProfile")}>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={() => signOut()}>
                  Sign Out
                </Dropdown.Item>
            </DropdownButton>
          </Nav>
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
              <Dropdown.Item>
              Logout</Dropdown.Item>
          </DropdownButton>
        </Nav>
          <Nav className="nav-avatar">
            <Navbar.Text className="nav-avatar-text"> {name} </Navbar.Text>
            <DropdownButton
              menuAlign="right"
              id="dropdown-menu-align-right"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
              title={
                  <div class="Dropdown right">
                    <Avatar name={name} size="40" round={true}/>
                  </div>
              }>
                <Dropdown.Item onClick={() => props.history.push("/StudentProfile")}>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={() => signOut()}>
                  Sign Out
                </Dropdown.Item>
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

