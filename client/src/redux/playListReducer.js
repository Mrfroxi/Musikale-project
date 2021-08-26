const defaultState = [
  
]


export const playListReducer = (state=defaultState,action ) =>{
  switch(action.type){
    case "GET_ALL_PlayList":
      return [...state,...action.allplayList]
    default:
      return state
  }
}