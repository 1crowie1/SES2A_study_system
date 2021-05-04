import React from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";
//Import LoginForm component
import StudentNavBar from "../StudentHome/components/StudentNavBar";
import GroupsDash from "./components/GroupsDash";

function Groups() {

  return (
      <div className="Group">
        <Helmet>
          <title>Groupme </title>
        </Helmet>
        <StudentNavBar/>
        <GroupsDash/>

      </div>
  );
}

export default Groups;
