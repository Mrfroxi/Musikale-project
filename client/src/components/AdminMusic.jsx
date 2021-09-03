import axios from "axios";
import React ,{useState,useEffect} from "react"
import {Button,Row} from 'react-bootstrap'
import FooterMusicPlayer from "./footerMusical";
import FooterSelectMusic from "./footerSelectMusic";
import MusicCard from './musicListIem'
import {authHost} from '../http/index'
import {useDispatch,useSelector} from 'react-redux'
import { useHistory } from "react-router-dom"

const AdminMusic = () =>{
  const history = useHistory()
  const dispatch = useDispatch()
  const[isPlayList,setisPlayList] = useState(true)
  const {tracks} = useSelector(state=> state.FavouriteMusic)
  const [currMusic, setCurrMusic] = useState(null);
  const ownertracks = useSelector(state=> {
    return state.OwnereMusic.tracks
  })
  const {playing,playlists} = useSelector(state => state.musicReducer);

  const[newSong,setnewSong] = React.useState(null)

  const sendFile = React.useCallback( async () => {
    try{
    const data =  new FormData()
    data.append('song',newSong)
    await authHost.post('api/track',data,{
      headers:{
        'content-type':'mulpipart/form-data'
      }
    })
    .then( (res) =>  {
      dispatch({type:"ADD_OWNER_TRACK" , track:res.data})
      dispatch({type:'ADD_NEW_TRACK' ,track:res.data})
    }
    )
    }catch(e){

    }
  },[newSong])

    useEffect(() => {
    setCurrMusic(playing)
  }, [playing])

  // console.log(tracks)
  return (
    <div className='AdminTracks'> 
    <div className ='panelPart'>
      <Button onClick={() =>setisPlayList(true) }>Favourite</Button>
      <Button onClick={() =>setisPlayList(false) }> Your Track</Button>
    </div>
    {
      isPlayList
      ?
      <Row className={"d-flex mt-4"}>
      {tracks.map((elem) => (
        <MusicCard  key={elem.trackId} music={elem}/>
      ))}
    </Row> 
    :
    <div>
      <input type="file" onChange={(e) =>setnewSong(e.target.files[0])} />
      <Button  variant = {"danger"} className = "btn" onClick={sendFile}>Отправить файл</Button>
      <Row className={"d-flex mt-4"}>
      {ownertracks.map((elem) => (
        <MusicCard  key={elem.trackId} music={elem}/>
      ))}
    </Row>  
    </div>
    }
        {
      currMusic
         ?
       <FooterMusicPlayer music={currMusic}/>
         :
        <FooterSelectMusic/>

    } 
        </div>
  )
}

export default AdminMusic