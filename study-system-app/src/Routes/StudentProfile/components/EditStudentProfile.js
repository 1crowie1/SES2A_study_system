import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {CardDeck, Card, Button, Form, Col, DropdownButton, Dropdown} from "react-bootstrap";
import "./EditStudentProfile.scss";
import firebase from "firebase"


// Using history in props for routing to different components
const EditStudentProfile = (props) => {

  const db = firebase.firestore();
  const user = firebase.auth().currentUser;

  //Add data to firestore///////////////////////////////////////////////////

  const [show, toggleShow] = useState(true);

  const [courseValue,setCourseValue]=useState('Select Course');
  const handleCourseSelect=(e)=>{
    setCourseValue(e)
  }

  const [majorValue,setMajorValue]=useState('Select Major');
  const handleMajorSelect=(e)=>{
    setMajorValue(e)
  }

  const [topic1Value,setTopic1Value]=useState('Select First Topic');
  const handleTopic1Select=(e)=>{
    setTopic1Value(e)
  }

  const [topic2Value,setTopic2Value]=useState('Select Second Topic');
  const handleTopic2Select=(e)=>{
    setTopic2Value(e)
  }

  const [topic3Value,setTopic3Value]=useState('Select Third Topic');
  const handleTopic3Select=(e)=>{
    setTopic3Value(e)
  }

  const [monday, setMonday]=useState(false);
  const [tuesday, setTuesday]=useState(false);
  const [wednesday, setWednesday]=useState(false);
  const [thursday, setThursday]=useState(false);
  const [friday, setFriday]=useState(false);
  const [saturday, setSaturday]=useState(false);
  const [sunday, setSunday]=useState(false);

  function editUserProfile() {
    db.collection("users").doc(user.uid).update({
      course: courseValue,
      major: majorValue,
      availability: [monday, tuesday, wednesday, thursday, friday, saturday, sunday],
      topics: [topic1Value, topic2Value, topic3Value]
    });
    toggleShow(!show)
    setMonday(false)
    setTuesday(false)
    setWednesday(false)
    setThursday(false)
    setFriday(false)
    setSaturday(false)
    setSunday(false)

    setMondayRead()
    setTuesdayRead()
    setWednesdayRead()
    setThursdayRead()
    setFridayRead()
    setSaturdayRead()
    setSundayRead()
  }

  //Read data from firestore/////////////////////////////////////////////////

  const[courseRead, setCourseRead] = useState([]);

  const[majorRead, setMajorRead] = useState([]);

  const[topic1Read, setTopic1Read] = useState([]);
  const[topic2Read, setTopic2Read] = useState([]);
  const[topic3Read, setTopic3Read] = useState([]);

  const[mondayRead, setMondayRead] = useState([]);
  const[tuesdayRead, setTuesdayRead] = useState([]);
  const[wednesdayRead, setWednesdayRead] = useState([]);
  const[thursdayRead, setThursdayRead] = useState([]);
  const[fridayRead, setFridayRead] = useState([]);
  const[saturdayRead, setSaturdayRead] = useState([]);
  const[sundayRead, setSundayRead] = useState([]);

function readData() {
  const user = firebase.auth().currentUser;
  db.collection("users").doc(user.uid)
  .onSnapshot((doc) => {
      setCourseRead(doc.data().course)
      setMajorRead(doc.data().major)

      if (doc.data().topics) {
        setTopic1Read(doc.data().topics[0])
        setTopic2Read(doc.data().topics[1])
        setTopic3Read(doc.data().topics[2])

      }

      if (doc.data().availability) {
        if (doc.data().availability[0]) {
          setMondayRead('Monday\xa0\xa0\xa0')
        }
        if (doc.data().availability[1]) {
          setTuesdayRead('Tuesday\xa0\xa0\xa0')
        }
        if (doc.data().availability[2]) {
          setWednesdayRead('Wednesday\xa0\xa0\xa0')
        }
        if (doc.data().availability[3]) {
          setThursdayRead('Thursday\xa0\xa0\xa0')
        }
        if (doc.data().availability[4]) {
          setFridayRead('Friday\xa0\xa0\xa0')
        }
        if (doc.data().availability[5]) {
          setSaturdayRead('Saturday\xa0\xa0\xa0')
        }
        if (doc.data().availability[6]) {
          setSundayRead('Sunday\xa0\xa0\xa0')
        }
      }
  });
 }

 setTimeout(() => {  readData(); }, 700);

  ////////////////////////////////////////////////////////////////////////////

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
               <Form.Label style={{ fontWeight: 'bold' }}>Course</Form.Label>
               <Form.Label id="profile-values"> {courseRead} </Form.Label>

           </Form>
           <Form className="major">
               <Form.Label style={{ fontWeight: 'bold'}}>Major</Form.Label>
               <Form.Label id="profile-values"> {majorRead} </Form.Label>

           </Form>

             <Form.Label style={{ fontWeight: 'bold' }}>Topic Preferences</Form.Label>
             <Form>
               <div className="topic-preferences">
                <Form.Label id="topic-values"> {topic1Read} </Form.Label>
                <Form.Label id="topic-values"> {topic2Read} </Form.Label>
                <Form.Label id="topic-values"> {topic3Read} </Form.Label>
               </div>
             </Form>


            <Form.Label style={{ fontWeight: 'bold'}}>Typical Availability</Form.Label>
             <Form>
               <div className="topic-preferences">
                <Form.Label id="availability-values"> {mondayRead} </Form.Label>
                <Form.Label id="availability-values"> {tuesdayRead} </Form.Label>
                <Form.Label id="availability-values"> {wednesdayRead} </Form.Label>
                <Form.Label id="availability-values"> {thursdayRead} </Form.Label>
                <Form.Label id="availability-values"> {fridayRead} </Form.Label>
                <Form.Label id="availability-values"> {saturdayRead} </Form.Label>
                <Form.Label id="availability-values"> {sundayRead} </Form.Label>
               </div>
             </Form>

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
              <Card.Body style={{ width: '100%' }}>
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
                    title={topic1Value}
                    id="preferences-dropdown"
                    variant="info"
                    onSelect={handleTopic1Select}
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
                    title={topic2Value}
                    id="preferences-dropdown"
                    variant="info"
                    onSelect={handleTopic2Select}
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
                    title={topic3Value}
                    id="preferences-dropdown"
                    variant="info"
                    onSelect={handleTopic3Select}
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
                    <div className="typical-availablity">
                      <Form.Check inline label="Monday" id="day-1" onChange={() => setMonday(!monday)}/>
                      <Form.Check inline label="Tuesday" id="day-2"  onChange={() => setTuesday(!tuesday)}/>
                      <Form.Check inline label="Wednesday" id="day-3"  onChange={() => setWednesday(!wednesday)}/>
                      <Form.Check inline label="Thursday" id="day-4"  onChange={() => setThursday(!thursday)}/>
                      <Form.Check inline label="Friday" id="day-5"  onChange={() => setFriday(!friday)}/>
                      <Form.Check inline label="Saturday" id="day-6"  onChange={() => setSaturday(!saturday)}/>
                      <Form.Check inline label="Sunday" id="day-7"  onChange={() => setSunday(!sunday)}/>
                    </div>
                  </Form>

              </Card.Body>
              <Card.Footer style={{ width: '100%' }}>
                <button type="button" className="edit-button" onClick={() => editUserProfile()}>
                   Save Profile
                </button>
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
