import axios from 'axios';

export function search(title) {
    return function(dispatch) {
      dispatch({
        type: "LIST_REQUESTED",
      });
      
      axios.get(`http://www.omdbapi.com/?apikey=51122a9b&s=${title}`)
      .then(data => dispatch({
          type: "LIST_RECEIVED",
          payload: data
        }))
      .catch(error => dispatch({
          type: "LIST_FAILED",
          payload: error
        })
      );
    }
}