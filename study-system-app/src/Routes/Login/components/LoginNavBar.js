import React from "react";
import { withRouter } from "react-router-dom";

import "./LoginNavBar.scss";

// Using history in props for routing to different components
const LoginNavBar = (props) => {

  return (
    <div>
      <h> Doing </h>
    </div>
  );
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(LoginNavBar);
