export const TOGGLE_MENU = 'TOGGLE_MENU';

export const toggleMenu = (toggleState) => {
    return {
        type:TOGGLE_MENU,
        payload:toggleState
    }
}