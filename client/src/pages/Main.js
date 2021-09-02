import React, { useEffect,useState } from 'react'
import {NavLink,useLocation} from 'react-router-dom'
import MusicList from '../components/musicList'
import Container from 'react-bootstrap/Container'
import {Button} from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {takeTrack,takeplayList} from '../http/trackAPI'
import {useSelector,useDispatch} from 'react-redux'
import FooterMusicPlayer from "../components/footerMusical";
import FooterSelectMusic from "../components/footerSelectMusic";


function Main() {
  const [currMusic, setCurrMusic] = useState(null);

  const {playing} = useSelector(state => state.musicReducer);

  useEffect(() => {
    setCurrMusic(playing)
}, [playing])

  return (
    <div>
    <Container >
      Popular Tracks
    <Row>
      <Col md={9}>
        <audio/>
      <MusicList/>
      </Col>
      <Col md={3}>

      </Col>

    </Row>
  </Container>
  <React.Fragment>
  {
      currMusic
         ?
       <FooterMusicPlayer music={currMusic}/>
         :
        <FooterSelectMusic/>

    }
  </React.Fragment>
  </div>

  );
}

export default Main;

