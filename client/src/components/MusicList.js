import React from 'react'
import { Row } from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux'
import MusicCard from './MusicListIem'

function MusicList() {
  const track = useSelector(state=> {
    return state.musicReducer
  }
  )
  return (
    <Row className={"d-flex mt-4"}>
      {track.map((elem) => (
        <MusicCard  key={elem.id} music={elem}/>
      ))}
    </Row>  
    );
    
}

export default MusicList;
