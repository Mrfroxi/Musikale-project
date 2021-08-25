import React, { useEffect } from 'react'
import {NavLink,useLocation} from 'react-router-dom'
import MusicList from '../components/MusicList'
import Container from 'react-bootstrap/Container'
import {Button} from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {takeTrack,takeplayList} from '../http/trackAPI'


function Main() {

  useEffect(() => {
    takeTrack().then(data => console.log(data))
    takeplayList().then(data => console.log(data))
  })
  return (
    <Container >
    <Row>
      <Col md={9}>
      <MusicList/>
      </Col>
      <Col md={3}>

      </Col>
    </Row>
  </Container>

  );
}

export default Main;

