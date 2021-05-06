import React from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";
//Import LoginForm component
import StudentNavBar from "./components/StudentNavBar";
import StudentDashboard from "./components/StudentDashboard";

function StudentHome() {

  return (
      <div className="Classes">
        <Helmet>
          <title>Groupme | Dashboard </title>
        </Helmet>
        <StudentNavBar/>
        <StudentDashboard/>

      </div>
  );
}

export default StudentHome;
