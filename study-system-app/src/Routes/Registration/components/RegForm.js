import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {Form, Button, Card, NavLink, Image} from "react-bootstrap";
import GoogleIcon from "../../../Assets/google-icon.png";
import "./RegForm.scss";

// Using history in props for routing to different components
const RegForm = (props) => {
  // Needs backend
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <React.Fragment>
    <div className="RegBox">
    <div class="shadow p-3 mb-5 bg-white rounded">
    <Card style={{width: '25rem', height: '36rem', border: 'none' }}>
      <Card.Body>
       <Card.Title className="card-title">Sign up for your account</Card.Title>
        <Form>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Full name</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="custom-one" block size="lg" type="submit">
            Create account
          </Button>
          <Card.Text style={{fontSize: "12px", color: "grey"}}> OR </Card.Text>

          <Button variant="custom-two" block size="lg" type="submit">
          <Image src={GoogleIcon}/>
            Continue with Google
          </Button>
        </Form>

        <hr></hr>
        {/* Redirects user to login page */}
        <NavLink href="#" onClick={() => props.history.push("/Login")} color="inherit">
        Already have a Groupme account? Sign in
        </NavLink>

      </Card.Body>
    </Card>
    </div>
    </div>
    </React.Fragment>
  )
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(RegForm);
