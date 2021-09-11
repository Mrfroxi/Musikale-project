import React,{ useEffect,useState } from 'react'
import Container from 'react-bootstrap/Container'
import {Button, ButtonGroup, Form, NavLink} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {ListGroup} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import {Modal} from 'react-bootstrap'
import ModalTrack from '../modalTrack'
import {createPlaylist} from '../../http/playListAPI'
function ModalCreatePlayList({show,handleClose} ) {
  const dispatch = useDispatch()
  const [name,setName] = useState("")
  const [file,setfile] = useState("")

  const selectFile = (e) => {
    console.log(e.target.files[0])
    setfile(e.target.files[0])
  }

  const addDevice = () => {
    const formData = new FormData()
    formData.append('name',name)
    formData.append('img',file)
    createPlaylist(formData).then(data => handleClose())
  }
  return (
    <Modal 
    show={show} 
    onHide={handleClose}
    size="lg"
    centered
    >
    <Modal.Header closeButton>
    </Modal.Header>

    <Modal.Body>
      <p>PlayList name:</p>
      <Form.Control value={name} onChange={e=>setName(e.target.value)} className="mt-3" placeholder="write the name of the playlist"/>
      <Form.Control className="mt-3" type="file"  onChange={selectFile}/>
      <Button onClick={addDevice}  >Add</Button>
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  );
}
export default ModalCreatePlayList;