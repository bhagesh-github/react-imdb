import {combineEpics} from 'redux-observable';
import { addMovieEpic } from './movie.epic';
export default combineEpics(
    addMovieEpic
)