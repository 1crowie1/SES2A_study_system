import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {CardDeck, Card, Button, Form, Col, Row} from "react-bootstrap";
import "./EditStudentProfile.scss";

// Using history in props for routing to different components
const EditStudentProfile = (props) => {

  const [show, toggleShow] = useState(true);

  return (
    <React.Fragment>
    <div class="show-profile">
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
          <div >
           <hr />
            <Card style={{ width: '100%' }}>
              <Card.Header
              style={{ width: '100%', fontWeight: 'bold' }}>
              Edit Profile</Card.Header>
              <Card.Body style={{ width: '100%' }}>
              <Form className="student-courses">
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Course 1</Form.Label>
                    <Form.Control className="course-one" placeholder="" />
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Course 2</Form.Label>
                    <Form.Control className="course-one" placeholder="" />
                  </Form.Group>
                </Form.Row>
              </Form>
              <fieldset>
                <Form.Label style={{ fontWeight: 'bold' }}>Topic Preferences</Form.Label>
                <Form>
                  <div className="topic-preferences">
                    <Form.Check inline label="Network Systems" type='radio' id="prefernce-1" />
                    <Form.Check inline label="Database" type='radio' id="prefernce-2" />
                    <Form.Check inline label="Software Architecture" type='radio' id="preference-3" />
                    <Form.Check inline label="Blockchain" type='radio' id="preference-4" />
                    <Form.Check inline label="Server Management" type='radio' id="preference-5" />
                  </div>
                  <Form.Text id="passwordHelpInline" muted>
                  Please select five preferences.
                </Form.Text>
                </Form>
              </fieldset>
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
