import React from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";
//Import LoginForm component
import StudentLoginForm from "./components/StudentLoginForm";

function StudentLogin() {

  return (
      <div className="StudentLogin">
        <Helmet>
          <title>Sign in to continue - Groupme</title>
        </Helmet>
        <StudentLoginForm/>

      </div>
  );
}

export default StudentLogin;
