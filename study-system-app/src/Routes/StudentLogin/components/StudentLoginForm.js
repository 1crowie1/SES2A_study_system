import React, { useState } from "react";
import {Form, Button, Card, Image} from "react-bootstrap";
import GoogleIcon from "../../../Assets/google-icon.png";
import "./StudentLoginForm.scss";

const StudentLoginForm = () => {

  // Needs backend to implement login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <React.Fragment>
    <div className="StudentLoginBox">
    {/* react-boostrap class to make the card have a shadow around it.
        To allow for shadows had to set shadows to true in SASS bootstrap folder
      */}
    <div class="shadow p-3 mb-5 bg-white rounded">
    <Card className="login-card">
      <Card.Body>
       <Card.Title className="card-title">Student Login</Card.Title>
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
        <Card.Text><a href="/Registration">Need a GroupMe account? Sign up here</a></Card.Text>
        <Card.Text><a href="#">Forgot your password?</a></Card.Text>

      </Card.Body>
    </Card>
    </div>
    </div>
    </React.Fragment>
  )
};

export default StudentLoginForm;
