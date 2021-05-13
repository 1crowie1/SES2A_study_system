import React from "react";
import { withRouter } from "react-router-dom";
import "./AdminCourseManagement.scss";
import Card from "react-bootstrap/Card";

// Using history in props for routing to different components
const AdminCourseManagement = (props) => {

return (
  <React.Fragment>
    {/* Displays courses related to user */}
  <div class="course-management">
    <h1>Course Management</h1>
    <hr />
    <div className="card-container">
      <Card className="wide-card" onClick={() => props.history.push("/ClassManagement")}>
        {/* Link Database to this */}
        {/* Contains all courses related to user */}
        Class 1
      </Card>
      <Card className="wide-card" onClick={() => props.history.push("/ClassManagement")}>
        {/* Link Database to this */}
        {/* Contains all courses related to user */}
        Class 2
      </Card>
      <Card className="wide-card" onClick={() => props.history.push("/ClassManagement")}>
        {/* Link Database to this */}
        {/* Contains all courses related to user */}
        Class 3
      </Card>
      <Card className="wide-card" onClick={() => props.history.push("/ClassManagement")}>
        {/* Link Database to this */}
        {/* Contains all courses related to user */}
        Class 4
      </Card>
      <Card className="wide-card" onClick={() => props.history.push("/ClassManagement")}>
        {/* Link Database to this */}
        {/* Contains all courses related to user */}
        Class 5
      </Card>
    </div>
  </div>
  </React.Fragment>
);
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(AdminCourseManagement);
