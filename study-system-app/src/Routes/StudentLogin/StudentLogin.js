import React from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";
//Import AdminLoginForm component
import StudentLoginForm from "./components/StudentLoginForm";

function StudentLogin() {

  return (
      <div className="Login">
        <Helmet>
          <title>Student Login | GroupMe</title>
        </Helmet>
        <StudentLoginForm/>

      </div>
  );
}

export default StudentLogin;
