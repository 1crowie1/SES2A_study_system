import React from 'react';
import ReactDOM from 'react-dom';
//BrowserRouter for routing between pages
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    AdminLogin,
    LandingPage,
    Registration,
    StudentHome, StudentLogin, UserSelect,
    StudentProfile, AdminHome, CourseManagement, ClassManagement, RequestsInbox,
    GroupHome,
    Contact,
    StudentRegistration,
    ProtectedRoute
} from "./Routes/Routes";
import "./index.scss";
import AdminCourseManagement from "./Routes/Admin/AdminHome/AdminHome";
import firebase from 'firebase';
import { AuthProvider } from './Routes/Auth';

const app = firebase.initializeApp({
  apiKey: "AIzaSyAf02jIhvwfN5LutBBEgFjBIvHPWLEnk0Q",
  authDomain: "groupformationsystem.firebaseapp.com",
  databaseURL: "https://groupformationsystem-default-rtdb.firebaseio.com",
  projectId: "groupformationsystem",
  storageBucket: "groupformationsystem.appspot.com",
  messagingSenderId: "912375308149",
  appId: "1:912375308149:web:6932a8593b14559538bd3c",
  measurementId: "G-13XJR1BL4W"
});

ReactDOM.render(
  <AuthProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={UserSelect} />
        <Route path="/StudentLogin" component={StudentLogin} />
        <Route path="/AdminLogin" component={AdminLogin} />
        <Route path="/Registration" component={Registration} />
        <Route path="/StudentRegistration" component={StudentRegistration} />
        <ProtectedRoute path="/AdminHome" component={AdminHome} />
        <ProtectedRoute path="/RequestsInbox" component={RequestsInbox} />
        <ProtectedRoute path="/CourseManagement" component={CourseManagement} />
        <ProtectedRoute path="/ClassManagement" component={ClassManagement} />
        <ProtectedRoute path="/StudentHome" component={StudentHome} />
        <ProtectedRoute path="/StudentProfile" component={StudentProfile} />
        <ProtectedRoute path="/GroupHome" component={GroupHome} />
        <ProtectedRoute path="/Contact" component={Contact} />
      </Switch>
    </Router>
  </AuthProvider>,
  document.getElementById('root')
);
