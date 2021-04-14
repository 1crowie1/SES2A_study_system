import React from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";
//Import AdminLoginForm component
import AdminLoginForm from "./components/AdminLoginForm";

function AdminLogin() {

  return (
      <div className="Login">
        <Helmet>
          <title>Admin Login | GroupMe</title>
        </Helmet>
        <AdminLoginForm/>

      </div>
  );
}

export default AdminLogin;
