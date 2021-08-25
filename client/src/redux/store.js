import {createStore,combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {musicReducer} from './musicReducer'


const rootReducer = combineReducers({
  musicReducer
})
export const  store = createStore(rootReducer, composeWithDevTools())
