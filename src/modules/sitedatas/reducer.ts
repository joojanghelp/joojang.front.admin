import { SiteDataState } from './types';
import { ActionType } from 'modules/ActionType';
import { createReducer } from "typesafe-actions";
import { sitedataSagaResponseType } from 'modules/types';

export type Action<T> = {
    type: ActionType;
    payload: T;
}

/**
 * 사이트 기본 리듀서 이니셜 데이터
 */
const initialState: SiteDataState = {
    state: 'yet',
    code_list: [],
}

/**
 * 사이트 기본 정보 리듀셔
 */
export const getSiteDataReducer = createReducer<sitedataSagaResponseType>(initialState, {
   [ActionType.GET_ROOTDATA_REQUEST](state: sitedataSagaResponseType){
       return {
           ...state,
           state: 'yet',
           code_list: []
       };
   },
   [ActionType.GET_ROOTDATA_SUCCESS](state: sitedataSagaResponseType,  action: Action<sitedataSagaResponseType>){
        return {
            ...state,
            state: 'success',
            code_list: action.payload.code_list,
        };
    },
    [ActionType.GET_ROOTDATA_ERROR](state: sitedataSagaResponseType, action: Action<sitedataSagaResponseType>) {
        return {
            ...state,
            state: 'failure'
        }
    },
});
export default getSiteDataReducer;