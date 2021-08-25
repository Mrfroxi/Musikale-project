import React from 'react'
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar'
import {useSelector,useDispatch} from 'react-redux'

function App() {
  // const dispatch = useDispatch()
  // const cash = useSelector(state => console.log(state))

  return (
    <div>
      <NavBar/>
      <AppRouter/>
    </div>
  )
}
export default App
