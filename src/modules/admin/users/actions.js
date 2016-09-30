import fetch from 'isomorphic-fetch'

// action types
export const MODE_SET = 'MODE_SET'
export const MODE_CREATE = 'MODE_CREATE'
export const MODE_READ = 'MODE_READ'
export const INVALIDATE_USERS = 'INVALIDATE_USERS'
export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const REQUEST_USERS_FAIL = 'REQUEST_USERS_FAIL'

// Action Methods
export const setMode = (mode) => ({
    type: MODE_SET,
    mode: mode
})
export const invalidateUsers = () => ({
    type: INVALIDATE_USERS
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

export function fetchUsers() {
    return (dispatch) => {
        dispatch(requestUsers())
        return fetch(`http://localhost/users`)
            .then(response => response.json())
            .then(json => dispatch(receiveUsers(json)))
            .catch(e=>dispatch(requestUsersFail("Unable to load users at this time.")));
    }
}

function shouldFetchUsers(state) {
    if (!state.users.data) {
        return true
    } else if (state.users.loading) {
        return false
    } else {
        return state.users.stale
    }
}

export function fetchUsersIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchUsers(getState())) {
            return dispatch(fetchUsers())
        } else {
            return Promise.resolve()
        }
    }
}

// state

const initialState = {
    data: [],    
    loading: false,
    stale: true,
    list_visible: true,
    create_visible: false,
    error_visible: false,
    error_message: null
}

// reducers

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case INVALIDATE_USERS:
            return Object.assign({}, state, {
                stale: true
            })
        case REQUEST_USERS:
            return Object.assign({}, state, {
                stale: false,
                loading: true
            })
        case RECEIVE_USERS:
            return Object.assign({}, state, {
                stale: false,
                loading: false,
                list_visible: true,
                data: action.users
            })
        case REQUEST_USERS_FAIL:
            return Object.assign({}, state, {
                stale: false,
                loading: false,
                list_visible: false,
                data: null,
                error_visible: true,
                error_message: action.message,
                create_visible: false
            });

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
