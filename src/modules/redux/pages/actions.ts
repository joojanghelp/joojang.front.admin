import { ActionType } from 'modules/ActionType';
import * as Interfaces from 'modules/Interfaces';

export const attemptGetUserListAction = (payload: Interfaces.getUserListRequest) => {
    return {
        type: ActionType.GET_USER_LIST_REQUEST,
        payload
    };
}

export const attemptGetUserInfoAction = (payload: Interfaces.getUserInfoRequest) => {
    return {
        type: ActionType.GET_USER_INFO_REQUEST,
        payload
    };
}

export const attemptUserDataUpdateAction = (payload: Interfaces.UserDataUpdate) => {
    return {
        type: ActionType.USER_DATA_UPDATE_REQUEST,
        payload
    };
}

export const attemptUserActiveUpdateAction = (payload: Interfaces.userActiveRequest) => {
    return {
        type: ActionType.USER_ACTIVE_UPDATE_REQUEST,
        payload
    };
}

export const attemptBookCreateAction = (payload: Interfaces.bookCreateRequest) => {
    return {
        type: ActionType.BOOK_CREATE_REQUEST,
        payload
    };
}