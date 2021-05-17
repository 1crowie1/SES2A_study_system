import React from 'react';
import ReactDOM from 'react-dom';
//BrowserRouter for routing between pages
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    AdminLogin,
    Registration,
    StudentHome, StudentLogin, UserSelect,
    StudentProfile,
    GroupHome,
    Groups,
    Contact,
    StudentRegistration
} from "./Routes/Routes";
import "./index.scss";
import AdminHome from "./Routes/AdminHome/AdminHome";
import firebase from 'firebase';

const config =
{
  apiKey: "AIzaSyAf02jIhvwfN5LutBBEgFjBIvHPWLEnk0Q",
  authDomain: "groupformationsystem.firebaseapp.com",
  databaseURL: "https://groupformationsystem-default-rtdb.firebaseio.com",
  projectId: "groupformationsystem",
  storageBucket: "groupformationsystem.appspot.com",
  messagingSenderId: "912375308149",
  appId: "1:912375308149:web:6932a8593b14559538bd3c",
  measurementId: "G-13XJR1BL4W"
};

if(firebase.apps.length === 0) {
  const app = firebase.initializeApp(config);
}

ReactDOM.render(
  <Router>
   <Switch>
     <Route exact path="/" component={UserSelect} />
     <Route path="/StudentLogin" component={StudentLogin} />
     <Route path="/AdminLogin" component={AdminLogin} />
     <Route path="/Registration" component={Registration} />
     <Route path="/AdminHome" component={AdminHome} />
     <Route path="/StudentHome" component={StudentHome} />
     <Route path="/StudentProfile" component={StudentProfile} />
     <Route path="/GroupHome" component={GroupHome} />
     <Route path="/Groups" component={Groups} />
     <Route path="/Contact" component={Contact} />
     <Route path="/StudentRegistration" component={StudentRegistration} />
   </Switch>
 </Router>,
  document.getElementById('root')
);

/* -- UNDEFINED --
<Route path="/AdminHome" component={AdminHome} />
<Route path="/CourseManagement" component={CourseManagement} />
<Route path="/ClassManagement" component={ClassManagement} />
*/
