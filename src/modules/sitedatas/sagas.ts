import { put, takeLatest, fork, call } from "redux-saga/effects";
import { getSiteData } from 'lib/API';
import { ActionType } from 'modules/ActionType';
/**
 * 사이트 기본 정보 사가.
 * @param actions
 * @constructor
 */
function* getSiteDataSaga() {
    const response = yield call(getSiteData);
    if(response.state === true) {
        yield put({ type: ActionType.GET_ROOTDATA_SUCCESS, payload: response.data });
    } else {
        yield put({ type: ActionType.GET_ROOTDATA_ERROR, payload: response.message });
    }
};

function* onLoginRequestWatcher() {
    yield takeLatest(ActionType.GET_ROOTDATA_REQUEST as any, getSiteDataSaga);
}

export default [
    fork(onLoginRequestWatcher),
];