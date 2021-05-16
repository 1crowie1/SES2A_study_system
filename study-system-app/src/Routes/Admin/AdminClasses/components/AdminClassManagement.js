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
    <div className="heading">
      <h1>Class Management</h1>
      <div className="button-container">
        <Button>Requests</Button>
      </div>
    </div>
    <hr />
    <div className="class-view-container">
      <div className="participants-container">
        <div className="admin-container">
          <h2>Tutors</h2>
          <hr/>
          <div className="listview">
            {/* Lists admin users related to the class */}
          </div>
        </div>
        <div className="student-container">
          <h2>Students</h2>
          <hr/>
          <div className="listview">
            {/* Lists student users related to the class */}
          </div>
        </div>
      </div>

      <div className="groups-container">
        <div className="heading">
          <h2>Groups</h2>
          <div className="button-container">
            <Button className="edit-btn">Edit</Button>
            <Button className="add-btn">+</Button>
          </div>
        </div>
        <hr/>
        <div className="listview">
          {/* Lists groups created by admin users for this class */}
        </div>
      </div>
    </div>
  </div>
  </React.Fragment>
);
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(AdminClassManagement);
