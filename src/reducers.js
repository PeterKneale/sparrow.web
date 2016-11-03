import { combineReducers } from 'redux'
import { userReducer } from './areas/users/actions'

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer