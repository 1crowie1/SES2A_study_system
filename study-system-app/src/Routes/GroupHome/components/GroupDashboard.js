import React from "react";
import { withRouter } from "react-router-dom";
import "./GroupDashboard.scss";

// Using history in props for routing to different components
const GroupDashboard = (props) => {

return (
  <React.Fragment>
  <div class="group-dashboard">
    <h1>48023 Programming Fundamentals</h1>
    <hr />

  </div>
  </React.Fragment>
);
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(GroupDashboard);
