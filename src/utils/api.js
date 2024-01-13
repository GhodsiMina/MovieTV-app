import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const TMDB_TOKEN= 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTBhZGE5Yzc1ODFkZDVhMDRiNzZjYWIyODFlNjZmYyIsInN1YiI6IjY1ODM0ZGFhMDgzNTQ3NDVhNzNlNjdlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q2xyTI7ZYO6vhGlyAPQ9WqrGhXrfAFuMar95EDUDQvw'
const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
