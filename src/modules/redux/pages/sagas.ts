import { takeLatest, fork, call, put } from "redux-saga/effects";
import { ActionType } from 'modules/ActionType';
import * as Interfaces from 'modules/Interfaces';
import * as API from 'lib/API';

export function* getUserListActionSaga({ payload }: { payload: Interfaces.getUserListRequest }) {
    const response = yield call(API.attemptGetUserList, payload);
    if(response.state === true) {
        yield put({type:ActionType.GET_USER_LIST_SUCCESS, payload: response.data});
    } else {
        yield put({type:ActionType.GET_USER_LIST_ERROR, payload: response.data});
    }
}

export function* getUserInfoActionSaga({ payload }: { payload: Interfaces.getUserInfoRequest }) {
    const response = yield call(API.attemptGetUserInfo, payload);
    if(response.state === true) {
        yield put({type:ActionType.GET_USER_INFO_SUCCESS, payload: response.data});
    } else {
        yield put({type:ActionType.GET_USER_INFO_ERROR, payload: response.data});
    }
}

export function* userUpdateActionSaga({ payload }: { payload: Interfaces.UserDataUpdate }) {
    const response = yield call(API.attemptUserDataUpdate, payload);
    if(response.state === true) {
        yield put({type:ActionType.USER_DATA_UPDATE_SUCCESS, payload: response.data});
    } else {
        yield put({type:ActionType.USER_DATA_UPDATE_ERROR, payload: response.data});
    }
}

export function* userUpdateActiveActionSaga({ payload }: { payload: Interfaces.userActiveRequest }) {
    const response = yield call(API.attemptUserActiveUpdate, payload);
    if(response.state === true) {
        yield put({type:ActionType.USER_ACTIVE_UPDATE_SUCCESS, payload: response.data});
    } else {
        yield put({type:ActionType.USER_ACTIVE_UPDATE_ERROR, payload: response.data});
    }
}

export function* bookCreateActionSaga({ payload }: { payload: Interfaces.bookCreateRequest }) {
    const response = yield call(API.attemptBookCreateRequest, payload);
    if(response.state === true) {
        yield put({type:ActionType.BOOK_CREATE_SUCCESS, payload: response.data});
    } else {
        yield put({type:ActionType.BOOK_CREATE_ERROR, payload: response.data});
    }
}

function* onPagesRequestWatcher() {
    yield takeLatest(ActionType.GET_USER_LIST_REQUEST as any, getUserListActionSaga);
    yield takeLatest(ActionType.GET_USER_INFO_REQUEST as any, getUserInfoActionSaga);
    yield takeLatest(ActionType.USER_DATA_UPDATE_REQUEST as any, userUpdateActionSaga);
    yield takeLatest(ActionType.USER_ACTIVE_UPDATE_REQUEST as any, userUpdateActiveActionSaga);
    yield takeLatest(ActionType.BOOK_CREATE_REQUEST as any, bookCreateActionSaga);
}

export default [
    fork(onPagesRequestWatcher),
]