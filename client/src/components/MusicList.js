import React from 'react'
import { Row } from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux'
import MusicCard from './musicListIem'

function MusicList() {
  const {playlists} = useSelector(state=> state.musicReducer)
  return (
    <Row className={"d-flex mt-4"}>
      {playlists.map((elem) => (
        <MusicCard  key={elem.id} music={elem}/>
      ))}
    </Row>  
    );
    
}

export default MusicList;
