import { combineReducers } from 'redux'
import peopleReducer from './modules/people/client/reducer'

const rootReducer = combineReducers({
  people: peopleReducer
});

export default rootReducer