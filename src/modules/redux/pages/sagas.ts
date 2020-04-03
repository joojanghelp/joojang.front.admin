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

export function* getBookListActionSaga({ payload }: { payload: Interfaces.getPageingListRequest }) {
    const response = yield call(API.attemptGetBookListRequest, payload);
    if(response.state === true) {
        yield put({type:ActionType.GET_BOOKS_LIST_SUCCESS, payload: response.data});
    } else {
        yield put({type:ActionType.GET_BOOKS_LIST_ERROR, payload: response.data});
    }
}

export function* getRecommendBookListActionSaga({ payload }: { payload: Interfaces.getRecommendRequest }) {
    const response = yield call(API.attemptGetRecommendBookListRequest, payload);
    if(response.state === true) {
        yield put({type:ActionType.GET_RECOMMEND_BOOKS_LIST_SUCCESS, payload: response.data});
    } else {
        yield put({type:ActionType.GET_RECOMMEND_BOOKS_LIST_ERROR, payload: response.data});
    }
}


export function* recommendBookAddActionSaga({ payload }: { payload: Interfaces.addRecommendBookRequest }) {
    const response = yield call(API.attemptAddRecommendBookRequest, payload);
    if(response.state === true) {
        yield put({type:ActionType.ADD_RECOMMEND_BOOKS_SUCCESS, payload: response.data});
    } else {
        yield put({type:ActionType.ADD_RECOMMEND_BOOKS_ERROR, payload: response.data});
    }
}

export function* recommendBookDeleteActionSaga({ payload }: { payload: Interfaces.deleteRecommendBookRequest }) {
    const response = yield call(API.attemptDeleteRecommendBookRequest, payload);
    if(response.state === true) {
        yield put({type:ActionType.DELETE_RECOMMEND_BOOKS_SUCCESS, payload: response.data});
    } else {
        yield put({type:ActionType.DELETE_RECOMMEND_BOOKS_ERROR, payload: response.data});
    }
}



export function* getBookActivityListActionSaga({ payload }: { payload: Interfaces.getGubunPageingListRequest }) {
    const response = yield call(API.attemptGetBookActivityListRequest, payload);
    if(response.state === true) {
        yield put({type:ActionType.GET_BOOKS_ACTIVITY_LIST_SUCCESS, payload: response.data});
    } else {
        yield put({type:ActionType.GET_BOOKS_ACTIVITY_LIST_ERROR, payload: response.data});
    }
}

export function* deleteBookActivityActionSaga({ payload }: { payload: Interfaces.deleteBookActivityRequest }) {
    const response = yield call(API.attemptDeleteBookActivityRequest, payload);
    if(response.state === true) {
        yield put({type:ActionType.DELETE_BOOKS_ACTIVITY_LIST_SUCCESS, payload: response.data});
    } else {
        yield put({type:ActionType.DELETE_BOOKS_ACTIVITY_LIST_ERROR, payload: response.data});
    }
}


function* onPagesRequestWatcher() {
    yield takeLatest(ActionType.GET_USER_LIST_REQUEST as any, getUserListActionSaga);
    yield takeLatest(ActionType.GET_USER_INFO_REQUEST as any, getUserInfoActionSaga);
    yield takeLatest(ActionType.USER_DATA_UPDATE_REQUEST as any, userUpdateActionSaga);
    yield takeLatest(ActionType.USER_ACTIVE_UPDATE_REQUEST as any, userUpdateActiveActionSaga);
    yield takeLatest(ActionType.BOOK_CREATE_REQUEST as any, bookCreateActionSaga);
    yield takeLatest(ActionType.GET_BOOKS_LIST_REQUEST as any, getBookListActionSaga);
    yield takeLatest(ActionType.GET_RECOMMEND_BOOKS_LIST_REQUEST as any, getRecommendBookListActionSaga);
    yield takeLatest(ActionType.ADD_RECOMMEND_BOOKS_REQUEST as any, recommendBookAddActionSaga);
    yield takeLatest(ActionType.DELETE_RECOMMEND_BOOKS_REQUEST as any, recommendBookDeleteActionSaga);
    yield takeLatest(ActionType.GET_BOOKS_ACTIVITY_LIST_REQUEST as any, getBookActivityListActionSaga);
    yield takeLatest(ActionType.DELETE_BOOKS_ACTIVITY_LIST_REQUEST as any, deleteBookActivityActionSaga);

}

export default [
    fork(onPagesRequestWatcher),
]