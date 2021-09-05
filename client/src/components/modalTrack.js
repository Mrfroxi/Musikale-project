import React from 'react'
import { Button } from 'react-bootstrap'
import '../pages/style/modalTrack.css'
import {useDispatch,useSelector} from 'react-redux'

const ModalTrack = ({music}) => {
  const dispatch =  useDispatch()
  const Setclosed = ()=>{
    dispatch({type:"CHANGE_TYPE_CL",musicId:music.id})
  }
  console.log(music)
  return (
    <div className="ModalTrack">
      <img className="ModalTrackImg" src={music.img} alt="#"/>
      <p className="ModalTrackText">{music.name}</p>
      <Button onClick={Setclosed}>
            {
              music.closed?
              "/"
              :
              "+"
            }
      </Button>
    </div>
  )

}
export default ModalTrack