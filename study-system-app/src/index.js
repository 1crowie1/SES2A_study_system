import React from 'react';
import ReactDOM from 'react-dom';
//BrowserRouter for routing between pages
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Login,
  Registration,
  StudentHome
} from "./Routes/Routes";
import "./index.scss";

ReactDOM.render(
  <Router>
   <Switch>
     <Route exact path="/" component={Login} />
     <Route path="/Registration" component={Registration} />
     <Route path="/StudentHome" component={StudentHome} />
   </Switch>
 </Router>,
  document.getElementById('root')
);
