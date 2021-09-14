import React,{ useEffect,useState } from 'react'
import {Button} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import PlayList from './playList'
import ModalCreatePlayList from './modals/createPlayList'
import '../pages/style/mainPlaylist.css'
import {takeInputplayListLists} from '../http/playListAPI'
function MainPlayLists() {
  const dispatch = useDispatch()

  const [ownerVisible,setownerVisible] = useState(false)
  const [inputValue , setinputValue] = useState('')

  useEffect(() => {
   takeInputplayListLists(inputValue).then(data => dispatch({type:'GET_ALL_PlayList' , allplayList:[...data.playList]}))
  },[inputValue])

  // const { playing } = useSelector(state => state.musicReducer);

  //   useEffect(() => {
  //   setCurrMusic(playing)
  // }, [playing])
  const playLists = useSelector(state=> state.playListReducer.playList)

  return (
    <>
      <div class="PlayListSearchBlock">      
        <div class="PlayListInputBlock">      
          <input 
            className="musicListImput"
            type="text" 
            placeholder="look for music"
            onChange={(event) => setinputValue(event.target.value)}
            />
            <span class="bar"></span>
            <label></label>
          </div>
            <Button onClick={() =>setownerVisible(true) }> create new PlayList </Button>
        </div>
      <div className='MainPlayList'>
      {playLists.map((elem) => {
          return <PlayList 
          key={elem.id}
          img={elem.img}
          name={elem.name}
          id={elem.id}
          />
      })}
        <ModalCreatePlayList show={ownerVisible} handleClose={() => setownerVisible(false)}/>
    </div>
    </>
  );
}

export default MainPlayLists;