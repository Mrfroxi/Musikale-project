import React,{ useEffect,useState } from 'react'
import Container from 'react-bootstrap/Container'
import {Button, Card, Col, NavLink} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {ListGroup} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import AllModalMusic from './modals/allMusic'
import { takeplayTrackLists } from '../http/playListAPI'
import '../pages/style/MusicInPlayList.css'

function ElementPlayList(props) {
  const id = props.match.params.id
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect (() => {
    takeplayTrackLists(id).then(data => dispatch({type:'GET_ALL_PlayList_Track' , allPlayList:[...data]}))
  },[])

  const SelectTrack = useSelector(state => state.playListReducer.selectPlayList)

  const [ownerVisible,setownerVisible] = useState(false)

  return (
    <Container>
       <Button onClick={() =>setownerVisible(true) }> closeOwnerTrack</Button>
           {
             SelectTrack.map((elem) => {
               return  <div key={elem.id} className="PlayList_Track">
                          <img className="PlayListTrackImg" src={elem.img} alt="#"/>
                          {
                            elem.nameTrack?
                            <p className="PlayListTrackText">{elem.nameTrack}</p>:
                            <p className="PlayListTrackText">{elem.name}</p>
                          }
                      </div>
             })
           }
            <AllModalMusic  idPlayList={id} show={ownerVisible} handleClose={() => setownerVisible(false)}  />
    </Container>
  );
}

export default ElementPlayList;