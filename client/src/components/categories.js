import React from "react";
import {ListGroup} from 'react-bootstrap'

const Categories = () => {
  
  return(

    <ListGroup className='ListGroup'>
      <ListGroup.Item style = {{cursor:'pointer'}} >Users</ListGroup.Item>
      <ListGroup.Item style = {{cursor:'pointer'}} >Your Music</ListGroup.Item>
      <ListGroup.Item style = {{cursor:'pointer'}} >Your PlayList</ListGroup.Item>
    </ListGroup>
  )
}

export default Categories;