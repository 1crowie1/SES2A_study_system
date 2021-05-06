import React from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";
import AdminNavBar from "../../Admin/components/AdminNavBar";
import AdminDashboard from "./components/AdminDashboard";
//Import LoginForm component

function AdminHome() {

  return (
      <div className="Classes">
        <Helmet>
          <title>Dashboard | GroupMe</title>
        </Helmet>
        <AdminNavBar/>
        <AdminDashboard/>

      </div>
  );
}

export default AdminHome;
