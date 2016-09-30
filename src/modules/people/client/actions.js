import fetch from 'isomorphic-fetch'

// action types
export const MODE_SET = 'MODE_SET'
export const MODE_CREATE = 'MODE_CREATE'
export const MODE_READ = 'MODE_READ'
export const INVALIDATE_USERS = 'INVALIDATE_USERS'
export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'

// Action Methods
export const setMode = (mode) => ({
    type: MODE_SET,
    mode: mode
});
export function invalidateUsers() {
    return {
        type: INVALIDATE_USERS
    }
}
export function requestUsers() {
    return {
        type: REQUEST_USERS
    }
}
export function receiveUsers(json) {
    return {
        type: RECEIVE_USERS,
        users: json.map(user => user),
        receivedAt: Date.now()
    }
}   
export function fetchUsers() {
  return function (dispatch) {
    dispatch(requestUsers())
    return fetch(`http://localhost/users`)
      .then(response => response.json())
      .then(json => dispatch(receiveUsers(json)))
  }
}

function shouldFetchUsers(state) {
  if (!state.users) {
    return true
  } else if (state.loading) {
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
// reducers

const initialDataState = {
    loading: false,
    stale: true,
    users: [],
    updatedAt: null
}

export function userDataReducer(state = initialDataState, action) {
    switch (action.type) {
        case INVALIDATE_USERS:
            return Object.assign({}, state, {
                stale: true
            })
        case REQUEST_USERS:
            return Object.assign({}, state, {
                loading: true,
                stale: false
            })
        case RECEIVE_USERS:
            return Object.assign({}, state, {
                loading: false,
                stale: false,
                users: action.users,
                updatedAt: action.receivedAt
            })
        default:
            return state
    }
}

const initialModeState = {
    create_visible: false,
    list_visible: true,
    toolbox_visible: true
}

export function userModeReducer(state = initialModeState, action) {
    switch (action.type) {
        case MODE_SET:
            {
                switch (action.mode) {
                    case MODE_CREATE:
                        return Object.assign({}, state, {
                            create_visible: true,
                            list_visible: false,
                            toolbox_visible: false
                        });
                    case MODE_READ:
                        return Object.assign({}, state, {
                            create_visible: false,
                            list_visible: true,
                            toolbox_visible: true
                        });
                    default:
                        return state;
                }
            }
        default:
            return state;
    }
}