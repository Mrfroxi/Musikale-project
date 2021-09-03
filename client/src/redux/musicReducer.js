const defaultState = {
  playlists:[],
  playing:null,
  bannerOpen: false,
}


export const musicReducer = (state=defaultState,action ) =>{
  switch(action.type){
    case "GET_ALL_Track":
      return {
        ...state, 
        playlists:[...action.allTrack] 
      }
    case "SET_CURR_PLAYING":
          return {
              ...state,
              playing: action.payload
          }
    case "SET_BANNER_OPEN":
            return {
                ...state,
                bannerOpen: action.payload
            };
    case "ADD_NEW_TRACK":
              return {
                ...state,
                playlists:[...state.playlists,action.track]
              }        


        // case "INC_TIMES_PLAYED":
        //     return { 
        //       ...state, 
        //       playlists:[action.payload].timesPlayed +=1  
        //     }
    default:
      return state
  }
}