import { fromPromise } from 'rxjs/observable/fromPromise';
import {Observable} from 'rxjs/Observable';
import {combineEpics} from 'redux-observable';
import {startSubmit,stopSubmit} from 'redux-form';

const registerEpic = action$ => 
action$.ofType('REUEST_SUBMIT')
.mergeMap(action => 
    fromPromise(saveToken(''))
    .map(x => ({
        type:'TOKEN_CLEARED'
    }))
)

export default combineEpics(
    registerEpic
)