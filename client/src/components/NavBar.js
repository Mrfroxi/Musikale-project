import React, { useState }  from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {Button} from 'react-bootstrap'
import { useHistory } from "react-router-dom"
import {useSelector,useDispatch} from 'react-redux'
import {MAIN_ROUTE,ADMIN_ROUTE,REGISTRATION_ROUTE} from '../utils/consts'

const NavBar = () =>{
  const dispatch = useDispatch()
  const user = useSelector(state=> {
    return state.UserReducer
  })
  const tracks = useSelector(state=> {
    return state.musicReducer.playlists
  })
  const history = useHistory()

  const [inputValue , setinputValue] = useState('')


  const filteredTrack = tracks.filter( track => {
    return track.name.toLowerCase().includes(inputValue.toLowerCase())
  })

  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Nav className="me-auto"><Button variant = {"info"}  onClick={() => history.push(MAIN_ROUTE)} style={{margin:4}  }>Main</Button>
      </Nav>
      {user.__isAuth ? 
      <Nav className='ml-auto' >
      <Button variant = {"outline-light"}  onClick={() => history.push(ADMIN_ROUTE)} style={{margin:4}  }>Admin</Button>
      <Button variant = {"outline-light "} onClick={() => dispatch({type:'logOut'})} style={{margin:4} } >Exit</Button>
    </Nav>:
        <Nav className='ml-auto' >
        <Button variant = {"outline-light"}  onClick = {() =>  history.push(REGISTRATION_ROUTE) }>registration</Button>
      </Nav>  
      }
    </Container>
  </Navbar>
  )
}

export default NavBar