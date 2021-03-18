import React from 'react';
import ReactDOM from 'react-dom';
//BrowserRouter for routing between pages
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Login,
  Registration
} from "./Routes/Routes";
import "./index.scss";

ReactDOM.render(
  <Router>
   <Switch>
     <Route exact path="/" component={Login} />
     <Route path="/Registration" component={Registration} />
   </Switch>
 </Router>,
  document.getElementById('root')
);
