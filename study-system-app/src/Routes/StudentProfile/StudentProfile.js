import React from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";
//Import LoginForm component
import StudentNavBar from "../StudentHome/components/StudentNavBar";
import EditStudentProfile from "./components/EditStudentProfile";

function StudentProfile() {

  return (
      <div className="Registration">
        <Helmet>
          <title>Groupme | User Profile</title>
        </Helmet>
        <StudentNavBar/>
        <EditStudentProfile/>

      </div>
  );
}

export default StudentProfile;
