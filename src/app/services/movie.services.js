import axios from'axios';
import { Observable } from'rxjs/Observable';

export const addMovie = (movie) => {
    return Observable.fromPromise(axios.post('http://localhost:4000/movies',movie))
}

export const getMovies = () => {
    return Observable.fromPromise(axios.get('http://localhost:4000/movies'))
}