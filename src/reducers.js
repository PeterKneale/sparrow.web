import { combineReducers } from 'redux'
import { userReducer } from './modules/admin/users/actions'

const rootReducer = combineReducers({
  users: userReducer
});

export default rootReducer