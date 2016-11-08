import { combineReducers } from 'redux'
import { userManagementReducer } from './areas/users/actions'

const rootReducer = combineReducers({
  usermanagement: userManagementReducer
});

export default rootReducer