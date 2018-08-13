import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
    return '_SUCCESS' == type.substring(type.length - 8);
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
    if(types.BEGIN_AJAX_CALL == action.type) {
        state = state + 1;
    } else if(types.AJAX_CALL_ERROR == action.type || actionTypeEndsInSuccess(action.type)) {
        state = state - 1;
    }
    return state;
}