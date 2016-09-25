import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

import document from './globals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './app';
import Home from './modules/home'
import Estimates from './modules/estimates'
import Invoices from './modules/invoices'
import People from './modules/people'
import Expenses from './modules/expenses'
import Timesheets from './modules/timesheets'
import Reporting from './modules/reporting'

ReactDOM.render(
    <Router history={hashHistory}>
        <Route component={App}>
            <Route path="/" component={Home}/>
            <Route path="/estimates" component={Estimates}/>
            <Route path="/invoices" component={Invoices}/>
            <Route path="/people" component={People}/>
            <Route path="/expenses" component={Expenses}/>
            <Route path="/timesheets" component={Timesheets}/>
            <Route path="/reporting" component={Reporting}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
