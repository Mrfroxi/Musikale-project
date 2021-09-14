import React ,{useState,useEffect} from "react"
import {Row} from 'react-bootstrap'
import FooterMusicPlayer from "./footerMusical";
import FooterSelectMusic from "./footerSelectMusic";
import MusicCard from './musicListIem'
import {useSelector} from 'react-redux'
import {takeInputFavTracks} from '../http/trackAPI'
import {useDispatch} from 'react-redux'
const PersonMusic = () =>{
  const dispatch = useDispatch()
  const {tracks} = useSelector(state=> state.FavouriteMusic)


  const [currMusic, setCurrMusic] = useState(null);

  const [inputValue , setinputValue] = useState('')

  useEffect(() => {
    takeInputFavTracks(inputValue).then(data => dispatch({type:'GET_ALL_FAVOURITE_TRACK' , tracks:[...data.tracks]}))
  },[inputValue])
  const { playing } = useSelector(state => state.musicReducer);

    useEffect(() => {
    setCurrMusic(playing)
  }, [playing])

  return (
   
    <div className='AdminTracks'> 
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