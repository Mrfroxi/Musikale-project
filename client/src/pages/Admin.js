import React from 'react'
import Container from 'react-bootstrap/Container'
import {Button, NavLink} from 'react-bootstrap'
function Admin() {
  return (
   <Container className='d-flex flex-row'>
     <Button variant ={'outline-dark'} style={{margin:4}}>
       удалить трек
     </Button>
     <Button variant ={'outline-dark'}>
       удалить пользователя
     </Button>

   </Container>
  );
}

export default Admin;
