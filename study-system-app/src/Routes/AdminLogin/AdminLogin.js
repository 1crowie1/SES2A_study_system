import React from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";
//Import LoginForm component
import AdminLoginForm from "./components/AdminLoginForm";

function AdminLogin() {

  return (
      <div className="AdminLogin">
        <Helmet>
          <title>Sign in to continue | Groupme</title>
        </Helmet>
        <AdminLoginForm/>

      </div>
  );
}

export default AdminLogin;
