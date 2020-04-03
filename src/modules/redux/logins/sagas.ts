import { put, takeLatest, fork, call } from "redux-saga/effects";
import { ActionType } from 'modules/ActionType';
import { loginRequest } from 'modules/Interfaces';
import { attemptLogin } from 'lib/API';

export function* loginActionSaga({ payload }: { payload: loginRequest }) {
    const response = yield call(attemptLogin, payload);
    if(response.state === true) {
        yield put({ type: ActionType.LOGIN_DATA_SUCCESS, payload: response.data});
    } else {
        yield put({ type: ActionType.LOGIN_DATA_ERROR, payload: response});
    }
}

function* onLoginRequestWatcher() {
    yield takeLatest(ActionType.LOGIN_DATA_REQUEST as any, loginActionSaga);
}

export default [
    fork(onLoginRequestWatcher),
];