import fetch from 'isomorphic-fetch'
import Constants from 'constants'

// MODE
export const MODE_SET = 'MODE_SET'
export const MODE_CREATE = 'MODE_CREATE'
export const MODE_READ = 'MODE_READ'

export const setMode = (mode) => ({
    type: MODE_SET,
    mode: mode
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
    loading: false,
    list_visible: true,
    create_visible: false,
    error_visible: false,
    error_message: null
}

// reducers

export function userManagementReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_DELETE_USER:
            var users = state.users.map((user) => {                
                if (user.id === action.id)  
                    { return  { ...user, deleting: true } }  
                else 
                    { return { ...user } }
            });
            return { ...state, users:users }

        case RESPONSE_DELETE_USER:
            var users = state.users.filter(function(user)  {                
                return user.id != action.id
            });
            return { ...state, users:users }
        case REQUEST_LIST_USERS:
            return Object.assign({}, state, {
                loading: true
            })
        case RESPONSE_LIST_USERS:
            return Object.assign({}, state, {
                loading: false,
                list_visible: true,
                users: action.users.map((user) => { return { ...user, deleting:false, deleted:false } })
            })

        case MODE_SET:
            switch (action.mode) {
                case MODE_CREATE:
                    return Object.assign({}, state, {
                        create_visible: true,
                        list_visible: false
                    });
                case MODE_READ:
                    return Object.assign({}, state, {
                        create_visible: false,
                        list_visible: true
                    });
            }

        case REQUEST_DELETE_USER_FAIL:
        case REQUEST_LIST_USERS_FAIL:
            return Object.assign({}, state, {
                loading: false,
                list_visible: false,
                users: null,
                error_visible: true,
                error_message: action.message,
                create_visible: false
            });
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
