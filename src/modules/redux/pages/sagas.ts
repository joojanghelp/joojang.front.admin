import { takeLatest, fork, call, put } from "redux-saga/effects";
import { ActionType } from 'modules/ActionType';
import { getUserListRequest, getUserInfoRequest, UserDataUpdate } from 'modules/Interfaces';
import * as API from 'lib/API';

export function* getUserListActionSaga({ payload }: { payload: getUserListRequest }) {
    const response = yield call(API.attemptGetUserList, payload);
    if(response.state === true) {
        yield put({type:ActionType.GET_USER_LIST_SUCCESS, payload: response.data});
    } else {
        yield put({type:ActionType.GET_USER_LIST_ERROR, payload: response.data});
    }
}

export function* getUserInfoActionSaga({ payload }: { payload: getUserInfoRequest }) {
    const response = yield call(API.attemptGetUserInfo, payload);
    if(response.state === true) {
        yield put({type:ActionType.GET_USER_INFO_SUCCESS, payload: response.data});
    } else {
        yield put({type:ActionType.GET_USER_INFO_ERROR, payload: response.data});
    }
}

export function* userUpdateActionSaga({ payload }: { payload: UserDataUpdate }) {
    const response = yield call(API.attemptUserDataUpdate, payload);
    if(response.state === true) {
        yield put({type:ActionType.USER_DATA_UPDATE_SUCCESS, payload: response.data});
    } else {
        yield put({type:ActionType.USER_DATA_UPDATE_ERROR, payload: response.data});
    }
}

function* onPagesRequestWatcher() {
    yield takeLatest(ActionType.GET_USER_LIST_REQUEST as any, getUserListActionSaga);
    yield takeLatest(ActionType.GET_USER_INFO_REQUEST as any, getUserInfoActionSaga);
    yield takeLatest(ActionType.USER_DATA_UPDATE_REQUEST as any, userUpdateActionSaga);
}

export default [
    fork(onPagesRequestWatcher),
]