import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {CardDeck, Card, Button, Form, Col} from "react-bootstrap";
import "./EditStudentProfile.scss";

// Using history in props for routing to different components
const EditStudentProfile = (props) => {

  const [show, toggleShow] = useState(true);

  return (
    <React.Fragment>
    <div class="show-profile">
      <h1>My Profile</h1>
      <button type="button" className="edit-button"
      onClick={() => toggleShow(!show)}
      > {show ? 'Edit Profile' : 'Cancel Editing'}</button>
      {show &&
        <div>
         <hr />
         <Card style={{ width: '100%' }}>
           <Card.Header
           style={{ width: '100%', fontWeight: 'bold' }}>
           Student Profile</Card.Header>
           <Card.Body style={{ width: '100%' }}>
           <Form className="student-courses">
             <Form.Row>
               <Form.Group as={Col} md="6" controlId="validationCustom03">
                 <Form.Label>Course 1</Form.Label>
                 <Form.Control className="course-one" placeholder="" disabled/>
               </Form.Group>
               <Form.Group as={Col} md="6" controlId="validationCustom03">
                 <Form.Label>Course 2</Form.Label>
                 <Form.Control className="course-one" placeholder="" disabled/>
               </Form.Group>
             </Form.Row>
           </Form>
           <fieldset>
             <Form.Label style={{ fontWeight: 'bold' }}>Topic Preferences</Form.Label>
             <Form>
               <div className="topic-preferences">
                 <Form.Check inline label="Network Systems" id="prefernce-1" />
                 <Form.Check inline label="Database" id="prefernce-2" />
                 <Form.Check inline label="Software Architecture" id="preference-3" />
                 <Form.Check inline label="Blockchain" id="preference-4" />
                 <Form.Check inline label="Server Management" id="preference-5" />
               </div>
             </Form>
           </fieldset>
           <Form.Label style={{ fontWeight: 'bold', marginTop: '15px' }}>Typical Availability</Form.Label>
           <Form>
           <Form.Row className="align-items-center">
             <Col sm={2} className="weekday-text">
               <Form.Control as="select" disabled>
                 <option>Monday</option>
               </Form.Control>
             </Col>
             <Col xs="auto" className="my-1">
               <Form.Text> from </Form.Text>
             </Col>
             <Col xs="auto" className="my-1">
             <Form.Control as="select" disabled>
               <option>6:00</option>
             </Form.Control>
             </Col>
             <Col xs="auto" className="my-1">
               <Form.Text> to </Form.Text>
             </Col>
             <Col xs="auto" className="my-1">
             <Form.Control as="select" disabled>
               <option>6:00</option>
             </Form.Control>
             </Col>
           </Form.Row>
           <Form.Row className="align-items-center">
             <Col sm={2} className="weekday-text">
               <Form.Control as="select" disabled>
                 <option>Tuesday</option>
               </Form.Control>
             </Col>
             <Col xs="auto" className="my-1">
               <Form.Text> from </Form.Text>
             </Col>
             <Col xs="auto" className="my-1">
             <Form.Control as="select" disabled>
               <option>6:00</option>
             </Form.Control>
             </Col>
             <Col xs="auto" className="my-1">
               <Form.Text> to </Form.Text>
             </Col>
             <Col xs="auto" className="my-1">
             <Form.Control as="select" disabled>
               <option>6:00</option>
             </Form.Control>
             </Col>
           </Form.Row>
           <Form.Row className="align-items-center">
             <Col sm={2} className="weekday-text">
               <Form.Control as="select" disabled>
                 <option>Wednesday</option>
               </Form.Control>
             </Col>
             <Col xs="auto" className="my-1">
               <Form.Text> from </Form.Text>
             </Col>
             <Col xs="auto" className="my-1">
             <Form.Control as="select" disabled>
               <option>6:00</option>
             </Form.Control>
             </Col>
             <Col xs="auto" className="my-1">
               <Form.Text> to </Form.Text>
             </Col>
             <Col xs="auto" className="my-1">
             <Form.Control as="select" disabled>
               <option>6:00</option>
             </Form.Control>
             </Col>
           </Form.Row>
           <Form.Row className="align-items-center">
             <Col sm={2} className="weekday-text">
               <Form.Control as="select" disabled>
                 <option>Thursday</option>
               </Form.Control>
             </Col>
             <Col xs="auto" className="my-1">
               <Form.Text> from </Form.Text>
             </Col>
             <Col xs="auto" className="my-1">
             <Form.Control as="select" disabled>
               <option>6:00</option>
             </Form.Control>
             </Col>
             <Col xs="auto" className="my-1">
               <Form.Text> to </Form.Text>
             </Col>
             <Col xs="auto" className="my-1">
             <Form.Control as="select" disabled>
               <option>6:00</option>
             </Form.Control>
             </Col>
           </Form.Row>
           <Form.Row className="align-items-center">
             <Col sm={2} className="weekday-text">
               <Form.Control as="select" disabled>
                 <option>Friday</option>
               </Form.Control>
             </Col>
             <Col xs="auto" className="my-1">
               <Form.Text> from </Form.Text>
             </Col>
             <Col xs="auto" className="my-1">
             <Form.Control as="select" disabled>
               <option>6:00</option>
             </Form.Control>
             </Col>
             <Col xs="auto" className="my-1">
               <Form.Text> to </Form.Text>
             </Col>
             <Col xs="auto" className="my-1">
             <Form.Control as="select" disabled>
               <option>6:00</option>
             </Form.Control>
             </Col>
           </Form.Row>
           <Form.Row className="align-items-center">
             <Col sm={2} className="weekday-text">
               <Form.Control as="select" disabled>
                 <option>Saturday</option>
               </Form.Control>
             </Col>
             <Col xs="auto" className="my-1">
               <Form.Text> from </Form.Text>
             </Col>
             <Col xs="auto" className="my-1">
             <Form.Control as="select" disabled>
               <option>6:00</option>
             </Form.Control>
             </Col>
             <Col xs="auto" className="my-1">
               <Form.Text> to </Form.Text>
             </Col>
             <Col xs="auto" className="my-1">
             <Form.Control as="select" disabled>
               <option>6:00</option>
             </Form.Control>
             </Col>
           </Form.Row>
           <Form.Row className="align-items-center">
             <Col sm={2} className="weekday-text">
               <Form.Control as="select" disabled>
                 <option>Sunday</option>
               </Form.Control>
             </Col>
             <Col xs="auto" className="my-1">
               <Form.Text> from </Form.Text>
             </Col>
             <Col xs="auto" className="my-1">
             <Form.Control as="select" disabled>
               <option>6:00</option>
             </Form.Control>
             </Col>
             <Col xs="auto" className="my-1">
               <Form.Text> to </Form.Text>
             </Col>
             <Col xs="auto" className="my-1">
             <Form.Control as="select" disabled>
               <option>6:00</option>
             </Form.Control>
             </Col>
           </Form.Row>
         </Form>

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
                    <Form.Check inline label="Network Systems" id="prefernce-1" />
                    <Form.Check inline label="Database" id="prefernce-2" />
                    <Form.Check inline label="Software Architecture" id="preference-3" />
                    <Form.Check inline label="Blockchain" id="preference-4" />
                    <Form.Check inline label="Server Management" id="preference-5" />
                  </div>
                  <Form.Text id="passwordHelpInline" muted>
                  Please select five preferences.
                </Form.Text>
                </Form>
              </fieldset>
              <Form.Label style={{ fontWeight: 'bold', marginTop: '15px' }}>Typical Availability</Form.Label>
              <Form>
              <Form.Row className="align-items-center">
                <Col sm={2} className="weekday-text">
                  <Form.Control as="select" disabled>
                    <option>Monday</option>
                  </Form.Control>
                </Col>
                <Col xs="auto" className="my-1">
                  <Form.Text> from </Form.Text>
                </Col>
                <Col xs="auto" className="my-1">
                <Form.Control as="select" defaultValue="6:00">
                  <option>6:00</option>
                  <option>7:00</option>
                  <option>8:00</option>
                  <option>9:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>12:00</option>
                  <option>13:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                </Form.Control>
                </Col>
                <Col xs="auto" className="my-1">
                  <Form.Text> to </Form.Text>
                </Col>
                <Col xs="auto" className="my-1">
                <Form.Control as="select" defaultValue="6:00">
                  <option>6:00</option>
                  <option>7:00</option>
                  <option>8:00</option>
                  <option>9:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>12:00</option>
                  <option>13:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                </Form.Control>
                </Col>
              </Form.Row>
              <Form.Row className="align-items-center">
                <Col sm={2} className="weekday-text">
                  <Form.Control as="select" disabled>
                    <option>Tuesday</option>
                  </Form.Control>
                </Col>
                <Col xs="auto" className="my-1">
                  <Form.Text> from </Form.Text>
                </Col>
                <Col xs="auto" className="my-1">
                <Form.Control as="select" defaultValue="6:00">
                  <option>6:00</option>
                  <option>7:00</option>
                  <option>8:00</option>
                  <option>9:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>12:00</option>
                  <option>13:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                </Form.Control>
                </Col>
                <Col xs="auto" className="my-1">
                  <Form.Text> to </Form.Text>
                </Col>
                <Col xs="auto" className="my-1">
                <Form.Control as="select" defaultValue="6:00">
                  <option>6:00</option>
                  <option>7:00</option>
                  <option>8:00</option>
                  <option>9:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>12:00</option>
                  <option>13:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                </Form.Control>
                </Col>
              </Form.Row>
              <Form.Row className="align-items-center">
                <Col sm={2} className="weekday-text">
                  <Form.Control as="select" disabled>
                    <option>Wednesday</option>
                  </Form.Control>
                </Col>
                <Col xs="auto" className="my-1">
                  <Form.Text> from </Form.Text>
                </Col>
                <Col xs="auto" className="my-1">
                <Form.Control as="select" defaultValue="6:00">
                  <option>6:00</option>
                  <option>7:00</option>
                  <option>8:00</option>
                  <option>9:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>12:00</option>
                  <option>13:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                </Form.Control>
                </Col>
                <Col xs="auto" className="my-1">
                  <Form.Text> to </Form.Text>
                </Col>
                <Col xs="auto" className="my-1">
                <Form.Control as="select" defaultValue="6:00">
                  <option>6:00</option>
                  <option>7:00</option>
                  <option>8:00</option>
                  <option>9:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>12:00</option>
                  <option>13:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                </Form.Control>
                </Col>
              </Form.Row>
              <Form.Row className="align-items-center">
                <Col sm={2} className="weekday-text">
                  <Form.Control as="select" disabled>
                    <option>Thursday</option>
                  </Form.Control>
                </Col>
                <Col xs="auto" className="my-1">
                  <Form.Text> from </Form.Text>
                </Col>
                <Col xs="auto" className="my-1">
                <Form.Control as="select" defaultValue="6:00">
                  <option>6:00</option>
                  <option>7:00</option>
                  <option>8:00</option>
                  <option>9:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>12:00</option>
                  <option>13:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                </Form.Control>
                </Col>
                <Col xs="auto" className="my-1">
                  <Form.Text> to </Form.Text>
                </Col>
                <Col xs="auto" className="my-1">
                <Form.Control as="select" defaultValue="6:00">
                  <option>6:00</option>
                  <option>7:00</option>
                  <option>8:00</option>
                  <option>9:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>12:00</option>
                  <option>13:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                </Form.Control>
                </Col>
              </Form.Row>
              <Form.Row className="align-items-center">
                <Col sm={2} className="weekday-text">
                  <Form.Control as="select" disabled>
                    <option>Friday</option>
                  </Form.Control>
                </Col>
                <Col xs="auto" className="my-1">
                  <Form.Text> from </Form.Text>
                </Col>
                <Col xs="auto" className="my-1">
                <Form.Control as="select" defaultValue="6:00">
                  <option>6:00</option>
                  <option>7:00</option>
                  <option>8:00</option>
                  <option>9:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>12:00</option>
                  <option>13:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                </Form.Control>
                </Col>
                <Col xs="auto" className="my-1">
                  <Form.Text> to </Form.Text>
                </Col>
                <Col xs="auto" className="my-1">
                <Form.Control as="select" defaultValue="6:00">
                  <option>6:00</option>
                  <option>7:00</option>
                  <option>7:00</option>
                  <option>7:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>12:00</option>
                  <option>13:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                </Form.Control>
                </Col>
              </Form.Row>
              <Form.Row className="align-items-center">
                <Col sm={2} className="weekday-text">
                  <Form.Control as="select" disabled>
                    <option>Saturday</option>
                  </Form.Control>
                </Col>
                <Col xs="auto" className="my-1">
                  <Form.Text> from </Form.Text>
                </Col>
                <Col xs="auto" className="my-1">
                <Form.Control as="select" defaultValue="6:00">
                  <option>6:00</option>
                  <option>7:00</option>
                  <option>8:00</option>
                  <option>9:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>12:00</option>
                  <option>13:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                </Form.Control>
                </Col>
                <Col xs="auto" className="my-1">
                  <Form.Text> to </Form.Text>
                </Col>
                <Col xs="auto" className="my-1">
                <Form.Control as="select" defaultValue="6:00">
                  <option>6:00</option>
                  <option>7:00</option>
                  <option>8:00</option>
                  <option>9:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>12:00</option>
                  <option>13:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                </Form.Control>
                </Col>
              </Form.Row>
              <Form.Row className="align-items-center">
                <Col sm={2} className="weekday-text">
                  <Form.Control as="select" disabled>
                    <option>Sunday</option>
                  </Form.Control>
                </Col>
                <Col xs="auto" className="my-1">
                  <Form.Text> from </Form.Text>
                </Col>
                <Col xs="auto" className="my-1">
                <Form.Control as="select" defaultValue="6:00">
                  <option>6:00</option>
                  <option>7:00</option>
                  <option>8:00</option>
                  <option>9:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>12:00</option>
                  <option>13:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                </Form.Control>
                </Col>
                <Col xs="auto" className="my-1">
                  <Form.Text> to </Form.Text>
                </Col>
                <Col xs="auto" className="my-1">
                <Form.Control as="select" defaultValue="6:00">
                  <option>6:00</option>
                  <option>7:00</option>
                  <option>8:00</option>
                  <option>9:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>12:00</option>
                  <option>13:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                </Form.Control>
                </Col>
              </Form.Row>
            </Form>

              </Card.Body>
              <Card.Footer style={{ width: '100%' }}>
                <button type="button" className="edit-button"> Save Profile</button>
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
