import React,{ useEffect,useState } from 'react'
import {Button} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import PlayList from './playList'
import ModalCreatePlayList from './modals/createPlayList'
import '../pages/style/mainPlaylist.css'
import {takeInputplayListLists} from '../http/playListAPI'
import ModalChangePlayListName from './modals/modalChangeNamePlayList'
import FooterPlayListMusicPlayer from "../components/playListfooterMusical";
import FooterSelectMusic from "../components/footerSelectMusic";
function MainPlayLists() {
  const dispatch = useDispatch()
  const [currMusic, setCurrMusic] = useState(null);
  const [ownerVisible,setownerVisible] = useState(false)
  const [inputValue , setinputValue] = useState('')
  const [idPlayList , setIdPlayList] =useState('')
  const [NameownerVisible,setNameownerVisible] = useState(false)
  const {playList} = useSelector(state => state.playListReducer);

  useEffect(() => {
    playList.forEach((elem) => {
      if(+elem.id === +idPlayList){
        setCurrMusic(elem)
      }
    })
   },[idPlayList])

   const {playing} = useSelector(state => state.musicReducer);

    useEffect(() => {
    setCurrMusic(playing)
  }, [playing])

  useEffect(() => {
   takeInputplayListLists(inputValue).then(data => dispatch({type:'GET_ALL_PlayList' , allplayList:[...data.playList]}))
  },[inputValue])


  const playLists = useSelector(state=> state.playListReducer.playList)


  return (
    <>
      <div class="PlayListSearchBlock">      
        <div class="PlayListInputBlock">      
          <input 
            className="musicListImput"
            type="text" 
            placeholder="look for Playlists"
            onChange={(event) => setinputValue(event.target.value)}
            />
            <span class="bar"></span>
            <label></label>
          </div>
            <h3 class="PlayListMainText">Your playLists</h3>
            <Button onClick={() =>setownerVisible(true) }> create new PlayList </Button>
        </div>
      <div className='MainPlayList'>
      {playLists.map((elem) => {
          return <PlayList 
          handleOpen={() => setNameownerVisible(true)}
          changeId={(id) =>setIdPlayList(id)}
          key={elem.id}
          img={elem.img}
          name={elem.name}
          id={elem.id}
          />
      })}
        <ModalCreatePlayList show={ownerVisible} handleClose={() => setownerVisible(false)}/>
        <ModalChangePlayListName id={idPlayList} show={NameownerVisible} handleClose={() => setNameownerVisible(false)}/>
        {
      currMusic
         ?
       <FooterPlayListMusicPlayer idPlayList={idPlayList}/>
         :
        <FooterSelectMusic/>

    }
    </div>
    
    </>
  );
}

export default MainPlayLists;