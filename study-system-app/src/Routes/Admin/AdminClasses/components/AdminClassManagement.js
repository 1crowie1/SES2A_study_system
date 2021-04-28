import React from "react";
import { withRouter } from "react-router-dom";
import "./AdminClassManagement.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// Using history in props for routing to different components
const AdminClassManagement = (props) => {

return (
  <React.Fragment>
  <div class="course-classes">
    <h1>Classes</h1>
    <div className="button-container">
      <Button>Requests</Button>
    </div>
    <hr />
    <div className="card-container">
      <Card className="wide-card">
        {/* Link Database to this */}
        {/* Contains a list of groups linked to this class */}
      </Card>
    </div>
  </div>
  </React.Fragment>
);
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(AdminClassManagement);
