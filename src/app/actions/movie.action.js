import * as actions from './types';

export const addMovie = (movie) => {
    return {
        type:actions.ADD_MOVIE,
        payload:movie
    }
} 

export const addMovieSuccess = (movie) => {
    return {
        type:actions.ADD_MOVIE_SUCCESS,
        payload:movie
    }
}

export const addMovieError = (err) => {
    return {
        type:actions.ADD_MOVIE_ERROR,
        payload:err
    }
}

export const getMovies = () => {
    return {
        type:actions.GET_MOVIES
    }
}

export const getMoviesSuccess = (movies) => {
    return {
        type:actions.GET_MOVIES_SUCCESS,
        payload:movies
    }
}

export const getMoviesError = (err) =>{
    return {
        type:actions.GET_MOVIES_ERROR,
        payload:err
    }
}