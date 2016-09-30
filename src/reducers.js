import { combineReducers } from 'redux'
import { userDataReducer, userModeReducer } from './modules/people/client/actions'

const rootReducer = combineReducers({
  users: userDataReducer,
  mode: userModeReducer
});

export default rootReducer