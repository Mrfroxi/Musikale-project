import {authHost} from './index'

export const createplayList = async(name) =>{
  const {data} = await authHost.post('api/playList',name)
  return data
}

export const takeplayLists = async() =>{
  const {data} = await authHost.get('api/playList')
  return data
}