import React from "react";
import { withRouter } from "react-router-dom";
import "./AllRequests.scss";
import Card from "react-bootstrap/Card";

// Using history in props for routing to different components
const AllRequests = (props) => {

return (
  <React.Fragment>
    {/* Displays cards of all requests from students to this admin (recent request priority) */}
  <div class="request-inbox">
    <h1>Inbox</h1>
    <hr />
    <div className="request-card-container">
      <Card className="wide-card" onClick={() => props.history.push("/RequestsInbox")}>
        {/* Link Database to this */}
        {/* Contains a request from student to admin user */}
        Request 1
      </Card>
      <Card className="wide-card" onClick={() => props.history.push("/RequestsInbox")}>
        {/* Link Database to this */}
        {/* Contains a request from student to admin user */}
        Request 2
      </Card>
      <Card className="wide-card" onClick={() => props.history.push("/RequestsInbox")}>
        {/* Link Database to this */}
        {/* Contains a request from student to admin user */}
        Request 3
      </Card>
      <Card className="wide-card" onClick={() => props.history.push("/RequestsInbox")}>
        {/* Link Database to this */}
        {/* Contains a request from student to admin user */}
        Request 4
      </Card>
      <Card className="wide-card" onClick={() => props.history.push("/RequestsInbox")}>
        {/* Link Database to this */}
        {/* Contains a request from student to admin user */}
        Request 5
      </Card>
    </div>
  </div>
  </React.Fragment>
);
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(AllRequests);
