import { ActionType } from 'modules/ActionType';
import { createReducer } from "typesafe-actions";
import { PageState } from './types';
import { pageStateInterface } from 'modules/Interfaces';
import { ServerResponseInterface } from 'modules/ServerResponseInterface';

type Action<T> = {
    type: ActionType;
    payload: T;
}

const initialState: PageState = {
    users: {
        user_list: {
            state: 'idle',
            data: {
                list: []
            }
        }
    }
}


export const pagesActionReducer = createReducer<pageStateInterface>(initialState, {
    [ActionType.GET_USER_LIST_REQUEST](state: pageStateInterface) {
        return {
            ...state,
            users: {
                user_list: {
                    state: 'loading',
                }
            }
        }
    },
    [ActionType.GET_USER_LIST_SUCCESS](state: pageStateInterface, action: Action<ServerResponseInterface>) {
        return {
            ...state,
            users: {
                user_list: {
                    state: 'success',
                }
            }
        };
    },
    [ActionType.GET_USER_LIST_ERROR](state: pageStateInterface, action: Action<ServerResponseInterface>) {
        return {
            ...state,
            users: {
                user_list: {
                    state: 'failure',
                }
            }
        };
    }
});

export default pagesActionReducer;
