import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import { all } from 'redux-saga/effects';
import sitedatas, { SiteDataState, getSiteDataSaga } from './sitedatas';

export interface RootState {
    router: RouterState,
    sitedata: SiteDataState
}

const rootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    sitedata: sitedatas,
});

export default rootReducer;

export function* rootSaga() {
    yield all(
        [
            getSiteDataSaga(),
        ]
    );
}