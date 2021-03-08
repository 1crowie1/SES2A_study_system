import React from 'react';
import { Helmet } from "react-helmet";
import LoginForm from "./components/LoginForm";

function Login() {

  return (
      <div className="Login">
        <Helmet>
          <title>Login to your account</title>
        </Helmet>

        <LoginForm/>

      </div>
  );
}

export default Login;
