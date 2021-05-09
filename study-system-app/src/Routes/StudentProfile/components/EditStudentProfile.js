import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {CardDeck, Card, Button, Form, Col, DropdownButton, Dropdown} from "react-bootstrap";
import "./EditStudentProfile.scss";

// Using history in props for routing to different components
const EditStudentProfile = (props) => {

  const [show, toggleShow] = useState(true);

  const [courseValue,setCourseValue]=useState('Select course');
  const handleCourseSelect=(e)=>{
    setCourseValue(e)
  }

  const [majorValue,setMajorValue]=useState('Select major');
  const handleMajorSelect=(e)=>{
    setMajorValue(e)
  }

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
           <Form className="course">
               <Form.Label style={{ fontWeight: 'bold'}}>Course</Form.Label>

           </Form>
           <Form className="major">
               <Form.Label style={{ fontWeight: 'bold'}}>Major</Form.Label>

           </Form>
           <fieldset>
             <Form.Label style={{ fontWeight: 'bold' }}>Topic Preferences</Form.Label>
             <Form>
               <div className="topic-preferences">

               </div>
             </Form>
           </fieldset>
           <fieldset>
            <Form.Label style={{ fontWeight: 'bold'}}>Typical Availability</Form.Label>
             <Form>
               <div className="topic-preferences">

               </div>
             </Form>
           </fieldset>
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
                  <Form.Label style={{ fontWeight: 'bold'}}>Course</Form.Label>
                  <DropdownButton
                  title={courseValue}
                  id="course-dropdown"
                  variant="info"
                  onSelect={handleCourseSelect}
                    >
                          <Dropdown.Item eventKey="Engineering">Engineering</Dropdown.Item>
                          <Dropdown.Item eventKey="Science">Science</Dropdown.Item>
                          <Dropdown.Item eventKey="Communications">Communications</Dropdown.Item>
                          <Dropdown.Item eventKey="Education">Education</Dropdown.Item>
                  </DropdownButton>

                  <Form.Label style={{ fontWeight: 'bold', marginTop: "1%"}}>Major</Form.Label>
                  <DropdownButton
                  title={majorValue}
                  id="major-dropdown"
                  variant="info"
                  onSelect={handleMajorSelect}
                    >
                          <Dropdown.Item eventKey="Engineering">Engineering</Dropdown.Item>
                          <Dropdown.Item eventKey="Science">Science</Dropdown.Item>
                          <Dropdown.Item eventKey="Communications">Communications</Dropdown.Item>
                          <Dropdown.Item eventKey="Education">Education</Dropdown.Item>
                  </DropdownButton>

              </Form>
              <fieldset>
                <Form.Label style={{ fontWeight: 'bold', marginTop: "1%" }}>Topic Preferences</Form.Label>
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
              <fieldset>
                <Form.Label style={{ fontWeight: 'bold', marginTop: '15px' }}>Typical Availability</Form.Label>
                  <Form>
                    <div className="topic-preferences">
                      <Form.Check inline label="Monday" id="day-1" />
                      <Form.Check inline label="Tuesday" id="day-2" />
                      <Form.Check inline label="Wednesday" id="day-3" />
                      <Form.Check inline label="Thursday" id="day-4" />
                      <Form.Check inline label="Friday" id="day-5" />
                      <Form.Check inline label="Saturday" id="day-6" />
                      <Form.Check inline label="Sunday" id="day-7" />
                    </div>
                  </Form>
              </fieldset>
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
