import React, { useState } from "react";
import {withRouter} from "react-router-dom";
import {Form, Button, Card, Image} from "react-bootstrap";
import GoogleIcon from "../../../Assets/google-icon.png";
import firebase from 'firebase';
import BackButton from "../../../Assets/go-back-left-arrow.svg";
import "./AdminLoginForm.scss";

const AdminLoginForm = (props) => {

  const db = firebase.firestore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function emailLogin(){
    console.log("ADMIN LOGIN WITH EMAIL");
    firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
      db.collection("users").doc(res.user.uid)
      .onSnapshot((doc) => {
        if (doc.data().access == true) {
          console.log(res.user)
          props.history.push("/AdminHome");
        } else {
          console.log('invalid account access')
        }
      });
    }).catch((error) => {
      alert(error.message)
      console.log(error.message)
    });
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
        <Button variant="backBtn" type="button" onClick={() => props.history.push("/")}><Image src={BackButton}/></Button>
        <Card.Title className="card-title">Admin Login</Card.Title>
        <Form>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="custom-one" block size="lg" type="button" onClick={() => emailLogin()}>
            Sign in
          </Button>
        </Form>
        {/* Line */}
        <hr></hr>

        {/* This will need to be changed to a NavLink and redirect to the
        //   forgot password page */}
        {/* // <Card.Text><a href="#">Forgot your password?</a> </Card.Text> */}

      </Card.Body>
    </Card>
    </div>
    </div>
    </React.Fragment>
  )
};

export default withRouter(AdminLoginForm);
