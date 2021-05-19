import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {Navbar, Button, DropdownButton, Dropdown, Nav, NavLink} from "react-bootstrap";
import Logo from "../../../Assets/logo4.png";
import Avatar from 'react-avatar';
import Media from 'react-media';
import Hamburger from 'hamburger-react';

import "./AdminNavBar.scss";
import DropdownItem from "react-bootstrap/DropdownItem";

// Using history in props for routing to different components
const AdminNavBar = (props) => {

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
                href="/AdminHome">
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
                        <Navbar.Text className="nav-avatar-text"> Jane Smith </Navbar.Text>
                      </Nav>
                    </DropdownItem>
                    <Dropdown.Item>
                      <i> <a href={'/#'} className="dropdown-item">
                        Profile
                      </a></i>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <i> <a href={'/#'} className="dropdown-item">
                        Dashboard
                      </a></i>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <i> <a href={'/#'} className="dropdown-item">
                        Groups
                      </a></i>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <i> <a href={'/#'} className="dropdown-item">
                        Logout
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
                href="/AdminHome">
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
                           onClick={() => props.history.push("/AdminHome")}
                           color="inherit" >
                    Dashboard
                  </NavLink>

                  <NavLink className="page-btn" href="#" color="inherit" >
                    Groups
                  </NavLink>

                </Nav>

                {/* Avatar w/ Dropdown */}
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                  <Nav className="nav-avatar">
                    <Navbar.Text className="nav-avatar-text"> Jane Smith </Navbar.Text>
                    <DropdownButton
                        menuAlign="right"
                        id="dropdown-menu-align-right"
                        show={show}
                        onMouseEnter={showDropdown}
                        onMouseLeave={hideDropdown}
                        title={
                          <div class="Dropdown right">
                            <Avatar name="Jane Smith" size="40" round={true} /*toggled={isOpen} toggle={setOpen}*/ />
                          </div>
                        }
                    >
                      {/* <Dropdown.Item>
                        <i> <a href={'/#'} className="dropdown-item">
                          Profile
                        </a></i>
                      </Dropdown.Item> */}
                      <Dropdown.Item>
                        <i> <a href={'/#'} className="dropdown-item">
                          Logout
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
