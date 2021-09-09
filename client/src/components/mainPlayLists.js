import React,{ useEffect,useState } from 'react'
import Container from 'react-bootstrap/Container'
import {Button, NavLink} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {ListGroup} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import PlayList from './playList'


function MainPlayLists() {

  const history = useHistory()
  const dispatch = useDispatch()
  const playLists = useSelector(state=> state.playListReducer.playList)

  return (
      <div className='MainPlayList'>
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

export default MainPlayLists;