import { ActionType } from 'modules/ActionType';
import {
    getUserListRequest,
    getUserInfoRequest,
    UserDataUpdate,
    userActiveRequest,
} from 'modules/Interfaces';

export const attemptGetUserListAction = (payload: getUserListRequest) => {
    return {
        type: ActionType.GET_USER_LIST_REQUEST,
        payload
    };
}

export const attemptGetUserInfoAction = (payload: getUserInfoRequest) => {
    return {
        type: ActionType.GET_USER_INFO_REQUEST,
        payload
    };
}

export const attemptUserDataUpdateAction = (payload: UserDataUpdate) => {
    return {
        type: ActionType.USER_DATA_UPDATE_REQUEST,
        payload
    };
}


export const attemptUserActiveUpdateAction = (payload: userActiveRequest) => {
    return {
        type: ActionType.USER_ACTIVE_UPDATE_REQUEST,
        payload
    };
}