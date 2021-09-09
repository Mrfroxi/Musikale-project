import React ,{useState,useEffect} from "react"
import {Button,Row} from 'react-bootstrap'
import FooterMusicPlayer from "./footerMusical";
import FooterSelectMusic from "./footerSelectMusic";
import MusicCard from './musicListIem'
import {authHost} from '../http/index'
import {useDispatch,useSelector} from 'react-redux'
import ModalMusic from "./modals/ownerMusic";
import '../pages/style/ownerTrack.css';
import Container from 'react-bootstrap/Container'

const OwnerTrack = () => {

  const dispatch = useDispatch()

  const [ownerVisible,setownerVisible] = useState(false)


  const [currMusic, setCurrMusic] = useState(null);

  const ownertracks = useSelector(state=> {
    return state.OwnereMusic.tracks
  })
  
  const { playing } = useSelector(state => state.musicReducer);

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
      console.log(e)
    }
  },[newSong])

    useEffect(() => {
    setCurrMusic(playing)
  }, [playing])
  return(
    <div className="onwTrack">
      <div className ="ownerBlock">
          <div className="block-dispatch">   
              <input type="file" id="file" className="input_File" onChange={(e) =>setnewSong(e.target.files[0])} />
              <Button  variant = {"danger"} className = "btn" onClick={sendFile}>Отправить файл</Button>
              </div>
      <Button onClick={() =>setownerVisible(true) }> closeOwnerTrack</Button>
      </div>
   <Container>
    <Row className={"d-flex mt-4"}>
     {ownertracks.map((elem) => (
      <MusicCard  key={elem.id} music={elem} closed={elem.closed}/>
      ))}
    </Row>  
    </Container> 
  <ModalMusic show={ownerVisible} handleClose={() => setownerVisible(false)}/>
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

export default OwnerTrack