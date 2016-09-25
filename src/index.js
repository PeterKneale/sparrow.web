import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './store';

import document from './globals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './theme/theme.css';

import App from './app';
import Home from './modules/home'
import Estimates from './modules/estimates'
import Invoices from './modules/invoices'
import People from './modules/people'
import Clients from './modules/people/client/clients'
import Client from './modules/people/client/client'
import Staffs from './modules/people/staffs'
import Staff from './modules/people/staff'
import Contractors from './modules/people/contractors'
import Contractor from './modules/people/contractor'
import Expenses from './modules/expenses'
import Timesheets from './modules/timesheets'
import Reporting from './modules/reporting'

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route component={App}>
                <Route path="/" component={Home}/>

                <Route path="/estimates" component={Estimates}/>
                <Route path="/invoices" component={Invoices}/>
                <Route path="/people" component={People}>

                    <Route path="/people/clients" component={Clients}>
                        <Route path="/people/clients/:id" component={Client}/>
                    </Route>

                    <Route path="/people/staff" component={Staffs}>
                        <Route path="/people/staff/:id" component={Staff}/>
                    </Route>

                    <Route path="/people/contractors" component={Contractors}>
                        <Route path="/people/contractors/:id" component={Contractor}/>
                    </Route>

                </Route>
                <Route path="/expenses" component={Expenses}/>
                <Route path="/timesheets" component={Timesheets}/>
                <Route path="/reporting" component={Reporting}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
