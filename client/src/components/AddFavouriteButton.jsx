import React ,{useState,useEffect} from "react"
import {Button, NavLink} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import '../pages/style/addButton.css'
import {AddtakeFavouriteTrack,deleteFavouriteTrack} from '../http/trackAPI'

const FavouriteButton = (props) =>{
  const dispatch =  useDispatch()
  const {id} = props
  const[isFav,setIsFav] = useState(false)
  const AllTrack = useSelector(state => state.musicReducer.playlists)
  const favouriteTrack = useSelector(state => state.FavouriteMusic.tracks)

  useEffect(() =>{
    const isFavourite = favouriteTrack.some((elem) => elem.id === id);
    setIsFav(isFavourite);
  },[favouriteTrack])

  const addMusic = (e) => {
    e.stopPropagation()
    const music = AllTrack.find(item => item.id === id);
    AddtakeFavouriteTrack(id).then(() =>dispatch({type:"ADD_FAVOURITE_TRACK" ,track:music}))
  }
  const DeleteMusic = (e) => {
    e.stopPropagation()
    const music = AllTrack.find(item => item.id === id);
    deleteFavouriteTrack(id).then(() =>dispatch({type:"DELETE_FAVOURITE_TRACK" ,track:music}))
  }

  return isFav ?(
    <Button className='addButton' onClick={(e) => DeleteMusic(e)}>
    /
    </Button>

  ):(
    <Button className='addButton' onClick={(e) => addMusic(e)}>
    +
    </Button>
  )
}

export default FavouriteButton