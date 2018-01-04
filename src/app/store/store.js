import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { REDUCERS } from '../reducers';
import rootEpic from '../epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

export const store = createStore(REDUCERS,applyMiddleware(epicMiddleware));