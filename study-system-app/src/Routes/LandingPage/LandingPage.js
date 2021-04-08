import React from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";
//Import AdminLoginForm component
import LoginNavBar from "../StudentLogin/components/LoginNavBar";
import LandText from "./components/LandText";
import Media from 'react-media';

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
      <div id="parent">
        <Media query="(max-width: 599px)">
          {matches =>
            matches ? (
              <div className="Registration">
                <Helmet>
                  <title>Groupme | The study group arrangement solution</title>
                </Helmet>
                <LoginNavBar/>
                <LandText/>
              </div>
            ) : (
              <div className="Registration" style={sectionStyle}>
                <Helmet>
                  <title>Groupme | The study group arrangement solution</title>
                </Helmet>
                <LoginNavBar/>
                <LandText/>
              </div>
            )
          }
        </Media>
      </div>
  );
}

export default LandingPage;
