import axios from 'axios';

export default async function searchReducer(state = {}, action){
    switch(action.type){
        case 'SEARCH':{
            try {
                let title = action.payload.replace(/ /g,"+");
                let response = await axios.get(`http://www.omdbapi.com/?apikey=51122a9b&s=${title}`);
                let movies = response.data.Search;
                if (response.data.Error === "Movie not found!")
                    throw 'noResults';
                if (response.data.Error === "Too many results.")
                    throw 'tooManyResults';
                return movies;
            }
            catch (e) {
                return [{Title: e.message}];
            }
        }
        case 'SHUFFLE':{
                let movies = [];
                let random = Math.floor(Math.random() * (1000 - 1)) + 1;
                let response = await axios.get(`http://www.omdbapi.com/?apikey=51122a9b&t=i=tt${random.toString().padStart(7, '0')}`);
                movies = [JSON.parse(response)];
                console.log(movies);            
            }

            return {};
        default:
            return state;
    }
}