import React from "react";
import { withRouter } from "react-router-dom";
import {Card, Button} from "react-bootstrap";
import CardBackground from "../../../Assets/class-background.jpg";
import "./StudentDashboard.scss";
import firebase from 'firebase';

// Using history in props for routing to different components
const StudentDashboard = (props) => {

var user = firebase.auth().currentUser;

// if (user != null) {
//   user.providerData.forEach(function (profile) {
//     console.log("Sign-in provider: " + profile.providerId);
//     console.log("  Provider-specific UID: " + profile.uid);
//     console.log("  Name: " + profile.displayName);
//     console.log("  Email: " + profile.email);
//     console.log("  Photo URL: " + profile.photoURL);
//   });
// }

// var name, email, photoUrl, uid, emailVerified;

// if (user != null) {
//   name = user.displayName;
//   email = user.email;
//   photoUrl = user.photoURL;
//   emailVerified = user.emailVerified;
//   uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
//                    // this value to authenticate with your backend server, if
//                    // you have one. Use User.getToken() instead.
// }

return (
  <React.Fragment>
  <div class="student-dashboard">
    <h1>Dashboard</h1>
    <hr />
    <Card style={{ width: '18rem' }}
          className="subject"
          onClick={() => props.history.push("/GroupHome")}
          >
      <Card.Img
      className="class-card-img"
        variant="top"
        alt=""
        height="180px"
        src={CardBackground} />
        <Card.Body>
            <Card.Text>
              48023 Programming Fundamentals
          </Card.Text>
      </Card.Body>
    </Card>
  </div>
  </React.Fragment>
);
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(StudentDashboard);
