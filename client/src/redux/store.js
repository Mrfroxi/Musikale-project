import {createStore,combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {musicReducer} from './musicReducer'
import {UserReducer} from './UserReducer'

const rootReducer = combineReducers({
  musicReducer,
  UserReducer
})
export const  store = createStore(rootReducer, composeWithDevTools())
