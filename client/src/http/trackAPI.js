import {$host,$authHost} from './index'

export const createTrack = async(name) =>{
  const {data} = await $authHost.post('api/track',name)
  return data
}

export const takeTrack = async(email,password) =>{
  const {data} = await $authHost.get('api/track')
  return data
}

export const createplayList = async(name) =>{
  const {data} = await $authHost.post('api/playList',name)
  return data
}

export const takeplayList = async(email,password) =>{
  const {data} = await $authHost.get('api/playList')
  return data
}
