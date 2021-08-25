import React from 'react'
import { Row } from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux'
import MusicItem from './MusicListIem'

function MusicList() {
  const dispatch = useDispatch()
  const cash = useSelector(state=> {
    return state.musicReducer
  }
    )
  return (
    <Row className={"d-flex mt-4"}>
      {cash.map((elem,index) => (
        <MusicItem key={index} name={elem.name}/>
      ))}
    </Row>
  );
}

export default MusicList;
