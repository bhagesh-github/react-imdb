import {  combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { LayoutReducer } from './layout.reducer';
import { MovieReducer } from './movie.reducer';

export const REDUCERS = combineReducers({
    layout: LayoutReducer,
    form: formReducer,
    movie: MovieReducer
})
