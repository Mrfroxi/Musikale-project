import React from 'react'
import {Modal,Button,ListGroup} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import ModalTrack from '../modalTrack'

const ModalMusic = ({show,handleClose} ) => {
  const ownertracks = useSelector(state=> {
    return state.OwnereMusic.tracks
  })

  return (
    <Modal 
    show={show} 
    onHide={handleClose}
    size="lg"
    centered
    >
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      {ownertracks.map((elem) => (
        <ModalTrack key={elem.id} music={elem}  > </ModalTrack>
      ))}
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  )

}
export default ModalMusic