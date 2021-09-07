import React,{ useEffect,useState } from 'react'
import Container from 'react-bootstrap/Container'
import {Button, NavLink} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {ListGroup} from 'react-bootstrap'
import {deleteusers} from '../http/adminAPI'
import { BrowserRouter,Route,Switch ,Redirect,useHistory} from 'react-router-dom'
import AdminMusic from '../components/adminMusic'


function UsersList() {

  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(state=> {
    return state.AdminReducer
  })
  const DeleteUser = (id) => {
    deleteusers(id).then(()=>dispatch({type:'DELETE_USER',id}))
  }

  return (
      <div className='Admin_div'>
      <ListGroup className='ListGroup'>
        <ListGroup.Item style = {{cursor:'pointer'}} onClick={() => history.push('/admin/Users')}>Users</ListGroup.Item>
        <ListGroup.Item style = {{cursor:'pointer'}} onClick={() => history.push("/admin/AdminMusic")}>Your Music</ListGroup.Item>
        <ListGroup.Item style = {{cursor:'pointer'}} onClick={() => history.push("/admin/AdminPlayLists")}>Your PlayList</ListGroup.Item>
      </ListGroup>
        <ListGroup className='m-4'>
          {user.map((elem) => (
            <ListGroup.Item key={elem.id} > {elem.id}){elem.email} 
                  <Button variant = {"danger"} id={elem.id} onClick={(e) => DeleteUser(e.target.id)} style={{margin:6}  }>Delite</Button>
            </ListGroup.Item>
          ))}
        </ListGroup> 
      
    </div>
  );
}

export default UsersList;