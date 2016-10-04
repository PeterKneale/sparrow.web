import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
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

import Admin from './modules/admin/index'
import Dashboard from './modules/admin/dashboard'
import Users from './modules/admin/users/index'
import User from './modules/admin/users/user'
import CreateUser from './modules/admin/users/create'

import Account from './modules/admin/account'

import Settings from './modules/admin/settings'

import Expenses from './modules/expenses'
import Timesheets from './modules/timesheets'
import Reporting from './modules/reporting'

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>

                <IndexRoute component={Home} />
                <Route path="/estimates" component={Estimates}/>

                <Route path="/invoices" component={Invoices}/>

                <Route path="/admin" component={Admin}>
                    <IndexRoute component={Dashboard} />
                    <Route path="/admin/users/create" component={CreateUser}/>
                    <Route path="/admin/users" component={Users}/>
                    <Route path="/admin/user/:id" component={User}/>
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
