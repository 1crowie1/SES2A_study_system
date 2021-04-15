import React from 'react';
import ReactDOM from 'react-dom';
//BrowserRouter for routing between pages
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    AdminLogin,
    LandingPage,
    Registration,
    StudentHome, StudentLogin, UserSelect,
    StudentProfile,
    GroupHome,
    Groups
} from "./Routes/Routes";
import "./index.scss";

ReactDOM.render(
  <Router>
   <Switch>
     <Route exact path="/" component={UserSelect} />
     <Route path="/StudentLogin" component={StudentLogin} />
     <Route path="/AdminLogin" component={AdminLogin} />
     <Route path="/Registration" component={Registration} />
     <Route path="/StudentHome" component={StudentHome} />
     <Route path="/StudentProfile" component={StudentProfile} />
     <Route path="/GroupHome" component={GroupHome} />
     <Route path="/Groups" component={Groups} />
   </Switch>
 </Router>,
  document.getElementById('root')
);
