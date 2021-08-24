import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar'



function App(track) {
  console.log(track)
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
