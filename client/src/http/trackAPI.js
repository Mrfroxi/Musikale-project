import {authHost} from './index'

export const createTrack = async(name) =>{
  const {data} = await authHost.post('api/track',name)
  return data
}

export const takeTrack = async() =>{
  const {data} = await authHost.get('api/track')
  return data
}

export const takeFavouriteTrack = async() =>{
  const {data} = await authHost.get('api/favouritetrack')
  return data
}
export const AddtakeFavouriteTrack = async(id,name,img) =>{
  const {data} = await authHost.post('api/favouritetrack',{id,name,img})
  return data
}
export const deleteFavouriteTrack = async(id) =>{
  const {data} = await authHost.delete('api/favouritetrack/'+id )
  return data
}
export const changeCloseTrack = async(status,id) =>{
  const {data} = await authHost.put('api/track/'+id , {status})
  return data
}
