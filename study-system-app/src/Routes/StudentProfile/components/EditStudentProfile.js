import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {CardDeck, Card, Button, Form, Col, DropdownButton, Dropdown} from "react-bootstrap";
import "./EditStudentProfile.scss";
import firebase from "firebase"


// Using history in props for routing to different components
const EditStudentProfile = (props) => {

  const user = firebase.auth().currentUser;
  const db = firebase.firestore();
  const doc = db.collection("users").doc(user.uid);

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


  db.collection("users").doc(user.uid)
  .onSnapshot((doc) => {
      setCourseRead(doc.data().course)
      setMajorRead(doc.data().major)

      setTopic1Read(doc.data().topics[0])
      setTopic2Read(doc.data().topics[1])
      setTopic3Read(doc.data().topics[2])

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
  });
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
           <fieldset>
             <Form.Label style={{ fontWeight: 'bold' }}>Topic Preferences</Form.Label>
             <Form>
               <div className="topic-preferences">
                <Form.Label id="topic-values"> {topic1Read} </Form.Label>
                <Form.Label id="topic-values"> {topic2Read} </Form.Label>
                <Form.Label id="topic-values"> {topic3Read} </Form.Label>
               </div>
             </Form>
           </fieldset>
           <fieldset>
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

                  <Form.Label style={{ fontWeight: 'bold', marginTop: "3%"}}>Major</Form.Label>
                  <DropdownButton
                  title={majorValue}
                  id="major-dropdown"
                  variant="info"
                  onSelect={handleMajorSelect}
                    >
                          <Dropdown.Item eventKey="Software">Software</Dropdown.Item>
                          <Dropdown.Item eventKey="Mechanical">Mechanical</Dropdown.Item>
                          <Dropdown.Item eventKey="Electrical">Electrical</Dropdown.Item>
                          <Dropdown.Item eventKey="Civil">Civil</Dropdown.Item>
                  </DropdownButton>

              </Form>
              <fieldset>
                <Form.Label style={{ fontWeight: 'bold', marginTop: "3%" }}>Topic Preferences</Form.Label>
                <Form>
                  <div className="topic-preferences">
                    <DropdownButton
                    title={topic1Value}
                    id="preferences-dropdown"
                    variant="info"
                    onSelect={handleTopic1Select}
                    >
                            <Dropdown.Item eventKey="Programming">Programming</Dropdown.Item>
                            <Dropdown.Item eventKey="Databases">Databases</Dropdown.Item>
                            <Dropdown.Item eventKey="Electronics">Electronics</Dropdown.Item>
                            <Dropdown.Item eventKey="Nanoscience">Nanoscience</Dropdown.Item>
                            <Dropdown.Item eventKey="Finance">Finance</Dropdown.Item>
                            <Dropdown.Item eventKey="Economics">Economics</Dropdown.Item>
                            <Dropdown.Item eventKey="Maths">Maths</Dropdown.Item>
                            <Dropdown.Item eventKey="Physics">Physics</Dropdown.Item>
                            <Dropdown.Item eventKey="Medical Machines">Medical Machines</Dropdown.Item>
                            <Dropdown.Item eventKey="Hospital Management">Hospital Management</Dropdown.Item>
                            <Dropdown.Item eventKey="Aged Care">Aged Care</Dropdown.Item>
                            <Dropdown.Item eventKey="Anatomy">Anatomy</Dropdown.Item>
                    </DropdownButton>

                    <DropdownButton
                    title={topic2Value}
                    id="preferences-dropdown"
                    variant="info"
                    onSelect={handleTopic2Select}
                    >
                            <Dropdown.Item eventKey="Programming">Programming</Dropdown.Item>
                            <Dropdown.Item eventKey="Databases">Databases</Dropdown.Item>
                            <Dropdown.Item eventKey="Electronics">Electronics</Dropdown.Item>
                            <Dropdown.Item eventKey="Nanoscience">Nanoscience</Dropdown.Item>
                            <Dropdown.Item eventKey="Finance">Finance</Dropdown.Item>
                            <Dropdown.Item eventKey="Economics">Economics</Dropdown.Item>
                            <Dropdown.Item eventKey="Maths">Maths</Dropdown.Item>
                            <Dropdown.Item eventKey="Physics">Physics</Dropdown.Item>
                            <Dropdown.Item eventKey="Medical Machines">Medical Machines</Dropdown.Item>
                            <Dropdown.Item eventKey="Hospital Management">Hospital Management</Dropdown.Item>
                            <Dropdown.Item eventKey="Aged Care">Aged Care</Dropdown.Item>
                            <Dropdown.Item eventKey="Anatomy">Anatomy</Dropdown.Item>
                    </DropdownButton>

                    <DropdownButton
                    title={topic3Value}
                    id="preferences-dropdown"
                    variant="info"
                    onSelect={handleTopic3Select}
                    >
                            <Dropdown.Item eventKey="Programming">Programming</Dropdown.Item>
                            <Dropdown.Item eventKey="Databases">Databases</Dropdown.Item>
                            <Dropdown.Item eventKey="Electronics">Electronics</Dropdown.Item>
                            <Dropdown.Item eventKey="Nanoscience">Nanoscience</Dropdown.Item>
                            <Dropdown.Item eventKey="Finance">Finance</Dropdown.Item>
                            <Dropdown.Item eventKey="Economics">Economics</Dropdown.Item>
                            <Dropdown.Item eventKey="Maths">Maths</Dropdown.Item>
                            <Dropdown.Item eventKey="Physics">Physics</Dropdown.Item>
                            <Dropdown.Item eventKey="Medical Machines">Medical Machines</Dropdown.Item>
                            <Dropdown.Item eventKey="Hospital Management">Hospital Management</Dropdown.Item>
                            <Dropdown.Item eventKey="Aged Care">Aged Care</Dropdown.Item>
                            <Dropdown.Item eventKey="Anatomy">Anatomy</Dropdown.Item>
                    </DropdownButton>
                  </div>
                  <Form.Text id="passwordHelpInline" muted>
                  Please select three topic preferences.
                </Form.Text>
                </Form>
              </fieldset>
              <fieldset>
                <Form.Label style={{ fontWeight: 'bold', marginTop: '15px' }}>Typical Availability</Form.Label>
                  <Form>
                    <div className="topic-preferences">
                      <Form.Check inline label="Monday" id="day-1" onChange={() => setMonday(!monday)}/>
                      <Form.Check inline label="Tuesday" id="day-2"  onChange={() => setTuesday(!tuesday)}/>
                      <Form.Check inline label="Wednesday" id="day-3"  onChange={() => setWednesday(!wednesday)}/>
                      <Form.Check inline label="Thursday" id="day-4"  onChange={() => setThursday(!thursday)}/>
                      <Form.Check inline label="Friday" id="day-5"  onChange={() => setFriday(!friday)}/>
                      <Form.Check inline label="Saturday" id="day-6"  onChange={() => setSaturday(!saturday)}/>
                      <Form.Check inline label="Sunday" id="day-7"  onChange={() => setSunday(!sunday)}/>
                    </div>
                  </Form>
              </fieldset>
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
