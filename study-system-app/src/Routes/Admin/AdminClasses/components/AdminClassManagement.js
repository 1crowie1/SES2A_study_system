import React from "react";
import { withRouter } from "react-router-dom";
import "./AdminClassManagement.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// Using history in props for routing to different components
const AdminClassManagement = (props) => {

return (
  <React.Fragment>
    {/* Contains classes for a course */}
    {/* Directed from a selected course */}
  <div class="course-classes">
    <h1>Class Management</h1>
    <div className="button-container">
      <Button>Requests</Button>
    </div>
    <hr />
    <div className="card-container">
      <Card className="wide-card">
        {/* Link Database to this */}
        {/* Contains a list of classes of the course related to the user */}
      </Card>
    </div>
  </div>
  </React.Fragment>
);
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(AdminClassManagement);
