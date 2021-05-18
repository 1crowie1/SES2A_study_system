import React from "react";
import { withRouter } from "react-router-dom";
import {Form} from "react-bootstrap";
import "./ContactAdmin.scss";
import firebase from 'firebase'

// Using history in props for routing to different components
const ContactAdmin = (props) => {

  const db = firebase.firestore();


  function sendRequest() {
    var inputVal = document.getElementById("test").value;
    const user = firebase.auth().currentUser;
    var name, email;


    db.collection("users").doc(user.uid)
    .onSnapshot((doc) => {
      db.collection("requests").doc().set({
        studentName: doc.data().name,
        studentEmail: doc.data().email,
        requestText: inputVal,
        createdAt : firebase.firestore.FieldValue.serverTimestamp()
      }, {merge: true});

    });
  }

  return (
    <React.Fragment>
    <div class="student-dashboard">
      <h1>Contact</h1>
      <hr />
      <p> For group change requests or any other questions please select your subject and write your message below.</p>

      <Form className="request-text">
        <Form.Control as="textarea" id="test" rows={8} className="text-input"/>
      </Form>

      <button type="button" className="contact-button" onClick={() => sendRequest()}>Submit</button>
    </div>
    </React.Fragment>
  );
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(ContactAdmin);
