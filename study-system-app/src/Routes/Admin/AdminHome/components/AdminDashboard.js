import React from "react";
import { withRouter } from "react-router-dom";
import "./AdminDashboard.scss";
import Card from "react-bootstrap/Card";

// Using history in props for routing to different components
const AdminDashboard = (props) => {

return (
  <React.Fragment>
    {/* Displays cards of courses/classes with requests from students (number of request priority) */}
  <div class="admin-dashboard">
    <h1>Dashboard</h1>
    <hr />
    <div className="card-container">
      <Card className="square-card" onClick={() => props.history.push("/CourseManagement")}>
        {/* Link Database to this */}
        {/* Contains courses related to user */}
        <div className="card-label">
          Course 1
        </div>
      </Card>
      <Card className="square-card" onClick={() => props.history.push("/CourseManagement")}>
        {/* Link Database to this */}
        {/* Contains courses related to user */}
        <div className="card-label">
          Course 2
        </div>
      </Card>
      <Card className="square-card" onClick={() => props.history.push("/CourseManagement")}>
        {/* Link Database to this */}
        {/* Contains courses related to user */}
        <div className="card-label">
          Course 3
        </div>
      </Card>
      <Card className="square-card" onClick={() => props.history.push("/CourseManagement")}>
        {/* Link Database to this */}
        {/* Contains courses related to user */}
        <div className="card-label">
          Course 4
        </div>
      </Card>
      <Card className="square-card" onClick={() => props.history.push("/CourseManagement")}>
        {/* Link Database to this */}
        {/* Contains courses related to user */}
        <div className="card-label">
          Course 5
        </div>
      </Card>
    </div>
  </div>
  </React.Fragment>
);
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(AdminDashboard);
