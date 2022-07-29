import { TYPES } from "./actions";


const initialState = {
  allText: [],
  copyText: []
};


function rootReducer(state = initialState, action) {

  switch(action.type) {
    
    case TYPES.GET_TEXT:
    console.log("text in reducer:", action.payload);

    return {
      ...state,
      allText: [...state.allText, action.payload],
      copyText: [...state.copyText, action.payload]
    }

    default: return state

  }

};



export default rootReducer;