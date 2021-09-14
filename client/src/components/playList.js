import React,{ useEffect,useState } from 'react'
import { Card, Col} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {PLAYLIST_ITEM} from '../utils/consts'
import  '../pages/style/playList.css'
function PlayList(props) {
  const{id,name,img} = props
  const history = useHistory()
  const dispatch = useDispatch()
  const selectedPlayList = () => {
    dispatch({type:"SET_SELECTED_PLAYLIST_NAME",name:name})
    history.push(PLAYLIST_ITEM+'/'+id)
  }
  return (
      <Col className="PlayLIstCol" md={3} onClick={selectedPlayList}>
        <Card style={{width:150,cursor:'pointer'}} border={"light"}>
          <div className="PlayLIstBlock">
            <img className="PlayLIstImg" src={process.env.REACT_APP_API_URL + img}/>
            {name}
          </div>
        </Card>
      </Col>
  );
}

export default PlayList;