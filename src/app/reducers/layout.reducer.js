import * as LayoutAction from '../actions/layout.action';

const initialState = {
    toggleState:'expanded'
}

export const LayoutReducer = (state=initialState,action) => {
    switch(action.type) {
        case LayoutAction.TOGGLE_MENU:
            return {
                ...state,
                toggleState:action.payload
            }
        default:
            return state;
    }
}