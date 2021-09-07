import React,{ useEffect,useState } from 'react'
import Container from 'react-bootstrap/Container'
import {Button, Card, Col, NavLink} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {ListGroup} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import {PlayListItem} from '../utils/consts'

function PlayList(props) {
  const{id,name} = props
  const history = useHistory()
  const dispatch = useDispatch()

  return (
      <Col md={3} onClick={() => history.push(PlayListItem+'/'+id)}>
        <Card style={{width:150,cursor:'pointer'}} border={"light"}>
          <div>
            {name}
          </div>
        </Card>
      </Col>
  );
}

export default PlayList;