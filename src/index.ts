import { ActionReducer } from '@ngrx/store';
import * as deepFreeze from 'deep-freeze-strict';

export function storeFreeze(reducer): ActionReducer<any> {
    return function (state = {}, action) {
        deepFreeze(state);
        if (action.payload) {
            deepFreeze(action.payload);
        }
        const nextState = reducer(state, action);
        deepFreeze(nextState);
        return nextState;
    }
}
