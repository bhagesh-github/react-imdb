import { applyMiddleware, combineReducers, createStore } from 'redux';
import { LayoutReducer } from '../reducers/layout.reducer';
import { createEpicMiddleware } from 'redux-observable';
import { reducer as formReducer } from 'redux-form';
//import rootEpic from '../epics';

const reducers = combineReducers({
    layout: LayoutReducer,
    form: formReducer
})

//const epicMiddleware = createEpicMiddleware(rootEpic);

export const store = createStore(reducers);