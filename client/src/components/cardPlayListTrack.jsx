import React,{useEffect,useState} from 'react';
import {increaseTimesPlayed, setCurrentPlaying} from "../actions/actions";
import '../pages/style/MusicInPlayList.css'

import {useDispatch} from "react-redux";
function CardPlayListTrack({elem}) {
  
  const dispatch = useDispatch();

  function handlePlay() {
    dispatch(setCurrentPlaying(elem))
    dispatch(increaseTimesPlayed(elem.id));
}

const [loaded,setLoaded] = useState(false);

useEffect(()=>{
    setLoaded(true)
},[]);

    return (
      <div onClick={handlePlay} key={elem.id} className="PlayList_Track">
      <img className="PlayListTrackImg" src={elem.img} alt="#"/>
      {
        elem.nameTrack?
        <p className="PlayListTrackText">{elem.nameTrack}</p>:
        <p className="PlayListTrackText">{elem.name}</p>
      }
  </div>
    );
}

export default CardPlayListTrack;