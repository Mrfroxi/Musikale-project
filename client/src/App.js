import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import {connect} from 'react-redux'



function App(track) {
  console.log(track)
  return (
    <div>
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
    </div>
  )
}

export default connect(
  ({track}) => ({track})
) (App);