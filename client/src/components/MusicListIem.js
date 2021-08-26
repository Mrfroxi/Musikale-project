import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

function MusicItem({name}) {
  return (
  <Col md={3}>
    <Card style={{width:200,cursor:'pointer'}}  border={'light'} >
      <Image width={170} height={200} ></Image>
      <div>{name}</div>
    </Card>
  </Col>
  );
}

export default MusicItem;
