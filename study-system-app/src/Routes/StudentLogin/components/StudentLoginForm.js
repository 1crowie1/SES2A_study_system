import React, { useState } from "react";
import {Form, Button, Card, Image, NavLink} from "react-bootstrap";
import { withRouter } from "react-router-dom";
import GoogleIcon from "../../../Assets/google-icon.png";
import "./StudentLoginForm.scss";
import Logo from "../../../Assets/logo4.png";

const StudentLoginForm = (props) => {

  // Needs backend to implement login
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
    <div className="LoginBox">
    {/* react-boostrap class to make the card have a shadow around it.
        To allow for shadows had to set shadows to true in SASS bootsrap folder
      */}
    <div class="shadow p-3 mb-5 bg-white rounded">
    <Card className="login-card" style={{width: '25rem', height: '33rem'}}>
      <Card.Body>
       <Card.Title className="card-title">Student Sign in</Card.Title>
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
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="custom-one" block size="lg" type="submit">
            Sign in
          </Button>
          <Card.Text style={{fontSize: "12px", color: "grey"}}> OR </Card.Text>

          <Button variant="custom-two" block size="lg" type="submit">
          <Image src={GoogleIcon}/>
            Sign in with Google
          </Button>
        </Form>

        {/* Line */}
        <hr></hr>

        {/* This will need to be changed to a NavLink and redirect to the
          forgot password page */}
        <Card.Text><a href="#">Forgot your password?</a> </Card.Text>
        <NavLink href="#" onClick={() => props.history.push("/")} color="inherit">
        Don't have a Groupme account? Sign up here
        </NavLink>

      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
    </React.Fragment>
  )
};

export default withRouter(StudentLoginForm);
