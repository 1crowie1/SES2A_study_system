import React from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";
//Import LoginForm component
import StudentNavBar from "../StudentHome/components/StudentNavBar";
import GroupDashboard from "./components/GroupDashboard";

function GroupHome() {

  return (
      <div className="Group">
        <Helmet>
          <title>Groupme </title>
        </Helmet>
        <StudentNavBar/>
        <GroupDashboard/>

      </div>
  );
}

export default GroupHome;
