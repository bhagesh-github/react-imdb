import * as actions from '../actions/types';

const initialState = {
    movies:[],
    loading:undefined,
    success:undefined
}

export const MovieReducer = (state=initialState,action) =>  {
    switch(action.type) {
        case actions.ADD_MOVIE:
            return {
                ...state,
                loading:true
            }
        case actions.ADD_MOVIE_SUCCESS:
            return {
                ...state,
                loading:false,
                movies:[...state.movies,action.payload],
                success:true
            }
        case actions.ADD_MOVIE_ERROR:
            return {
                ...state,
                loading:false,
                success:false
            }
        case actions.GET_MOVIES:
            return {
                ...state,
                loading:true,
                success:undefined
            }
        case actions.GET_MOVIES_SUCCESS:
            return {
                ...state,
                loading:false,
                success:true,
                movies:action.payload
            }
        case actions.GET_MOVIES_ERROR:
            return {
                ...state,
                loading:false,
                success:false
            }
        default:
            return state
    }
}