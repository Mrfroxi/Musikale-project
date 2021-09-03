import React,{useState} from 'react'
import { Row } from 'react-bootstrap';
import {useSelector} from 'react-redux'
import MusicCard from './musicListIem'
import '../pages/style/musicList.css'

function MusicList() {
  const {playlists} = useSelector(state=> state.musicReducer)
  
  const [inputValue , setinputValue] = useState('')


  const filteredTrack = playlists.filter( track => {
    return track.name.toLowerCase().includes(inputValue.toLowerCase())
  })
  return (
    <div className="musicList">
       <div class="musicListGroup">      
        <input 
          className="musicListImput"
          type="text" 
          placeholder="look for music"
          onChange={(event) => setinputValue(event.target.value)}
          />
          <span class="bar"></span>
          <label></label>
        </div>
    
      <Row className={"d-flex mt-4"}>
        {filteredTrack.map((elem) => (
          <MusicCard  key={elem.id} music={elem}/>
        ))}
      </Row>  
    </div>
    );
    
}

export default MusicList;
