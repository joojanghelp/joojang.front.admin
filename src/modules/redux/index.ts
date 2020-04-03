import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import { all } from 'redux-saga/effects';
import sitedatas, { SiteDataState } from './sitedatas';
import  SitedatasSaga from './sitedatas/sagas';

import logins ,{ LoginState } from './logins';
import loginActionSaga from './logins/sagas';

import pages ,{ PageState } from './pages';
import PageActionSaga from './pages/sagas';

export interface RootState {
    router: RouterState,
    sitedata: SiteDataState,
    login_state: LoginState
    pages_state: PageState
}

const rootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    sitedata: sitedatas,
    login_state: logins,
    pages_state: pages,
});

export default rootReducer;

export function* rootSaga() {
    yield all(
        [
            // getSiteDataSaga(),
            ...SitedatasSaga,
            ...loginActionSaga,
            ...PageActionSaga
        ]
    );
}