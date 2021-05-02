import React from "react";
import { withRouter } from "react-router-dom";
import {Form, Button} from "react-bootstrap";
import "./ContactAdmin.scss";

// Using history in props for routing to different components
const ContactAdmin = (props) => {

return (
  <React.Fragment>
  <div class="student-dashboard">
    <h1>Contact</h1>
    <hr />
    <p> For group change requests or any other questions please select your subject and write your message below.</p>

    <Form className="request-subject">
        <Form.Control as="select">
          <option>Subject 1</option>
          <option>Subject 2</option>
        </Form.Control>
    </Form>
    <Form className="request-text">
      <Form.Control as="textarea" rows={8} className="text-input"/>
    </Form>

    <button type="button" className="contact-button">Submit</button>
  </div>
  </React.Fragment>
);
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(ContactAdmin);
