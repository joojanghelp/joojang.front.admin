import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import { all } from 'redux-saga/effects';

import sitedatas, { SiteDataState } from './sitedatas';
import getSiteDataSaga from './sitedatas/sagas';

export interface RootState {
    router: RouterState,
    sitedata: SiteDataState
}

export const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    sitedata: sitedatas,
});

export function* rootSaga() {
    yield all(
        [
            ...getSiteDataSaga,
        ]
    );
}