import { combineReducers } from 'redux'
import { userDataReducer, userModeReducer } from './modules/people/client/actions'

const rootReducer = combineReducers({
  data: userDataReducer,
  mode: userModeReducer
});

export default rootReducer