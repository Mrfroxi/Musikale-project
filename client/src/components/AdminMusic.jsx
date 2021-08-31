import React ,{useState,useEffect} from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {Button, NavLink,Row} from 'react-bootstrap'
import { useHistory } from "react-router-dom"
import {useSelector,useDispatch} from 'react-redux'
import FooterMusicPlayer from "../components/FooterMusical";
import FooterSelectMusic from "../components/FooterSelectMusic";
import MusicCard from './MusicListIem'

const AdminMusic = () =>{
  const[isPlayList,setisPlayList] = useState(true)
  const {tracks} = useSelector(state=> state.FavouriteMusic)
  const [currMusic, setCurrMusic] = useState(null);

  const {playing,playlists} = useSelector(state => state.musicReducer);

  useEffect(() => {
    setCurrMusic(playing)
}, [playing])

  return (
    <div>
    <div>
      <Button onClick={() =>setisPlayList(true) }>Favourite</Button>
      <Button onClick={() =>setisPlayList(false) }> Your Track</Button>
    </div>
        <Row className={"d-flex mt-4"}>
          {playlists.map((elem) => (
            <MusicCard  key={elem.id} music={elem}/>
          ))}
        </Row> 
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