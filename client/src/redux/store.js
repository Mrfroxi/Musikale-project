import {createStore,combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {musicReducer} from './musicReducer'
import {UserReducer} from './UserReducer'
import { playListReducer } from './playListReducer'
import { AdminReducer } from './AdminReducer'
import { FavouriteMusic } from './FavouriteReducer'
import { OwnereMusic } from './OwnerMusic'

const rootReducer = combineReducers({
  musicReducer,
  UserReducer,
  playListReducer,
  AdminReducer,
  FavouriteMusic,
  OwnereMusic
})
export const  store = createStore(rootReducer, composeWithDevTools())
