export default function searchReducer(state = {data: [], status: "waiting"}, action){
    switch (action.type) {
        case "LIST_REQUESTED":
            state = Object.assign({}, state, {data: [], status: "waiting"});
            break;
        case "LIST_RECEIVED":
            state = Object.assign({}, state, {data: [action.payload.data.Search], status: "received"});
            break;
        case "LIST_FAILED":
            state = Object.assign({}, state, {data: [], status: "failed", error: action.payload});
            break;
        default:
            return state;
      }
      return state;
}