import React from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";
import AdminNavBar from "../../Admin/components/AdminNavBar";
import AdminCourseManagement from "./components/AdminCourseManagement";
//Import LoginForm component

function AdminCourses() {

  return (
      <div className="Classes">
        <Helmet>
          <title>Course Management | GroupMe</title>
        </Helmet>
        <AdminNavBar/>
        <AdminCourseManagement/>

      </div>
  );
}

export default AdminCourses;
