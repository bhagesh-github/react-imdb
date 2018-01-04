import * as actions from '../actions/types';

const initialState = {
    toggleState:'expanded'
}

export const LayoutReducer = (state=initialState,action) => {
    switch(action.type) {
        case actions.TOGGLE_MENU:
            return {
                ...state,
                toggleState:action.payload
            }
        default:
            return state;
    }
}