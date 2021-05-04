import React from "react";
import { withRouter } from "react-router-dom";
import {Button} from "react-bootstrap";
import "./LandText.scss";


const LandText= (props) => {

  return (
    <React.Fragment>
    <div className="LandText">
      <p className="Intro">
      Lorem Ipsum has been the <br/>
      industry’s standard dummy text
      </p>
      <p className="Paragraph">
      Lorem Ipsum has been the <br/>
      industry’s standard dummy text.
      </p>

      <Button variant="custom" block size="lg" type="submit"
      onClick={() => props.history.push("/Registration")}
      >
        Sign up for free
      </Button>

    </div>
    </React.Fragment>
  )
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(LandText);
