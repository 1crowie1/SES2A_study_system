import React from "react";
import { withRouter } from "react-router-dom";
import "./StudentDashboard.scss";

// Using history in props for routing to different components
const StudentDashboard = (props) => {

return (
  <React.Fragment>
  <div class="student-dashboard">
    <h1>Dashboard</h1>
    <hr />
  </div>
  </React.Fragment>
);
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(StudentDashboard);
