import React, { useState } from "react";
import {Form, Button, Card, Image} from "react-bootstrap";
import GoogleIcon from "../../../Assets/google-icon.png";
import firebase from 'firebase';
import BackButton from "../../../Assets/go-back-left-arrow.svg";
import "./AdminLoginForm.scss";

const AdminLoginForm = () => {

  // Needs backend to implement login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  var config = 
  {
    apiKey: "AIzaSyAf02jIhvwfN5LutBBEgFjBIvHPWLEnk0Q",
    authDomain: "groupformationsystem.firebaseapp.com",
    databaseURL: "https://groupformationsystem-default-rtdb.firebaseio.com",
    projectId: "groupformationsystem",
    storageBucket: "groupformationsystem.appspot.com",
    messagingSenderId: "912375308149",
    appId: "1:912375308149:web:6932a8593b14559538bd3c",
    measurementId: "G-13XJR1BL4W"
  };
  const fire = firebase.initializeApp(config);

  document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();

  });

  function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    console.log("LOGIN WITH GOOGLE");
    firebase.auth().signInWithPopup(provider);
  }

  return (
    <React.Fragment>
    <div className="AdminLoginBox">
    {/* react-boostrap class to make the card have a shadow around it.
        To allow for shadows had to set shadows to true in SASS bootstrap folder
      */}
    <div class="shadow p-3 mb-5 bg-white rounded">
    <Card className="login-card">
      <Card.Body>
        <Button variant="backBtn" type="button" onClick={() => window.history.back()}><Image src={BackButton}/></Button>
        <Card.Title className="card-title">Admin Login</Card.Title>
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

          <Button variant="custom-two" block size="lg" type="submit" onClick={googleLogin()}>
          <Image src={GoogleIcon}/>
            Sign in with Google
          </Button>
        </Form>
        {/* Line */}
        <hr></hr>

        {/* This will need to be changed to a NavLink and redirect to the
          forgot password page */}
        <Card.Text><a href="#">Forgot your password?</a> </Card.Text>

      </Card.Body>
    </Card>
    </div>
    </div>
    </React.Fragment>
  )
};

export default AdminLoginForm;
