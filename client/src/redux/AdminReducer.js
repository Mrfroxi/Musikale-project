const defaultState = [
  
]


export const AdminReducer = (state=defaultState,action ) =>{
  // console.log(action)
  switch(action.type){
    case "GET_ALL_USERS":
      return [...state,...action.allUser]
    case "DELETE_USER": 
      console.log(state.filter((value) => +value.id !== +action.id ))
      return state.filter((value) => +value.id !== +action.id )
    default:
      return state
  }
}