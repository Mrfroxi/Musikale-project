import React from "react";
import {ListGroup} from 'react-bootstrap'

const Categories = React.memo(({onClickItem}) => {
  
  const[activeItem,setactiveItem] = React.useState(null)

const onSelectItem = (index) => {
  setactiveItem(index)
  onClickItem(index)
}
const items = ["Users","Your Music","Your PlayList"]
  return(
    <ListGroup className='ListGroup'>
      { items.map((name,index) => (
        <ListGroup.Item 
        style = {{cursor:'pointer'}} 
        onClick={() => onSelectItem(index)}
        key={`${name}-${index}`}
        >{name}</ListGroup.Item>
      ))
      }

    </ListGroup>
  )
})

export default Categories;