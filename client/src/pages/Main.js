import React from 'react'
import {NavLink,useLocation} from 'react-router-dom'
import Music from '../components/MusicList'
import Container from 'react-bootstrap/Container'
import {Button} from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

let arr = [{name:'hello',artist:'baber'}]
function Track() {
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

export default Track;

