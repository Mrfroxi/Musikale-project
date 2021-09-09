import React,{ useEffect,useState } from 'react'
import Container from 'react-bootstrap/Container'
import {Button, Card, Col, NavLink} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {ListGroup} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import {PLAYLIST_ITEM} from '../utils/consts'

function PlayList(props) {
  const{id,name} = props
  const history = useHistory()
  const dispatch = useDispatch()
  const selectedPlayList = () => {
    dispatch({type:"SET_SELECTED_PLAYLIST_NAME",name:name})
    history.push(PLAYLIST_ITEM+'/'+id)
  }
  return (
      <Col md={3} onClick={selectedPlayList} className="">
        <Card style={{width:150,cursor:'pointer'}} border={"light"}>
          <div>
            <img src=""/>
            {name}
          </div>
        </Card>
      </Col>
  );
}

export default PlayList;