import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {CardDeck, Card, Button} from "react-bootstrap";
import "./EditStudentProfile.scss";

// Using history in props for routing to different components
const EditStudentProfile = (props) => {

  const [show, toggleShow] = useState(true);

  return (
    <React.Fragment>
    <div class="edit-profile">
      <h1>My Profile</h1>
      <Button variant="primary"
      onClick={() => toggleShow(!show)}
      > {show ? 'Edit Profile' : 'Cancel Editing'}</Button>
      {show &&
        <div>
         <hr />
        <CardDeck>
          <Card style={{ width: '40%' }}>
            <Card.Header
            style={{ width: '100%', fontWeight: 'bold' }}>
            Courses</Card.Header>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '40%' }}>
          <Card.Header
          style={{ width: '100%', fontWeight: 'bold' }}>
          Topic Preferences</Card.Header>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </CardDeck>

        <Card style={{ width: '100%', marginTop: '30px' }}>
        <Card.Header
        style={{ width: '100%', fontWeight: 'bold' }}>
        Availability</Card.Header>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
        </div>}
        {!show &&
          <div>
           <hr />
            <Card style={{ width: '100%' }}>
              <Card.Header
              style={{ width: '100%', fontWeight: 'bold' }}>
              Edit Profile</Card.Header>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ width: '100%' }}>
                <Button variant="primary"> Save Profile</Button>
              </Card.Footer>
            </Card>

          </div>}

      </div>
    </React.Fragment>
  );
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(EditStudentProfile);
