const moduleName = 'track'//для того чтобы понимать где action

const GET_TRACK =`${moduleName}/GET_TRACK`


const defaultState = {
  track:[],
}


export default (state=defaultState, { type , payload } ) =>{
  switch (type){
    case GET_TRACK:
      return {...state, track:payload.date}
    default:
      return state;
  }
}

export const getTrack =  async(dispatch) =>{
  dispatch({type:GET_TRACK ,payload:[{id:1,title:'asd'}]})
}