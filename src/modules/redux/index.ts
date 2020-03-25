import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import { all } from 'redux-saga/effects';
import sitedatas, { SiteDataState, getSiteDataSaga } from './sitedatas';

import logins ,{ LoginState } from './logins';
import loginActionSaga from './logins/sagas';

export interface RootState {
    router: RouterState,
    sitedata: SiteDataState,
    login_state: LoginState
}

const rootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    sitedata: sitedatas,
    login_state: logins,
});

export default rootReducer;

export function* rootSaga() {
    yield all(
        [
            // getSiteDataSaga(),
            ...loginActionSaga
        ]
    );
}