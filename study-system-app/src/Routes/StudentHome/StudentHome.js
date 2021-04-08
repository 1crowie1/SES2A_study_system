import React from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";
//Import AdminLoginForm component
import StudentNavBar from "./components/StudentNavBar";

function StudentHome() {

  return (
      <div className="Registration">
        <Helmet>
          <title>Groupme</title>
        </Helmet>
        <StudentNavBar/>

      </div>
  );
}

export default StudentHome;
