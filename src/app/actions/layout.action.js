import * as actions from './types';

export const toggleMenu = (toggleState) => {
    return {
        type:actions.TOGGLE_MENU,
        payload:toggleState
    }
}