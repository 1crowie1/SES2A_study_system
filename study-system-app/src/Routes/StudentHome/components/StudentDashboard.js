import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {Card, Button} from "react-bootstrap";
import CardBackground from "../../../Assets/class-background.jpg";
import "./StudentDashboard.scss";
import firebase from 'firebase';

// Using history in props for routing to different components
const StudentDashboard = (props) => {

  var user = firebase.auth().currentUser;
  const db = firebase.firestore();

  var name, email, photoUrl, uid, emailVerified;
  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                    // this value to authenticate with your backend server, if
                    // you have one. Use User.getToken() instead.
  }

  const [courseValue, setCourseValue]=useState('Select Course');
  const handleCourseSelect=(e)=>{
    setCourseValue(e)
  }

  const[courseRead, setCourseRead] = useState([]);

  function readData(){
    const user = firebase.auth().currentUser;
    db.collection("users").doc(user.uid)
    .onSnapshot((doc) => {
      setCourseRead(doc.data().course)});
  }

  setTimeout(() => {  readData(); }, 700);

  return (
    <React.Fragment>
    <div class="student-dashboard">
          <h1>{name}'s Dashboard</h1>
          <button type="button" className="pdf-button">
             PDF Download
          </button>
      <hr/>
      {/* <Card style={{ width: '18rem' }}
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
      </Card> */}
      <Card className="subject">
        Studying: {courseRead}
      </Card>
    </div>
    </React.Fragment>
  );
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(StudentDashboard);
