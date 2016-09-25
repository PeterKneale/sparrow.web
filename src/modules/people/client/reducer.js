import {SET_VISIBILITY} from './actions'

const initialState = {
  visible:false
}

export default function clientReducer(state = initialState, action){
  switch (action.type){
    case SET_VISIBILITY:
      return Object.assign({}, state, {
        visible: action.visible
      });
    default:
      return state;
  }
}