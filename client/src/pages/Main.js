import React from 'react'
import {NavLink,useLocation} from 'react-router-dom'
import Music from '../components/MusicList'
import Container from 'react-bootstrap/Container'
import {Button} from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {useSelector,useDispatch} from 'react-redux'


function Main() {
  const dispatch = useDispatch()
  const cash = useSelector(state => console.log(state))
  return (
    <Container>
    <Row>
      <Col md={9}>

      </Col>
      <Col md={3}>

      </Col>
    </Row>
  </Container>

  );
}

export default Main;

