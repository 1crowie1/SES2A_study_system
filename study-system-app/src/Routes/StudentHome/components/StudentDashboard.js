import React from "react";
import { withRouter } from "react-router-dom";
import {Card, Button} from "react-bootstrap";
import CardBackground from "../../../Assets/class-background.jpg";
import "./StudentDashboard.scss";

// Using history in props for routing to different components
const StudentDashboard = (props) => {

return (
  <React.Fragment>
  <div class="student-dashboard">
    <h1>Dashboard</h1>
    <hr />
    <Card style={{ width: '18rem' }}
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
    </Card>
  </div>
  </React.Fragment>
);
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(StudentDashboard);
