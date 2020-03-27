import { ActionType } from 'modules/ActionType';

export const attemptGetUserListAction = (pageNumber: number) => {
    return {
        type: ActionType.GET_USER_LIST_REQUEST,
        payload : {
            pageNumber: pageNumber
        }
    };
}