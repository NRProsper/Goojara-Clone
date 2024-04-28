import {useLoadingStore} from "@/stores/loading.js";
import axios from "axios";


const apiKey = "2faf74e2ae836af040529600092def36"
export async function getTrendMovieData(cat) {
    const loadingStore = useLoadingStore();
    loadingStore.setLoading(true);

    try {
        let resp = await  axios.get(`https://api.themoviedb.org/3/trending/${cat}/day?api_key=${apiKey}`)
        loadingStore.resetState();
        return resp.data.results;
    }catch (e) {
        return []
    }
}

export async function getPopularMovieData(cat) {
    const loadingStore = useLoadingStore();
    loadingStore.setLoading(true);
    try {
        let resp = await  axios.get(`https://api.themoviedb.org/3/${cat}/popular?api_key=${apiKey}`)
        loadingStore.resetState();
        return resp.data.results;
    }catch (e) {
        return []
    }
}


export function getMoviePoster(posterUrl) {
    return `https://image.tmdb.org/t/p/w500/${posterUrl}`
}

export async function getGenres() {
    const loadingStore = useLoadingStore();
    loadingStore.setLoading(true);
    try {
        console.log("Fetching Data...")
        let resp = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
        loadingStore.resetState();
        return resp.data.genres
    }catch (e) {
        console.log("Data not fetched")
        return []
    }
}

export async function getRecentMovieData() {
    try {
        const moviesPromise = getTrendMovieData("movie")
        const seriesPromise = getTrendMovieData("tv")

        const [movies, series] = await Promise.all([moviesPromise, seriesPromise]);

        const movieWithType = movies.map(movie =>({...movie, type:"movie"}))
        const seriesWithType = series.map(seriesIt =>({...seriesIt, type:"tv"}))


        return {
            movies: movieWithType,
            series: seriesWithType,
        };

    }catch (e) {
        
    }
}

export async function getPopularData() {
    try {
        const moviesPromise = getPopularMovieData("movie")
        const seriesPromise =getPopularMovieData("tv")

        const [movies, series] = await Promise.all([moviesPromise, seriesPromise]);

        const movieWithType = movies.map(movie =>({...movie, type:"movie"}))
        const seriesWithType = series.map(seriesIt =>({...seriesIt, type:"tv"}))



        return {
            movies: movieWithType,
            series: seriesWithType,
        };

    }catch (e) {

    }
}

export function sortedMovies(data) {
    const validData = data.filter(item => item && typeof item === 'object' && typeof item.popularity === 'number');
    const sortedData = validData.sort((a, b) => b.popularity - a.popularity);
    return sortedData;
}

export function sortMovies(movies) {
    return movies.sort((a,b) => b.popularity - a.popularity)
}