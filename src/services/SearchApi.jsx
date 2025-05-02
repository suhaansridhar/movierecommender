import axios from 'axios';

const API_KEY = 'http://www.omdbapi.com/?i=tt3896198&apikey=59837dd7';
const BASE_URL = 'https://www.omdbapi.com/';

export async function fetchMovies(query){
    try{
        const response = await axios.get(BASE_URL, {
            params:{
                apikey: API_KEY, 
                s: query
            }
        })

        if(response.data.Response === "True"){
            return response.data.Search;
        }else{
            return [];
        }
    }catch(err){
        alert("Error is : ", err);
        throw err;
    }
}