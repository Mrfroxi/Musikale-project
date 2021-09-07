import React, { useState , useEffect} from 'react'
import { Button } from 'react-bootstrap'
import '../pages/style/modalTrack.css'
import {takeTrack} from '../http/trackAPI'
import {useDispatch,useSelector} from 'react-redux'
import {changeCloseTrack} from '../http/trackAPI'

const PlayListTrack = ({music}) => {
 
  const dispatch =  useDispatch()
 

  return (
    <div className="ModalTrack">
      <img className="ModalTrackImg" src={music.img} alt="#"/>
      <p className="ModalTrackText">{music.name}</p>
    </div>
  )

}
export default PlayListTrack