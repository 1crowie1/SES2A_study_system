import React from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";
//Import AdminLoginForm component
import RegForm from "./components/RegForm";
import LoginNavBar from "../StudentLogin/components/LoginNavBar";

function Registration() {

  return (
      <div className="Registration">
        <Helmet>
          <title>Create account - Groupme</title>
        </Helmet>
        <RegForm/>

      </div>
  );
}

export default Registration;
