import fetch from 'isomorphic-fetch'
import Constants from 'constants'

// action types
export const MODE_SET = 'MODE_SET'
export const MODE_CREATE = 'MODE_CREATE'
export const MODE_READ = 'MODE_READ'
export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const REQUEST_USERS_FAIL = 'REQUEST_USERS_FAIL'
export const INVALIDATE_USERS = 'INVALIDATE_USERS'

// Action Methods
export const setMode = (mode) => ({
    type: MODE_SET,
    mode: mode
})

export const requestUsers = () => ({
    type: REQUEST_USERS
})
export const requestUsersFail = (message) => ({
    type: REQUEST_USERS_FAIL,
    message: message
})
export const receiveUsers = (json) => ({
    type: RECEIVE_USERS,
    users: json.map(user => user)
})
export function invalidateUsers() {
    return {
        type: INVALIDATE_USERS
    }
}

// exported functions

export function fetchUsers() {
  return (dispatch, getState) => {
    if (shouldFetch(getState())) {
      return dispatch(doFetchUsers())
    }
  }
}

// private functions

function shouldFetch(state) {
    if (!state.users) {
        return true
    } else if (state.loading) {
        return false
    } else {
        return state.stale
    }
}

function doFetchUsers() {
    return (dispatch) => {
        dispatch(requestUsers())
        return fetch('/api/users')
            .then(response => response.json())
            .then(json => dispatch(receiveUsers(json)))
            .catch(e => dispatch(requestUsersFail("Unable to load users at this time.")));
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
        case REQUEST_USERS:
            return Object.assign({}, state, {
                loading: true,
                stale: false
            })
        case RECEIVE_USERS:
            return Object.assign({}, state, {
                loading: false,
                list_visible: true,
                users: action.users,
                stale: false
            })
        case REQUEST_USERS_FAIL:
            return Object.assign({}, state, {
                loading: false,
                list_visible: false,
                users: null,
                error_visible: true,
                error_message: action.message,
                create_visible: false
            });
        case INVALIDATE_USERS:
            return Object.assign({}, state, {
                stale: true
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
        default:
            return state
    }
}
