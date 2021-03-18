import React from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";
//Import LoginForm component
import RegForm from "./components/RegForm";
import LoginNavBar from "../Login/components/LoginNavBar";

function Registration() {

  return (
      <div className="Registration">
        <Helmet>
          <title>Create account - GroupMe</title>
        </Helmet>
        <LoginNavBar/>
        <RegForm/>

      </div>
  );
}

export default Registration;
