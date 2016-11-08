import fetch from 'isomorphic-fetch'
import Constants from 'constants'
import { hashHistory } from 'react-router'

// LIST
export const REQUEST_LIST_DEVICES = 'REQUEST_LIST_DEVICES'
export const REQUEST_LIST_DEVICES_FAIL = 'REQUEST_LIST_DEVICES_FAIL'
export const RESPONSE_LIST_DEVICES = 'RESPONSE_LIST_DEVICES'

export const requestListDevices = () => ({
    type: REQUEST_LIST_DEVICES
})
export const requestListDevicesFail = (message) => ({
    type: REQUEST_LIST_DEVICES_FAIL,
    message: message
})
export const responseListDevices = (json) => ({
    type: RESPONSE_LIST_DEVICES,
    devices: json.map(device => device)
})


// exported functions
export function navigate(url){
    hashHistory.push(url)
}

export function listDevices() {
  return (dispatch, getState) => {
    let state = getState()
    if (!state.loading) { 
        return dispatch(doListDevices()) 
    }
  }
}

function doListDevices() {
    return (dispatch) => {
        dispatch(requestListDevices())
        return fetch('http://api.webapitester.com/devices')
            .then(checkStatus)
            .then(response => response.json())
            .then(json => dispatch(responseListDevices(json)))
            .catch(e => dispatch(requestListDevicesFail("Unable to list devices.")));
    }
}

// state

const initialState = {
    devices: [],
    loading: false,
    error: null
}

// reducers
export function deviceManagementReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_LIST_DEVICES:
            return { 
                ...state, 
                loading : true 
            }

        case REQUEST_LIST_DEVICES_FAIL:
            return { 
                ...state,
                loading: false,
                devices: null,
                error: action.message
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

