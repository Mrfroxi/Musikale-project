import React from 'react'
import Container from 'react-bootstrap/Container'
import {Button, NavLink} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {ListGroup} from 'react-bootstrap'
import {deleteusers} from '../http/adminAPI'
function Admin() {
  const dispatch = useDispatch()
  const user = useSelector(state=> {
    return state.AdminReducer
  })
  const DeleteUser = (e) => {
    deleteusers(e).then(data=>console.log(data))
  }

  return (

   <Container className='d-flex flex-row'>
    <ListGroup className='m-4'>
      {user.map((elem) => (
         <ListGroup.Item key={elem.id} > {elem.id}){elem.email} 
               <Button variant = {"danger"} id={elem.id} onClick={(e) => DeleteUser(e.target.id)} style={{margin:6}  }>Delite</Button>
         </ListGroup.Item>
      ))}
    </ListGroup>

   </Container>
  );
}

export default Admin;
