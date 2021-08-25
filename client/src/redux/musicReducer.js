const defaultState = [
{
  name:'filipkirkorov',
  cash:6
},
{
  name:'filipkirkorov',
  cash:5
},
{
  name:'filipkirkorov',
  cash:7
},
{
  name:'filipkirkorov',
  cash:77
},
{
  name:'filipkirkorov',
  cash:8
},

]


export const musicReducer = (state=defaultState,action ) =>{
  console.log(state)
  switch(action.type){
    case "GET_Music":
      return {...state,cash:state.cash+1}
    default:
      return state
  }
}