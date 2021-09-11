import {authHost} from './index'

export const createplayList = async(name) =>{
  const {data} = await authHost.post('api/playList',name)
  return data
}

export const takeplayLists = async() =>{
  const {data} = await authHost.get('api/playList')
  return data
}

export const takeplayTrackLists = async(id) =>{
  const {data} = await authHost.get('api/playListTrack/'+id)
  return data
}
export const AddlayTrackLists = async(id,nameTrack,img,idTrack,namePlayList) =>{
  const {data} = await authHost.post('api/playListTrack',{id,nameTrack,img,idTrack,namePlayList})
  return data
}
export const DeleteTrackLists = async(playListId,trackId) =>{
  const {data} = await authHost.delete('api/playListTrack/', {data: {
    playListId: playListId,
    trackId:trackId
  }})
  return data
}
export const createPlaylist = async(playList) =>{
  const {data} = await authHost.post('api/playList', playList)
  return data
}
