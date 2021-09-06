import React,{ useEffect,useState } from 'react'
import Container from 'react-bootstrap/Container'
import {Button, NavLink} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {ListGroup} from 'react-bootstrap'
import {deleteusers} from '../http/adminAPI'
import './style/Admin.css'
import AdminMusic from '../components/adminMusic'
import Categories from '../components/categories'
function Admin() {

  const[isPlayList,setisPlayList] = useState(true)
  const dispatch = useDispatch()
  const user = useSelector(state=> {
    return state.AdminReducer
  })
  const DeleteUser = (id) => {
    deleteusers(id).then(()=>dispatch({type:'DELETE_USER',id}))
  }

  return (
    <div className='Admin_div'>
      <Categories 
      
      />
    
    <Container className='d-flex flex-row'>
      {isPlayList 
          ?
          <ListGroup className='m-4'>
          {user.map((elem) => (
            <ListGroup.Item key={elem.id} > {elem.id}){elem.email} 
                  <Button variant = {"danger"} id={elem.id} onClick={(e) => DeleteUser(e.target.id)} style={{margin:6}  }>Delite</Button>
            </ListGroup.Item>
          ))}
        </ListGroup> 
        :
        <AdminMusic/>
      }
    </Container>
   </div>
  );
}

export default Admin;
