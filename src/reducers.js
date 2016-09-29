import { combineReducers } from 'redux'
import { clientReducer } from './modules/people/client/actions'

const rootReducer = combineReducers({
  client: clientReducer
});

export default rootReducer