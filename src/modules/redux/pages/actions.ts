import { ActionType } from 'modules/ActionType';
import * as Interfaces from 'modules/Interfaces';

export const attemptGetUserListAction = (payload: Interfaces.getUserListRequest) => {
    return {
        type: ActionType.GET_USER_LIST_REQUEST,
        payload
    };
}

export const attemptGetBooksListAction = (payload: Interfaces.getPageingListRequest) => {
    return {
        type: ActionType.GET_BOOKS_LIST_REQUEST,
        payload
    };
}

export const attemptGetUserInfoAction = (payload: Interfaces.getUserInfoRequest) => {
    return {
        type: ActionType.GET_USER_INFO_REQUEST,
        payload
    };
}

export const attemptGetUserInfoResetAction = () => {
    return {
        type: ActionType.GET_USER_INFO_RESET
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

export const attemptBookCreateResetAction = () => {
    return {
        type: ActionType.BOOK_CREATE_RESET
    };
}

export const attemptRecommendBookListAction = (payload: Interfaces.getRecommendRequest) => {
    return {
        type: ActionType.GET_RECOMMEND_BOOKS_LIST_REQUEST,
        payload
    };
}

export const attemptAddRecommendBookAction = (payload: Interfaces.addRecommendBookRequest) => {
    return {
        type: ActionType.ADD_RECOMMEND_BOOKS_REQUEST,
        payload
    };
}

export const attemptDeleteRecommendBookAction = (payload: Interfaces.deleteRecommendBookRequest) => {
    return {
        type: ActionType.DELETE_RECOMMEND_BOOKS_REQUEST,
        payload
    };
}

export const attemptDeleteRecommendBookResetAction = () => {
    return {
        type: ActionType.DELETE_RECOMMEND_BOOKS_RESET
    };
}

export const attemptGetBookActivityListAction = (payload: Interfaces.getGubunPageingListRequest) => {
    return {
        type: ActionType.GET_BOOKS_ACTIVITY_LIST_REQUEST,
        payload
    };
}

export const attemptDeleteBookActivityAction = (payload: Interfaces.deleteBookActivityRequest) => {
    return {
        type: ActionType.DELETE_BOOKS_ACTIVITY_LIST_REQUEST,
        payload
    };
}