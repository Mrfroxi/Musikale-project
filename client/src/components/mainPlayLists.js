import React,{ useEffect,useState } from 'react'
import Container from 'react-bootstrap/Container'
import {Button, NavLink} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {ListGroup} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import PlayList from './playList'
import ModalCreatePlayList from './modals/createPlayList'

function MainPlayLists() {
  const dispatch = useDispatch()

  const [ownerVisible,setownerVisible] = useState(false)
  const history = useHistory()
  const playLists = useSelector(state=> state.playListReducer.playList)

  return (
    <>
    <Button onClick={() =>setownerVisible(true) }> create new PlayList </Button>
      <div className='MainPlayList'>
      {playLists.map((elem) => {
          return <PlayList 
          key={elem.id}
          img={elem.img}
          name={elem.name}
          id={elem.id}
          />
      })}
        <ModalCreatePlayList show={ownerVisible} handleClose={() => setownerVisible(false)}/>
    </div>
    </>
  );
}

export default MainPlayLists;