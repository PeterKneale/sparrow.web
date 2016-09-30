import { combineReducers } from 'redux'
import { userDataReducer, userModeReducer } from './modules/admin/users/actions'

const rootReducer = combineReducers({
  data: userDataReducer,
  mode: userModeReducer
});

export default rootReducer