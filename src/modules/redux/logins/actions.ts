import { ActionType } from 'modules/ActionType';
import { loginRequestInterface} from 'modules/Interfaces';

export const attemptLoginAction = (payload: loginRequestInterface) => {
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