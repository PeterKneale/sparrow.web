import { combineReducers } from 'redux'
import { userManagementReducer } from './modules/admin/users/actions'

const rootReducer = combineReducers({
  usermanagement: userManagementReducer
});

export default rootReducer