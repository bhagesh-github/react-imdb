import 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs/Observable';
import * as actions from '../actions/types';
import { addMovieSuccess, addMovieError, getMoviesSuccess, getMoviesError } from '../actions/movie.action';
import { addMovie, getMovies } from '../services/movie.services';

export const addMovieEpic = action$ =>
action$.ofType(actions.ADD_MOVIE)
.mergeMap(action =>
    addMovie(action.payload)
    //ajax.post('http://localhost:4000/movies',JSON.stringify(action.payload))
    //.do((data)=> console.log(data.data.thumbnail[0].preview))
    .map(data => addMovieSuccess(data.data))
    .catch(error => Observable.of(addMovieError(error)))
);

export const getMoviesEpic = action$ =>
action$.ofType(actions.GET_MOVIES)
.mergeMap(action =>
    getMovies()
    .map(data => getMoviesSuccess(data.data))
    .catch(error => Observable.of(getMoviesError(error)))
);