import React,{ useEffect,useState } from 'react'
import Container from 'react-bootstrap/Container'
import {Button, Card, Col, NavLink} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {ListGroup} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import AllModalMusic from './modals/allMusic'

function ElementPlayList(props) {
  const{id,name} = props
  const history = useHistory()
  const dispatch = useDispatch()
  const [ownerVisible,setownerVisible] = useState(false)
  return (
    <Container>
       <Button onClick={() =>setownerVisible(true) }> closeOwnerTrack</Button>
            <div>1</div>
            <AllModalMusic show={ownerVisible} handleClose={() => setownerVisible(false)}/>
    </Container>
  );
}

export default ElementPlayList;