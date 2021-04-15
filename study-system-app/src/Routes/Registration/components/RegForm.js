import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {Form, Button, Card, NavLink, Image} from "react-bootstrap";
import GoogleIcon from "../../../Assets/google-icon.png";
import "./RegForm.scss";
import Logo from "../../../Assets/logo4.png";

// Using history in props for routing to different components
const RegForm = (props) => {
  // Needs backend
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <React.Fragment>
    <div className="parent">
    <div className="Logo">
      <img
        alt=""
        src={Logo}
        width="300px"
        height="auto"
        className="logo"
        onClick={() => props.history.push("/")}/>{' '}
      <p> Select user to sign in</p>
      <div className="Buttons">
      <Button variant="custom-three" block size="lg" type="submit"
      onClick={() => props.history.push("/StudentLogin")}>
        Student
      </Button>
      <Button variant="custom-admin" block size="lg" type="submit"
      onClick={() => props.history.push("/AdminLogin")}>
        Admin
      </Button>
      </div>
    </div>
    <div className="RegBox">
    <div class="shadow p-3 mb-5 bg-white rounded">
    <Card className="reg-card">
      <Card.Body>
       <Card.Title className="card-title">Create your student account</Card.Title>
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

      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
    </React.Fragment>
  )
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(RegForm);
