import React from 'react';
import ReactDOM from 'react-dom';
//BrowserRouter for routing between pages
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  LandingPage,
  Login,
  Registration,
  StudentHome,
  StudentProfile
} from "./Routes/Routes";
import "./index.scss";

ReactDOM.render(
  <Router>
   <Switch>
     <Route exact path="/" component={LandingPage} />
     <Route path="/Login" component={Login} />
     <Route path="/Registration" component={Registration} />
     <Route path="/StudentHome" component={StudentHome} />
     <Route path="/StudentProfile" component={StudentProfile} />
   </Switch>
 </Router>,
  document.getElementById('root')
);
