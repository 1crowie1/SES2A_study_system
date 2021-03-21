import React from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";
//Import LoginForm component
import LoginNavBar from "../Login/components/LoginNavBar";
import LandText from "./components/LandText";

import LandingImage from '../../Assets/undraw-teamwork.svg';

var sectionStyle = {
   backgroundImage: `url(${LandingImage})`,
   backgroundRepeat: "no-repeat",
   backgroundSize: "50%",
   backgroundPosition: '80% 45%',
   position: 'absolute',
   /* Set rules to fill background */
   minHeight: '100%',
   /* Set up proportionate scaling */
   width: '100%',
   height: 'auto',
}

function LandingPage() {

  return (
      <div className="Registration" style={sectionStyle}>
        <Helmet>
          <title>Groupme | The study group arrangement solution</title>
        </Helmet>
        <LoginNavBar/>
        <LandText/>
      </div>
  );
}

export default LandingPage;
