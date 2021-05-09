import React from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";
import CreateProfileForm from "./components/CreateProfileForm";

function StudentRegistration() {

  return (
      <div className="StudentRegistration">
        <Helmet>
          <title>Groupme | User setup</title>
        </Helmet>
        <CreateProfileForm/>
      </div>
  );
}

export default StudentRegistration;
