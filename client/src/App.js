import React,{ useEffect } from 'react'
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar'
import {useSelector,useDispatch} from 'react-redux'
import {takeTrack,takeplayList,takeFavouriteTrack} from './http/trackAPI'
import {takeusers} from './http/adminAPI'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const token = localStorage.getItem('token')
    token && dispatch({type:"SetIsAuth"})
    takeTrack().then(data => dispatch({type:'GET_ALL_Track' , allTrack:[...data]}))
    takeplayList().then(data =>dispatch({type:'GET_ALL_PlayList' , allplayList:[...data]}))
    takeusers().then(data =>dispatch({type:'GET_ALL_USERS' , allUser:[...data]}))
    takeFavouriteTrack().then(data => dispatch({type:'GET_ALL_FAVOURITE_TRACK' , tracks:[...data]}))
  },[])
  return (
    <div>
      <NavBar/>
      <AppRouter/>
    </div>
  )
}
export default App
