const defaultState = [
  
]


export const AdminReducer = (state=defaultState,action ) =>{
  switch(action.type){
    case "GET_ALL_USERS":
      return [...state,...action.allUser]
    default:
      return state
  }
}