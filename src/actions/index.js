export const search = (value = "") =>{
    return {
        type: 'SEARCH',
        payload: value
    };
}

export const shuffle = () =>{
    return {
        type: 'SHUFFLE',
    };
}