import React from 'react';
import ReactDOM from 'react-dom';
//BrowserRouter for routing between pages
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    AdminLogin,
    StudentLogin, UserSelect
} from "./Routes/Routes";
import './index.scss';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={UserSelect} />
            <Route exact path="/StudentLogin" component={StudentLogin} />
            <Route exact path="/AdminLogin" component={AdminLogin} />
        </Switch>
    </Router>,
    document.getElementById('root')
);