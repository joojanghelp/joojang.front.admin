import { ActionType } from "modules/ActionType";

/**
 * 싸이트 기본 정보 가지오 오는 사가 액션.
 */
export const getRootDataAction = () => {
    return {
        type:ActionType.GET_ROOTDATA_REQUEST
    };
}
