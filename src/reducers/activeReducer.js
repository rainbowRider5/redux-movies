export default function activeReducer(state = false, action){
    switch(action.type){
        case "ACITVATE":
            return !state;
        default:
            return state;
    }
}