import { SiteDataState } from './types';
import { ActionType } from 'modules/ActionType';
import { createReducer } from "typesafe-actions";
import { siteBaseDataResponse } from 'modules/Interfaces';

export type Action<T> = {
    type: ActionType;
    payload: T;
}

/**
 * 사이트 기본 리듀서 이니셜 데이터
 */
const initialState: SiteDataState = {
    state: 'idle',
    code_list: [],
}

/**
 * 사이트 기본 정보 리듀셔
 */
export const getSiteDataReducer = createReducer<SiteDataState>(initialState, {
   [ActionType.GET_ROOTDATA_REQUEST](state: SiteDataState){
       return {
           ...state,
           state: 'loading',
       };
   },
   [ActionType.GET_ROOTDATA_SUCCESS](state: SiteDataState,  action: Action<siteBaseDataResponse>){
        return {
            ...state,
            state: 'success',
            code_list: action.payload.items.code_list
        };
    },
    [ActionType.GET_ROOTDATA_ERROR](state: SiteDataState, action: Action<siteBaseDataResponse>) {
        return {
            ...state,
            state: 'failure'
        }
    },
});
export default getSiteDataReducer;