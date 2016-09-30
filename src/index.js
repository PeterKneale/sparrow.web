import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './store'

import document from './globals'
import 'bootstrap/less/bootstrap.less'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './theme/theme.css'

import App from './app'
import Home from './modules/home'
import Estimates from './modules/estimates'
import Invoices from './modules/invoices'

import Admin from './modules/admin'
import Users from './modules/admin/users/index'
import User from './modules/admin/users/user'
import Account from './modules/admin/account'
import Settings from './modules/admin/settings'

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
                
                <Route path="/admin" component={Admin}>
                    <Route path="/admin/users" component={Users}>
                        <Route path="/admin/users/:id" component={Users}/>
                    </Route>
                    <Route path="/admin/account" component={Account}/>
                    <Route path="/admin/settings" component={Settings}/>
                </Route>
                
                <Route path="/expenses" component={Expenses}/>

                <Route path="/timesheets" component={Timesheets}/>

                <Route path="/reporting" component={Reporting}/>

            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
