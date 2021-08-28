import React, { useEffect } from 'react'
import {NavLink,useLocation} from 'react-router-dom'
import MusicList from '../components/MusicList'
import Container from 'react-bootstrap/Container'
import {Button} from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {takeTrack,takeplayList} from '../http/trackAPI'
import {useSelector,useDispatch} from 'react-redux'


function Main() {
  return (
    <Container >
    <Row>
      <Col md={9}>
        <audio/>
      <MusicList/>
      </Col>
      <Col md={3}>

      </Col>
    </Row>
  </Container>

  );
}

export default Main;

