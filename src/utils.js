import axios from "axios";

export const tabs = [
    { label: 'Recent', name: 'recent-movie' },
    { label: 'Popular', name: 'popular-movie' },
    { label: 'Genres', name: 'by-genres' },
    { label: 'Year', name: 'by-year' },
    { label: 'A-Z', name: 'az' },
    { label: 'Language', name: 'language' }
];

export const getPoster = (url) => {
    return `https://image.tmdb.org/t/p/w500/${url}`;
}

export function _shuffle(array) {
    const shuffled = [...array];
    //Fisher-Yates shuffle algorithm
    for(let i = shuffled.length-1; i > 0; i-- ) {
        const j = Math.floor(Math.random() * (i+1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

//Sorting to sort based on first_air_date for tv and release_date for movie
export function _sort(array) {
    function compare(a, b) {
        if(a.type !== b.type) {
            return a.type === 'tv' ? -1 : 1;
        }
        if(a.type === 'tv') {
            return new Date(a.first_air_date) - new Date(b.first_air_date);
        }else {
            return new Date(a.release_date) - new Date(b.release_date);
        }
    }
    return array.sort(compare);
}