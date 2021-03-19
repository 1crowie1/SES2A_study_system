import React from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";
//Import LoginForm component
import LoginNavBar from "../Login/components/LoginNavBar";
import LandText from "./components/LandText";

import LandingImage from '../../Assets/Home-Landing.jpg';

var sectionStyle = {
   backgroundImage: `url(${LandingImage})`,
   position: 'absolute',
   /* Set rules to fill background */
   minHeight: '100%',
   minWidth: '1024px',
   /* Set up proportionate scaling */
   width: '100%',
   height: 'auto',
   top: '0',
   left: '0'
}

function LandingPage() {

  return (
      <div className="Registration" style={sectionStyle}>
        <Helmet>
          <title>Groupme</title>
        </Helmet>
        <LoginNavBar/>
        <LandText/>
      </div>
  );
}

export default LandingPage;
