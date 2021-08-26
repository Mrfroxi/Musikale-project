const defaultState = [

]


export const musicReducer = (state=defaultState,action ) =>{
  switch(action.type){
    case "GET_ALL_Track":
      return [...state,...action.allTrack]
    default:
      return state
  }
}