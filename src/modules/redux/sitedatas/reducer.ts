import { SiteDataState } from './types';
import { ActionType } from 'modules/ActionType';
import { createReducer } from "typesafe-actions";
import { reduxStateInterface } from 'modules/Interfaces';

export type Action<T> = {
    type: ActionType;
    payload: T;
}

/**
 * 사이트 기본 리듀서 이니셜 데이터
 */
const initialState: SiteDataState = {
    state: 'idle',
}

/**
 * 사이트 기본 정보 리듀셔
 */
export const getSiteDataReducer = createReducer<reduxStateInterface>(initialState, {
   [ActionType.GET_ROOTDATA_REQUEST](state: reduxStateInterface){
       return {
           ...state,
           state: 'loading',
       };
   },
   [ActionType.GET_ROOTDATA_SUCCESS](state: reduxStateInterface,  action: Action<reduxStateInterface>){
        return {
            ...state,
            state: 'success',
        };
    },
    [ActionType.GET_ROOTDATA_ERROR](state: reduxStateInterface, action: Action<reduxStateInterface>) {
        return {
            ...state,
            state: 'failure'
        }
    },
});
export default getSiteDataReducer;