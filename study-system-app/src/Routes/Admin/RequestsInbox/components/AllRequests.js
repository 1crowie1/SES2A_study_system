import React from "react";
import { withRouter } from "react-router-dom";
import "./AllRequests.scss";
import Card from "react-bootstrap/Card";
import firebase from "firebase";
import { render } from "react-dom";


// Using history in props for routing to different components
const AllRequests = (props) => {

  const db = firebase.firestore();

  var requests = [{id: '3g6djdpebUHHfB5XVK8s', name: 'Justin Carlino', email: 'justin.carlino@mail.com', text: 'Hi i need help!'}];
  
function test () {
  db.collection("requests")
  .get()
  .then((funct) => {
    funct.forEach((doc) => {
      requests.push({
        id: doc.id,
        name: doc.data().studentName,
        email: doc.data().studentEmail,
        text: doc.data().requestText,
      });
    });
  });
};

test();

  const renderCard = (card, index) => {
    return (
      <Card className="wide-card" key={index}>
        <Card.Body>
          <Card.Title> Request ID: {card.id} </Card.Title>
          <Card.Subtitle> {card.name} </Card.Subtitle>
          <Card.Text> {card.email} </Card.Text>
          <Card.Text> {card.text} </Card.Text>
          </Card.Body>
      </Card>
    );
  };

  return (
    <React.Fragment>
      {/* Displays cards of all requests from students to this admin (recent request priority) */}
      <div class="request-inbox">
        <h1>Inbox</h1>
        <hr />
        <div className="request-card-container" id="cards">
          {requests.map(renderCard)}
        </div>
      </div>
    </React.Fragment>
  );
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(AllRequests);

