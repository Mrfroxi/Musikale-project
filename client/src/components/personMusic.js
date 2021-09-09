import React ,{useState,useEffect} from "react"
import {Row} from 'react-bootstrap'
import FooterMusicPlayer from "./footerMusical";
import FooterSelectMusic from "./footerSelectMusic";
import MusicCard from './musicListIem'
import {useSelector} from 'react-redux'


const PersonMusic = () =>{

  const {tracks} = useSelector(state=> state.FavouriteMusic)


  const [currMusic, setCurrMusic] = useState(null);

  
  const { playing } = useSelector(state => state.musicReducer);

    useEffect(() => {
    setCurrMusic(playing)
  }, [playing])

  return (
   
    <div className='AdminTracks'> 
      <Row className={"d-flex mt-4"}>
      {tracks.map((elem) => (
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

export default PersonMusic