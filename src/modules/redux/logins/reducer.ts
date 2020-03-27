import { ActionType } from 'modules/ActionType';
import { createReducer } from "typesafe-actions";
import { LoginState } from './types';
import { loginStateInterface } from 'modules/Interfaces';
import { ServerResponseInterface } from 'modules/ServerResponseInterface';

type Action<T> = {
    type: ActionType;
    payload: T;
}

const initialState: LoginState = {
    state: 'idle',
    data: {}
}

export const loginActionReducer = createReducer<loginStateInterface>(initialState, {
    [ActionType.LOGIN_DATA_REQUEST](state: loginStateInterface) {
        return {
            ...state,
            state: 'loading',
        };
    },
    [ActionType.LOGIN_DATA_SUCCESS](state: loginStateInterface, action: Action<ServerResponseInterface>) {
        return {
            ...state,
            state: 'success',
            data: {
                token_type: action.payload.token_type,
                expires_in: action.payload.expires_in,
                access_token: action.payload.access_token,
                refresh_token: action.payload.refresh_token,
                user_name: action.payload.user_name,
            }
        };
    },
    [ActionType.LOGIN_DATA_ERROR](state: loginStateInterface, action: Action<ServerResponseInterface>) {
        return {
            ...state,
            state: 'failure',
            message: action.payload.message
        };
    },
    [ActionType.LOGIN_DATA_RESET](state: loginStateInterface) {
        return {
            ...state,
            state: 'idle',
            data: {}
        };
    }
});

export default loginActionReducer;