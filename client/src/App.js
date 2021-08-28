import React,{ useEffect } from 'react'
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar'
import {useSelector,useDispatch} from 'react-redux'
import {takeTrack,takeplayList} from './http/trackAPI'
import {takeusers} from './http/adminAPI'
function App() {
  const dispatch = useDispatch()
  // const track = useSelector(state=> {
  //   return state
  // })
  useEffect(() => {
    const token = localStorage.getItem('token')
    token && dispatch({type:"SetIsAuth"})
    takeTrack().then(data => dispatch({type:'GET_ALL_Track' , allTrack:[...data]}))
    takeplayList().then(data =>dispatch({type:'GET_ALL_PlayList' , allplayList:[...data]}))
    takeusers().then(data =>dispatch({type:'GET_ALL_USERS' , allUser:[...data]}))
  },[])
  return (
    <div>
      <NavBar/>
      <AppRouter/>
    </div>
  )
}
export default App
