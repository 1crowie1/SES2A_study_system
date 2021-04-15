import React from "react";
import { withRouter } from "react-router-dom";
import {Table} from "react-bootstrap";
import "./GroupsDash.scss";

// Using history in props for routing to different components
const GroupsDash = (props) => {

return (
  <React.Fragment>
  <div class="groups-dashboard">
    <h1>Groups</h1>
    <hr />
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Group</th>
          <th>Subject</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
          className="group-1"
          onClick={() => props.history.push("/GroupHome")}
          >Team 4</td>
          <td>48023 Programming Fundamentals</td>
        </tr>
      </tbody>
    </Table>

  </div>
  </React.Fragment>
);
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(GroupsDash);
