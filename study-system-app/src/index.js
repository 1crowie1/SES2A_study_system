import React from 'react';
import ReactDOM from 'react-dom';
//BrowserRouter for routing between pages
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Login
} from "./Routes/Routes";
import './index.scss';

ReactDOM.render(
  <Router>
   <Switch>
     <Route exact path="/" component={Login} />
   </Switch>
 </Router>,
  document.getElementById('root')
);
