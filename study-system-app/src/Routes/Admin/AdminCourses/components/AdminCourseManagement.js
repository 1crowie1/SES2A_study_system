import React from "react";
import { withRouter } from "react-router-dom";
import "./AdminCourseManagement.scss";
import Card from "react-bootstrap/Card";

// Using history in props for routing to different components
const AdminCourseManagement = (props) => {

return (
  <React.Fragment>
  <div class="course-management">
    <h1>Course Management</h1>
    <hr />
    <div className="card-container">
      <Card className="wide-card" onClick={() => props.history.push("/ClassManagement")}>
        {/* Link Database to this */}
        {/* Contains classes of the course related to user */}
      </Card>
    </div>
  </div>
  </React.Fragment>
);
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(AdminCourseManagement);
