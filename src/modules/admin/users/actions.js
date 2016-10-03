import fetch from 'isomorphic-fetch'
import Constants from 'constants'
import { hashHistory } from 'react-router'

// MODE
export const MODE_SET = 'MODE_SET'
export const MODE_CREATE = 'MODE_CREATE'
export const MODE_READ = 'MODE_READ'

export const setMode = (mode) => ({
    type: MODE_SET,
    mode: mode
})

// CREATE
export const REQUEST_CREATE_USER = 'REQUEST_CREATE_USER'
export const REQUEST_CREATE_USER_FAIL = 'REQUEST_CREATE_USER_FAIL'
export const RESPONSE_CREATE_USER = 'RESPONSE_CREATE_USER'

export const requestCreateUser = (first_name, last_name) => ({
    type: REQUEST_CREATE_USER,
    first_name: first_name,
    last_name: last_name
})
export const requestCreateUserFail = (message, exception) => ({
    type: REQUEST_CREATE_USER_FAIL,
    message: message,
    exception : exception
})
export const responseCreateUser = (id) => ({
    type: RESPONSE_CREATE_USER,
    id: id
})

// LIST
export const REQUEST_LIST_USERS = 'REQUEST_LIST_USERS'
export const REQUEST_LIST_USERS_FAIL = 'REQUEST_LIST_USERS_FAIL'
export const RESPONSE_LIST_USERS = 'RESPONSE_LIST_USERS'

export const requestListUsers = () => ({
    type: REQUEST_LIST_USERS
})
export const requestListUsersFail = (message) => ({
    type: REQUEST_LIST_USERS_FAIL,
    message: message
})
export const responseListUsers = (json) => ({
    type: RESPONSE_LIST_USERS,
    users: json.map(user => user)
})

// DELETE
export const REQUEST_DELETE_USER = 'REQUEST_DELETE_USER'
export const REQUEST_DELETE_USER_FAIL = 'REQUEST_DELETE_USER_FAIL'
export const RESPONSE_DELETE_USER = 'RESPONSE_DELETE_USER'

export const requestDeleteUser = (id) => ({
    type: REQUEST_DELETE_USER,
    id: id
})
export const requestDeleteUserFail = (message) => ({
    type: REQUEST_DELETE_USER_FAIL,
    message: message
})
export const responseDeleteUser = (id) => ({
    type: RESPONSE_DELETE_USER,
    id: id
})

// GET
export const REQUEST_GET_USER = 'REQUEST_GET_USER'
export const REQUEST_GET_USER_FAIL = 'REQUEST_GET_USER_FAIL'
export const RESPONSE_GET_USER = 'RESPONSE_GET_USER'

export const requestGetUser = (id) => ({
    type: REQUEST_GET_USER,
    id: id
})
export const requestGetUserFail = (message) => ({
    type: REQUEST_GET_USER_FAIL,
    message: message
})
export const responseGetUser = (json) => ({
    type: RESPONSE_GET_USER,
    user: json
})

// OTHER
export const INVALIDATE_USERS = 'INVALIDATE_USERS'

export function invalidateUsers() {
    return {
        type: INVALIDATE_USERS
    }
}

// exported functions

export function listUsers() {
  return (dispatch, getState) => {
    let state = getState()
    if (!state.loading) { 
        return dispatch(doListUsers()) 
    }
  }
}
export function createUser(first_name, last_name) {
  return (dispatch, getState) => {
    let state = getState()
    if (!state.creating) { 
        return dispatch(doCreateUser(first_name, last_name))
    }
  }
}
export function getUser(id) {
  return (dispatch, getState) => {
    return dispatch(doGetUser(id)) // TODO: Check for user deleting already?
  }
}
export function deleteUser(id) {
  return (dispatch, getState) => {
    return dispatch(doDeleteUser(id)) // TODO: Check for user deleting already?
  }
}

function doListUsers() {
    return (dispatch) => {
        dispatch(requestListUsers())
        return fetch('/api/users')
            .then(checkStatus)
            .then(response => response.json())
            .then(json => dispatch(responseListUsers(json)))
            .catch(e => dispatch(requestListUsersFail("Unable to list users.")));
    }
}

function doGetUsers() {
    return (dispatch) => {
        dispatch(requestGetUser(id))
        return fetch('/api/users' + id)
            .then(checkStatus)
            .then(response => response.json())
            .then(json => dispatch(responseGetUser(json)))
            .catch(e => dispatch(requestGetUserFail("Unable to list users.")));
    }
}

responseCreateUser
function doCreateUser(first_name, last_name) {
    return (dispatch) => {
        dispatch(requestCreateUser())
        return fetch('/api/users', {method:'post', body: JSON.stringify({first_name:first_name, last_name: last_name})})
            .then(checkStatus)
            .then(response => {
                let id = response.headers.get('location').split('/').pop()
                dispatch(responseCreateUser(id))
                hashHistory.push('/admin/user/'+ id)
            })
            .catch(e => dispatch(requestCreateUserFail("Unable to create user.", e)));
    }
}
function doDeleteUser(id) {
    return (dispatch) => {
        dispatch(requestDeleteUser(id))
        return fetch('/api/users/' + id, {method:'delete'})
            .then(checkStatus)
            .then(dispatch(responseDeleteUser(id)))
            .catch(e => dispatch(requestDeleteUserFail("Unable to delete user." + e)));
    }
}

// state

const initialState = {
    users: [],
    creating: false,
    loading: false,
    list_visible: true,
    create_visible: false,
    error_visible: false,
    error_message: null
}

// reducers

export function userManagementReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_CREATE_USER:
            return { 
                ...state, 
                creating: true
            }
            
        case RESPONSE_CREATE_USER:
            return { 
                ...state, 
                creating: false,
                create_visible: false,
                list_visible: true
            }

        case REQUEST_DELETE_USER:
            return { 
                ...state, 
                users : state.users.map((user) => { return  { ...user, deleting: user.id === action.id } })
            }

        case RESPONSE_DELETE_USER:
            return { 
                ...state, 
                users : state.users.filter(function(user) { return user.id != action.id } ) 
            }

        case REQUEST_LIST_USERS:
            return { 
                ...state, 
                loading : true 
            }

        case RESPONSE_LIST_USERS:
            return { 
                ...state,
                loading: false,
                list_visible: true,
                users: action.users.map((user) => { return { ...user, deleting: false, updating: false } })
            }

        case MODE_SET:
            switch (action.mode) {
                case MODE_CREATE:
                    return { 
                        ...state,
                        create_visible: true,
                        list_visible: false
                    };
                case MODE_READ:
                    return { 
                        ...state,
                        create_visible: false,
                        list_visible: true
                    };
            } 
        case REQUEST_CREATE_USER_FAIL:
        case REQUEST_GET_USER_FAIL:
        case REQUEST_DELETE_USER_FAIL:
        case REQUEST_LIST_USERS_FAIL:
            console.log(action.exception)
            return { 
                ...state,
                loading: false,
                list_visible: false,
                users: null,
                error_visible: true,
                error_message: action.message,
                create_visible: false
            };

        default:
            return state
    }
}


// Utility functions
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

