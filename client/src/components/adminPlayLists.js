import React,{ useEffect,useState } from 'react'
import Container from 'react-bootstrap/Container'
import {Button, NavLink} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {ListGroup} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import PlayList from './playList'


function PlayLists() {

  const history = useHistory()
  const dispatch = useDispatch()
  const playLists = useSelector(state=> state.playListReducer)
  console.log(playLists)
  return (
      <div className='Admin_div'>
      <ListGroup className='ListGroup'>
        <ListGroup.Item style = {{cursor:'pointer'}} onClick={() => history.push('admin/Users')}>Users</ListGroup.Item>
        <ListGroup.Item style = {{cursor:'pointer'}} onClick={() => history.push("admin/AdminMusic")}>Your Music</ListGroup.Item>
        <ListGroup.Item style = {{cursor:'pointer'}} onClick={() => history.push("admin/AdminPlayLists")}>Your PlayList</ListGroup.Item>
      </ListGroup>
       
      {playLists.map((elem) => {
          return <PlayList 
          key={elem.id}
          name={elem.name}
          id={elem.id}
          />
      })}
      
    </div>
  );
}

export default PlayLists;