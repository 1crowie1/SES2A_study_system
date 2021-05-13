import React from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";
//Import LoginForm component
import StudentNavBar from "../StudentHome/components/StudentNavBar";
import ContactAdmin from "./components/ContactAdmin";

function Contact() {

  return (
      <div className="Registration">
        <Helmet>
          <title>Groupme | Contact</title>
        </Helmet>
        <StudentNavBar/>
        <ContactAdmin/>

      </div>
  );
}

export default Contact;
