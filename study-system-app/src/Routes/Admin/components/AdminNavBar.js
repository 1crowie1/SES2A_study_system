import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {Navbar, Button, DropdownButton, Dropdown, Nav, NavLink} from "react-bootstrap";
import Logo from "../../../Assets/logo4.png";
import Avatar from 'react-avatar';
import Media from 'react-media';
import Hamburger from 'hamburger-react';

import "./AdminNavBar.scss";
import DropdownItem from "react-bootstrap/DropdownItem";
import firebase from 'firebase';

// Using history in props for routing to different components
const AdminNavBar = (props) => {
  
  var user = firebase.auth().currentUser;

  // setting the initial state to false so when the user clicks on the icon
  // it changes to a cross
  const [isOpen, setOpen] = useState(false);
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
    <div id="parent">
      <Media query="(max-width: 699px)">
        {matches =>
          matches ? (
            <div class="shadow-lg p-3 mb-5 bg-white rounded">
              {/* Mobile Display */}
              <Navbar className="admin-nav">
                {/* Hyperlinked Logo */}
                <Navbar.Brand alt="AdminHome"
                href="/ClassManagement">
                <img
                  alt=""
                  src={Logo}
                  width="130px"
                  height="auto"
                  className="d-inline-block align-top"/>{' '}
                </Navbar.Brand>

                {/* User's Hamburger Menu */}
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                  <DropdownButton
                      menuAlign="right"
                      id="dropdown-menu-align-right"
                      onMouse
                      title={
                          <div class="Dropdown right">
                            <Hamburger toggled={isOpen} toggle={setOpen} />
                          </div>
                      }
                      >
                    <DropdownItem disabled={true}>
                      <Nav className="nav-mini">
                        <Avatar name="Jane Smith" size="40" round={true} />
                        <Navbar.Text className="nav-avatar-text"> {name} </Navbar.Text>
                      </Nav>
                    </DropdownItem>
                    <Dropdown.Item>
                      <i> <a href={'/#'} className="dropdown-item">
                        Profile
                      </a></i>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <i> <a onClick={() => props.history.push("/ClassManagement")} className="dropdown-item">
                        Dashboard
                      </a></i>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <i> <a onClick={() => props.history.push("/RequestsInbox")} className="dropdown-item">
                        Requests
                      </a></i>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <i> <a href={'/#'} className="dropdown-item">
                        Sign Out
                      </a></i>
                    </Dropdown.Item>
                  </DropdownButton>
                </Navbar.Collapse>
              </Navbar>
            </div>
          ) : (
            <div class="shadow-lg p-3 mb-5 bg-white rounded">
              {/* Desktop Display */}
              <Navbar className="admin-nav">
                {/* Hyperlinked Logo */}
                <Navbar.Brand alt="AdminHome"
                href="/ClassManagement">
                <img
                  alt=""
                  src={Logo}
                  width="160px"
                  height="auto"
                  className="d-inline-block align-top"/>{' '}
                </Navbar.Brand>

                {/* Page Links */}
                <Nav className="page-links">
                  <NavLink className="page-btn"
                           onClick={() => props.history.push("/ClassManagement")}
                           color="inherit" >
                    Dashboard
                  </NavLink>

                  <NavLink className="page-btn"
                           onClick={() => props.history.push("/RequestsInbox")}
                           color="inherit" >
                    Requests
                  </NavLink>

                </Nav>

                {/* Avatar w/ Dropdown */}
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
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
                        }
                    >
                      <Dropdown.Item>
                        <i> <a href={'/#'} className="dropdown-item">
                          Profile
                        </a></i>
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => signOut()}>
                        <i> <a href={'/#'} className="dropdown-item" >
                          Sign Out
                        </a></i>
                      </Dropdown.Item>
                    </DropdownButton>
                  </Nav>
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
export default withRouter(AdminNavBar);
