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
      <Card.Body style={{ width: '100%' }}>
        <Card.Title className="card-title">Create your student profile</Card.Title>
        <Form className="student-courses">
            <Form.Label style={{ fontWeight: 'bold', minWidth: '100%'}}>Course</Form.Label>
            <Dropdown>
              <DropdownButton
              title={courseValue}
              id="course-dropdown"
              variant="info"
              onSelect={handleCourseSelect}
                >
                      <Dropdown.Item eventKey="Engineering">Engineering</Dropdown.Item>
                      <Dropdown.Item eventKey="Science">Science</Dropdown.Item>
                      <Dropdown.Item eventKey="Education">Education</Dropdown.Item>
                      <Dropdown.Item eventKey="Business">Business</Dropdown.Item>
                      <Dropdown.Item eventKey="Economics">Economics</Dropdown.Item>
                      <Dropdown.Item eventKey="Arts">Arts</Dropdown.Item>
                      <Dropdown.Item eventKey="Nursing">Nursing</Dropdown.Item>
                      <Dropdown.Item eventKey="Medicine">Medicine</Dropdown.Item>
              </DropdownButton>
            </Dropdown>

            <Form.Label style={{ fontWeight: 'bold', marginTop: "2%", minWidth: '100%'}}>Major</Form.Label>
            <DropdownButton
            title={majorValue}
            id="major-dropdown"
            variant="info"
            onSelect={handleMajorSelect}
              >
                    <Dropdown.Item eventKey="Degree">Degree</Dropdown.Item>
                    <Dropdown.Item eventKey="Software">Software</Dropdown.Item>
                    <Dropdown.Item eventKey="Mechanical">Mechanical</Dropdown.Item>
                    <Dropdown.Item eventKey="Mechatronic">Mechatronic</Dropdown.Item>
                    <Dropdown.Item eventKey="Electrical">Electrical</Dropdown.Item>
                    <Dropdown.Item eventKey="Civil">Civil</Dropdown.Item>
                    <Dropdown.Item eventKey="Environmental">Environmental</Dropdown.Item>
                    <Dropdown.Item eventKey="Flexible">Flexible</Dropdown.Item>
                    <Dropdown.Item eventKey="Physics">Physics</Dropdown.Item>
                    <Dropdown.Item eventKey="Computer">Computer</Dropdown.Item>
                    <Dropdown.Item eventKey="Chemical">Chemical</Dropdown.Item>
                    <Dropdown.Item eventKey="Biomedical">Biomedical</Dropdown.Item>
                    <Dropdown.Item eventKey="Nano">Nano</Dropdown.Item>
                    <Dropdown.Item eventKey="Political">Political</Dropdown.Item>
            </DropdownButton>

        </Form>

          <Form className="topic-preferences">
          <Form.Label style={{ fontWeight: 'bold', marginTop: "2%", minWidth: '100%' }}>Topic Preferences</Form.Label>
              <Form.Text id="passwordHelpInline" muted>
                Please select three topic preferences.
              </Form.Text>
              <DropdownButton
              title="preference 1"
              id="preferences-dropdown"
              variant="info"
            //  onSelect={handleTopic1Select}
              >
                      {/* Engineering Related */}
                      <Dropdown.Item eventKey="Programming">Programming</Dropdown.Item>
                      <Dropdown.Item eventKey="Databases">Databases</Dropdown.Item>
                      <Dropdown.Item eventKey="Electronics">Electronics</Dropdown.Item>
                      <Dropdown.Item eventKey="CAD">CAD</Dropdown.Item>
                      <Dropdown.Item eventKey="Physical Modelling">Physical Modelling</Dropdown.Item>
                      <Dropdown.Item eventKey="Cybersecurity">Cybersecurity</Dropdown.Item>
                      <Dropdown.Item eventKey="Networking">Networking</Dropdown.Item>
                      <Dropdown.Item eventKey="Robotics">Robotics</Dropdown.Item>
                      <Dropdown.Item eventKey="Aeronautics">Aeronautics</Dropdown.Item>
                      <Dropdown.Item eventKey="Environmental">Environmental</Dropdown.Item>
                      <Dropdown.Item eventKey="Mining">Mining</Dropdown.Item>
                      <Dropdown.Item eventKey="Automotive">Automotive</Dropdown.Item>
                      <Dropdown.Item eventKey="Renewables">Renewables</Dropdown.Item>
                      <Dropdown.Item eventKey="Machine Learning">Machine Learning</Dropdown.Item>
                      {/* Business Related */}
                      <Dropdown.Item eventKey="Finance">Finance</Dropdown.Item>
                      <Dropdown.Item eventKey="Economics">Economics</Dropdown.Item>
                      <Dropdown.Item eventKey="Stocks">Stocks</Dropdown.Item>
                      <Dropdown.Item eventKey="Management">Management</Dropdown.Item>
                      <Dropdown.Item eventKey="Accounting">Accounting</Dropdown.Item>
                      <Dropdown.Item eventKey="Marketing">Marketing</Dropdown.Item>
                      <Dropdown.Item eventKey="Sales">Sales</Dropdown.Item>
                      <Dropdown.Item eventKey="Entrepreneurship">Entrepreneurship</Dropdown.Item>
                      <Dropdown.Item eventKey="Commercialisation">Commercialisation</Dropdown.Item>
                      {/* Science Related */}
                      <Dropdown.Item eventKey="Nanoscience">Nanoscience</Dropdown.Item>
                      <Dropdown.Item eventKey="Maths">Maths</Dropdown.Item>
                      <Dropdown.Item eventKey="Physics">Physics</Dropdown.Item>
                      <Dropdown.Item eventKey="Chemistry">Chemistry</Dropdown.Item>
                      <Dropdown.Item eventKey="Biology">Biology</Dropdown.Item>
                      <Dropdown.Item eventKey="Biomedical">Biomedical</Dropdown.Item>
                      {/* Medicine Related */}
                      <Dropdown.Item eventKey="Medical Machines">Medical Machines</Dropdown.Item>
                      <Dropdown.Item eventKey="Hospital Management">Hospital Management</Dropdown.Item>
                      <Dropdown.Item eventKey="Aged Care">Aged Care</Dropdown.Item>
                      <Dropdown.Item eventKey="Anatomy">Anatomy</Dropdown.Item>
                      <Dropdown.Item eventKey="Surgery">Surgery</Dropdown.Item>
                      {/* Education Related */}
                      <Dropdown.Item eventKey="Teaching Ethics">Teaching Ethics</Dropdown.Item>
                      <Dropdown.Item eventKey="Secondary Maths">Secondary Maths</Dropdown.Item>
                      <Dropdown.Item eventKey="Secondary Science">Secondary Science</Dropdown.Item>
                      <Dropdown.Item eventKey="Secondary History">Secondary History</Dropdown.Item>
                      <Dropdown.Item eventKey="Secondary Geography">Secondary Geography</Dropdown.Item>
                      <Dropdown.Item eventKey="Secondary English">Secondary English</Dropdown.Item>
                      <Dropdown.Item eventKey="Secondary TAS">Secondary TAS</Dropdown.Item>
                      <Dropdown.Item eventKey="Primary Maths">Primary Maths</Dropdown.Item>
                      <Dropdown.Item eventKey="Primary Science">Primary Science</Dropdown.Item>
                      <Dropdown.Item eventKey="Primary History">Primary History</Dropdown.Item>
                      <Dropdown.Item eventKey="Primary Geography">Primary Geography</Dropdown.Item>
                      <Dropdown.Item eventKey="Primary English">Primary English</Dropdown.Item>
                      <Dropdown.Item eventKey="Primary TAS">Primary TAS</Dropdown.Item>
                      {/* Arts Related */}
                      <Dropdown.Item eventKey="Painting">Painting</Dropdown.Item>
                      <Dropdown.Item eventKey="Art History">Art History</Dropdown.Item>
                      <Dropdown.Item eventKey="Sculpting">Sculpting</Dropdown.Item>
                      <Dropdown.Item eventKey="Music">Music</Dropdown.Item>
              </DropdownButton>

              <DropdownButton
              title="preference 2"
              id="preferences-dropdown"
              variant="info"
            //  onSelect={handleTopic2Select}
              >
                      {/* Engineering Related */}
                      <Dropdown.Item eventKey="Programming">Programming</Dropdown.Item>
                      <Dropdown.Item eventKey="Databases">Databases</Dropdown.Item>
                      <Dropdown.Item eventKey="Electronics">Electronics</Dropdown.Item>
                      <Dropdown.Item eventKey="CAD">CAD</Dropdown.Item>
                      <Dropdown.Item eventKey="Physical Modelling">Physical Modelling</Dropdown.Item>
                      <Dropdown.Item eventKey="Cybersecurity">Cybersecurity</Dropdown.Item>
                      <Dropdown.Item eventKey="Networking">Networking</Dropdown.Item>
                      <Dropdown.Item eventKey="Robotics">Robotics</Dropdown.Item>
                      <Dropdown.Item eventKey="Aeronautics">Aeronautics</Dropdown.Item>
                      <Dropdown.Item eventKey="Environmental">Environmental</Dropdown.Item>
                      <Dropdown.Item eventKey="Mining">Mining</Dropdown.Item>
                      <Dropdown.Item eventKey="Automotive">Automotive</Dropdown.Item>
                      <Dropdown.Item eventKey="Renewables">Renewables</Dropdown.Item>
                      <Dropdown.Item eventKey="Machine Learning">Machine Learning</Dropdown.Item>
                      {/* Business Related */}
                      <Dropdown.Item eventKey="Finance">Finance</Dropdown.Item>
                      <Dropdown.Item eventKey="Economics">Economics</Dropdown.Item>
                      <Dropdown.Item eventKey="Stocks">Stocks</Dropdown.Item>
                      <Dropdown.Item eventKey="Management">Management</Dropdown.Item>
                      <Dropdown.Item eventKey="Accounting">Accounting</Dropdown.Item>
                      <Dropdown.Item eventKey="Marketing">Marketing</Dropdown.Item>
                      <Dropdown.Item eventKey="Sales">Sales</Dropdown.Item>
                      <Dropdown.Item eventKey="Entrepreneurship">Entrepreneurship</Dropdown.Item>
                      <Dropdown.Item eventKey="Commercialisation">Commercialisation</Dropdown.Item>
                      {/* Science Related */}
                      <Dropdown.Item eventKey="Nanoscience">Nanoscience</Dropdown.Item>
                      <Dropdown.Item eventKey="Maths">Maths</Dropdown.Item>
                      <Dropdown.Item eventKey="Physics">Physics</Dropdown.Item>
                      <Dropdown.Item eventKey="Chemistry">Chemistry</Dropdown.Item>
                      <Dropdown.Item eventKey="Biology">Biology</Dropdown.Item>
                      <Dropdown.Item eventKey="Biomedical">Biomedical</Dropdown.Item>
                      {/* Medicine Related */}
                      <Dropdown.Item eventKey="Medical Machines">Medical Machines</Dropdown.Item>
                      <Dropdown.Item eventKey="Hospital Management">Hospital Management</Dropdown.Item>
                      <Dropdown.Item eventKey="Aged Care">Aged Care</Dropdown.Item>
                      <Dropdown.Item eventKey="Anatomy">Anatomy</Dropdown.Item>
                      <Dropdown.Item eventKey="Surgery">Surgery</Dropdown.Item>
                      {/* Education Related */}
                      <Dropdown.Item eventKey="Teaching Ethics">Teaching Ethics</Dropdown.Item>
                      <Dropdown.Item eventKey="Secondary Maths">Secondary Maths</Dropdown.Item>
                      <Dropdown.Item eventKey="Secondary Science">Secondary Science</Dropdown.Item>
                      <Dropdown.Item eventKey="Secondary History">Secondary History</Dropdown.Item>
                      <Dropdown.Item eventKey="Secondary Geography">Secondary Geography</Dropdown.Item>
                      <Dropdown.Item eventKey="Secondary English">Secondary English</Dropdown.Item>
                      <Dropdown.Item eventKey="Secondary TAS">Secondary TAS</Dropdown.Item>
                      <Dropdown.Item eventKey="Primary Maths">Primary Maths</Dropdown.Item>
                      <Dropdown.Item eventKey="Primary Science">Primary Science</Dropdown.Item>
                      <Dropdown.Item eventKey="Primary History">Primary History</Dropdown.Item>
                      <Dropdown.Item eventKey="Primary Geography">Primary Geography</Dropdown.Item>
                      <Dropdown.Item eventKey="Primary English">Primary English</Dropdown.Item>
                      <Dropdown.Item eventKey="Primary TAS">Primary TAS</Dropdown.Item>
                      {/* Arts Related */}
                      <Dropdown.Item eventKey="Painting">Painting</Dropdown.Item>
                      <Dropdown.Item eventKey="Art History">Art History</Dropdown.Item>
                      <Dropdown.Item eventKey="Sculpting">Sculpting</Dropdown.Item>
                      <Dropdown.Item eventKey="Music">Music</Dropdown.Item>
              </DropdownButton>

              <DropdownButton
              title="preference 3"
              id="preferences-dropdown"
              variant="info"
            //  onSelect={handleTopic3Select}
              >
                      {/* Engineering Related */}
                      <Dropdown.Item eventKey="Programming">Programming</Dropdown.Item>
                      <Dropdown.Item eventKey="Databases">Databases</Dropdown.Item>
                      <Dropdown.Item eventKey="Electronics">Electronics</Dropdown.Item>
                      <Dropdown.Item eventKey="CAD">CAD</Dropdown.Item>
                      <Dropdown.Item eventKey="Physical Modelling">Physical Modelling</Dropdown.Item>
                      <Dropdown.Item eventKey="Cybersecurity">Cybersecurity</Dropdown.Item>
                      <Dropdown.Item eventKey="Networking">Networking</Dropdown.Item>
                      <Dropdown.Item eventKey="Robotics">Robotics</Dropdown.Item>
                      <Dropdown.Item eventKey="Aeronautics">Aeronautics</Dropdown.Item>
                      <Dropdown.Item eventKey="Environmental">Environmental</Dropdown.Item>
                      <Dropdown.Item eventKey="Mining">Mining</Dropdown.Item>
                      <Dropdown.Item eventKey="Automotive">Automotive</Dropdown.Item>
                      <Dropdown.Item eventKey="Renewables">Renewables</Dropdown.Item>
                      <Dropdown.Item eventKey="Machine Learning">Machine Learning</Dropdown.Item>
                      {/* Business Related */}
                      <Dropdown.Item eventKey="Finance">Finance</Dropdown.Item>
                      <Dropdown.Item eventKey="Economics">Economics</Dropdown.Item>
                      <Dropdown.Item eventKey="Stocks">Stocks</Dropdown.Item>
                      <Dropdown.Item eventKey="Management">Management</Dropdown.Item>
                      <Dropdown.Item eventKey="Accounting">Accounting</Dropdown.Item>
                      <Dropdown.Item eventKey="Marketing">Marketing</Dropdown.Item>
                      <Dropdown.Item eventKey="Sales">Sales</Dropdown.Item>
                      <Dropdown.Item eventKey="Entrepreneurship">Entrepreneurship</Dropdown.Item>
                      <Dropdown.Item eventKey="Commercialisation">Commercialisation</Dropdown.Item>
                      {/* Science Related */}
                      <Dropdown.Item eventKey="Nanoscience">Nanoscience</Dropdown.Item>
                      <Dropdown.Item eventKey="Maths">Maths</Dropdown.Item>
                      <Dropdown.Item eventKey="Physics">Physics</Dropdown.Item>
                      <Dropdown.Item eventKey="Chemistry">Chemistry</Dropdown.Item>
                      <Dropdown.Item eventKey="Biology">Biology</Dropdown.Item>
                      <Dropdown.Item eventKey="Biomedical">Biomedical</Dropdown.Item>
                      {/* Medicine Related */}
                      <Dropdown.Item eventKey="Medical Machines">Medical Machines</Dropdown.Item>
                      <Dropdown.Item eventKey="Hospital Management">Hospital Management</Dropdown.Item>
                      <Dropdown.Item eventKey="Aged Care">Aged Care</Dropdown.Item>
                      <Dropdown.Item eventKey="Anatomy">Anatomy</Dropdown.Item>
                      <Dropdown.Item eventKey="Surgery">Surgery</Dropdown.Item>
                      {/* Education Related */}
                      <Dropdown.Item eventKey="Teaching Ethics">Teaching Ethics</Dropdown.Item>
                      <Dropdown.Item eventKey="Secondary Maths">Secondary Maths</Dropdown.Item>
                      <Dropdown.Item eventKey="Secondary Science">Secondary Science</Dropdown.Item>
                      <Dropdown.Item eventKey="Secondary History">Secondary History</Dropdown.Item>
                      <Dropdown.Item eventKey="Secondary Geography">Secondary Geography</Dropdown.Item>
                      <Dropdown.Item eventKey="Secondary English">Secondary English</Dropdown.Item>
                      <Dropdown.Item eventKey="Secondary TAS">Secondary TAS</Dropdown.Item>
                      <Dropdown.Item eventKey="Primary Maths">Primary Maths</Dropdown.Item>
                      <Dropdown.Item eventKey="Primary Science">Primary Science</Dropdown.Item>
                      <Dropdown.Item eventKey="Primary History">Primary History</Dropdown.Item>
                      <Dropdown.Item eventKey="Primary Geography">Primary Geography</Dropdown.Item>
                      <Dropdown.Item eventKey="Primary English">Primary English</Dropdown.Item>
                      <Dropdown.Item eventKey="Primary TAS">Primary TAS</Dropdown.Item>
                      {/* Arts Related */}
                      <Dropdown.Item eventKey="Painting">Painting</Dropdown.Item>
                      <Dropdown.Item eventKey="Art History">Art History</Dropdown.Item>
                      <Dropdown.Item eventKey="Sculpting">Sculpting</Dropdown.Item>
                      <Dropdown.Item eventKey="Music">Music</Dropdown.Item>
              </DropdownButton>
          </Form>


          <Form.Label style={{ fontWeight: 'bold', marginTop: '2%', minWidth: '100%' }}>Typical Availability</Form.Label>
            <Form>
              <div className="typical-availability">
                <Form.Check inline label="Monday" id="day-1" /*onChange={() => setMonday(!monday)}*//>
                <Form.Check inline label="Tuesday" id="day-2"  /*onChange={() => setTuesday(!tuesday)}*//>
                <Form.Check inline label="Wednesday" id="day-3"  /*onChange={() => setWednesday(!wednesday)}*//>
                <Form.Check inline label="Thursday" id="day-4"  /*onChange={() => setThursday(!thursday)}*//>
                <Form.Check inline label="Friday" id="day-5"  /*onChange={() => setFriday(!friday)}*//>
                <Form.Check inline label="Saturday" id="day-6"  /*onChange={() => setSaturday(!saturday)}*//>
                <Form.Check inline label="Sunday" id="day-7"  /*onChange={() => setSunday(!sunday)}*//>
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
