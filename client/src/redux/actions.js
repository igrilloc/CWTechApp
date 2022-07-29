import axios from 'axios';


export const TYPES = {
  GET_TEXT: "GET_TEXT"
};


export function getText(text) {
  return async function(dispatch) {
        
    try {

      const json = await axios.get(`http://localhost:3001/iecho?text=${text}`);
      // console.log(json.data)

      return dispatch (
        {
          type: TYPES.GET_TEXT,
          payload: json.data
        }
      );
            

    } catch(error) {
      console.log(error);
            
      return dispatch(
        {
          type:TYPES.GET_TEXT,
          payload:"No text"
        }
      )

    }
  }
};

