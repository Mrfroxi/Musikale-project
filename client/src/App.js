import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar'
import {useSelector,useDispatch} from 'react-redux'

function App() {
  // const dispatch = useDispatch()
  // const cash = useSelector(state => console.log(state))

  return (
    <div>
      <NavBar/>
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
    </div>
  )
}
export default App
