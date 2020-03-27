import { takeLatest, fork, call } from "redux-saga/effects";
import { ActionType } from 'modules/ActionType';
import { getUserListRequestInterface } from 'modules/Interfaces';
import { attemptGetUserList } from 'lib/API';

export function* getUserListActionSaga({ payload }: { payload: getUserListRequestInterface }) {
    // console.debug(payload.pageNumber);
    const response = yield call(attemptGetUserList, payload);

    // console.debug(response.state);
}


function* onPagesRequestWatcher() {
    yield takeLatest(ActionType.GET_USER_LIST_REQUEST as any, getUserListActionSaga);
}

export default [
    fork(onPagesRequestWatcher),
]