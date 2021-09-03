import React ,{useState,useEffect} from "react"
import {Button, NavLink} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import '../pages/style/addButton.css'
import {AddtakeFavouriteTrack,deleteFavouriteTrack} from '../http/trackAPI'

const FavouriteButton = (props) =>{
  const dispatch =  useDispatch()

  const {id,name,img} = props
  // console.log(props)
  const[isFav,setIsFav] = useState(false)
  const AllTrack = useSelector(state => state.musicReducer.playlists)
  const favouriteTrack = useSelector(state => state.FavouriteMusic.tracks)

  useEffect(() =>{
    const isFavourite = favouriteTrack.some((elem) => elem.id === id);
    setIsFav(isFavourite);
  },[favouriteTrack])

  const addMusic = (e) => {
    e.stopPropagation()
    const amusic = AllTrack.find(item => item.id === id);
     AddtakeFavouriteTrack(id,name,img).then(() => dispatch({type:"ADD_FAVOURITE_TRACK" ,track:amusic}))
  }
  
  const DeleteMusic = (e) => {
    e.stopPropagation()
    const music = favouriteTrack.find(item => item.id === id);
    if(music.trackId) {
      deleteFavouriteTrack(music.trackId).then(() =>dispatch({type:"DELETE_FAVOURITE_TRACK" ,track:music}))
      return
    }
    deleteFavouriteTrack(id).then(() =>dispatch({type:"DELETE_FAVOURITE_TRACK" ,track:music}))
  }

  return isFav ?(
    <Button className='addButton' onClick={ DeleteMusic }>
    /
    </Button>

  ):(
    <Button className='addButton' onClick={ addMusic }>
    +
    </Button>
  )
}

export default FavouriteButton