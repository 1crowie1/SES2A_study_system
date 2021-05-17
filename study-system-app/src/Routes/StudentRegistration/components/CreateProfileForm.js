import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {Form, DropdownButton, Card, Dropdown} from "react-bootstrap";
import "./CreateProfileForm.scss";

const CreateProfileForm = (props) => {

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
    <div className="StudentLoginBox">
    {/* react-boostrap class to make the card have a shadow around it.
        To allow for shadows had to set shadows to true in SASS bootstrap folder
      */}
    <div class="shadow p-3 mb-5 bg-white rounded">
    <Card className="create-profile-card" style={{ border: 'none'}}>
      <Card.Body>
        <Card.Title className="card-title">Create your student profile</Card.Title>

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
        </Form>
        <Form>
            <Form.Label style={{ fontWeight: 'bold'}}>Major</Form.Label>
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

        <Form>
          <Form.Label style={{ fontWeight: 'bold'}}>Topic Preferences</Form.Label>
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
        <Form>
          <Form.Label style={{ fontWeight: 'bold'}}>Typical Availability</Form.Label>
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

        <hr/>

        <button type="button" className="edit-button">Create Profile</button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </React.Fragment>
  )
};

export default withRouter(CreateProfileForm);
