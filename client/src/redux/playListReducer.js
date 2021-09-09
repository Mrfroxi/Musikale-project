const defaultState = {
  playList:[],
  selectPlayList:[],
  selectPlayListName:''
}


export const playListReducer = (state=defaultState,action ) =>{
  switch(action.type){
    case "GET_ALL_PlayList":
      return {
        ...state,
        playList:[...state.playList,...action.allplayList]
      }
    case "GET_ALL_PlayList_Track":
      return {
        ...state,
        selectPlayList:action.allPlayList
      }
    case "SET_SECLECT_TRACK":
        return {
          ...state,
          selectPlayList:[...state.selectPlayList,action.selectTrack]
        }  
    case "DELETE_SECLECT_TRACK":
          return {
            ...state,
            selectPlayList:state.selectPlayList.filter((value) => {
              if(value.trackId){
                return +value.trackId !== action.trackId
              }
               return +value.id !== action.trackId
            })
          } 

      case "SET_SELECTED_PLAYLIST_NAME":
        return {
          ...state,
          selectPlayListName:action.name
        }
    default:
      return state
  }
}