import React from 'react'
import  './style/Main.css'
import {NavLink,useLocation} from 'react-router-dom'
import Music from '../components/Music'
let arr = [{name:'hello',artist:'baber'}]
function Track() {
  return (
    <div>
      <Header/>
    {arr.map}
    </div>
  );
}

export default Track;

function Header() {
  return (
    <div className='header_main'>
      <h1 className='logo_fr'>my<span className='logo_sc'>Music</span></h1>
      <input className='serch_header' type="text" />      
    </div>
  );
}