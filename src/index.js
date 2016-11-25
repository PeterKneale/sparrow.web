import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import Home from './areas/home'

// Devices
import { listDevices } from "./areas/devices/actions"
import DevicesLayout from './areas/devices/layout'
import DevicesList from './areas/devices/list'

// Users
import UsersLayout from './areas/users/layout'
import UsersList from './areas/users/list'
import UsersView from './areas/users/view'
import UsersEdit from './areas/users/edit'
import UsersCreate from './areas/users/create'

import { getUser, listUsers } from "./areas/users/actions"

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>

                <IndexRoute component={Home} />
                <Route path="/areas/users" component={UsersLayout}>
                    <IndexRoute component={UsersList} onEnter={()=>store.dispatch(listUsers()) }/>
                    <Route path="/areas/users/create" component={UsersCreate}/>
                    <Route path="/areas/users/view/:id" component={UsersView} onEnter={(state)=>store.dispatch(getUser(state.params.id)) }/>
                    <Route path="/areas/users/edit/:id" component={UsersEdit} onEnter={(state)=>store.dispatch(getUser(state.params.id)) }/>
                </Route>

                <Route path="/areas/devices" component={DevicesLayout}>
                    <IndexRoute component={DevicesList} onEnter={()=>store.dispatch(listDevices()) }/>
                </Route>

            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);