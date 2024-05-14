import axios from "axios";

const API_KEY = import.meta.env.VITE_MOVIE_API;

const apiClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
})

export default {
    getGenres() {
        return apiClient.get('genre/movie/list?api_key='+API_KEY);
    },
    getTrending(category) {
        return apiClient.get('trending/'+category+'/day?api_key='+API_KEY);
    },
    getPopular(category) {
        return apiClient.get(category+'/popular?api_key='+API_KEY);
    },
}