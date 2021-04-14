import React, { useState } from "react";
import {Link, withRouter} from "react-router-dom";
import {Form, Button, Card, NavLink, Image} from "react-bootstrap";
import GoogleIcon from "../../../Assets/google-icon.png";
import BackButton from "../../../Assets/go-back-left-arrow.svg";
import "./RegForm.scss";
import firebase from "firebase";

// Using history in props for routing to different components
const RegForm = (props) => {
  // Needs backend
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const config =
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
  if(firebase.apps.length === 0) {
    const app = firebase.initializeApp(config);
  }


  function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    console.log("LOGIN WITH GOOGLE");
    firebase.auth().signInWithPopup(provider).then((res) => {
      console.log(res.user)
    }).catch((error) => {
      console.log(error.message)
    });
  }

  return (
    <React.Fragment>
    <div className="RegBox">
    <div class="shadow p-3 mb-5 bg-white rounded">
    <Card className="reg-card">
      <Card.Body>
        <Button variant="backBtn" type="button" onClick={() => window.history.back()}><Image src={BackButton}/></Button>
        <Card.Title className="card-title">Create your account</Card.Title>
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
          <Form.Group size="lg" controlId="name">
            <Form.Label>Full name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
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

          <Button variant="custom-two" block size="lg" type="button" onClick={() => googleLogin()}>
          <Image src={GoogleIcon}/>
            Continue with Google
          </Button>
        </Form>

        <hr></hr>
        {/* Redirects user to login page */}
        <NavLink href="#" onClick={() => props.history.push("/StudentLogin")} color="inherit">
        Already have a GroupMe account? Sign in
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
