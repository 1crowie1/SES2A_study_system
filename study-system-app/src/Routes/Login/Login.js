import React from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";
//Import LoginForm component
import LoginForm from "./components/LoginForm";
import LoginNavBar from "./components/LoginNavBar";

function Login() {

  return (
      <div className="Login">
        <Helmet>
          <title>Sign in to continue - GroupMe</title>
        </Helmet>
        <LoginNavBar/>
        <LoginForm/>

      </div>
  );
}

export default Login;
