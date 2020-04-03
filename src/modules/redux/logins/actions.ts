import { ActionType } from 'modules/ActionType';
import { loginRequest } from 'modules/Interfaces';

export const attemptLoginAction = (payload: loginRequest) => {
    return {
        type: ActionType.LOGIN_DATA_REQUEST,
        payload
    }
}

export const attemptLoginResetAction = () => {
    return {
        type: ActionType.LOGIN_DATA_RESET,
    }
}