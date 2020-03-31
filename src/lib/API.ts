import GlobalAxios from 'lib/GlobalAxios';
import {
    defaultServerResponse,
    getUserListRequest,
    loginRequest,
    getUserInfoRequest,
    UserDataUpdate,
} from 'modules/Interfaces';

export function attemptLogin(payload: loginRequest): Promise<defaultServerResponse> {
    return GlobalAxios.init(false, 'post', '/api/v1/auth/login', payload);
};

export function getSiteData(): Promise<defaultServerResponse> {
    return GlobalAxios.init(true , 'get', '/api/v1/system/basedata', {});
};

export function attemptGetUserList(payload: getUserListRequest): Promise<defaultServerResponse> {
    return GlobalAxios.init(true, 'get', `/api/v1/admin/users/page/${payload.pageNumber}`, []);
};

export function attemptGetUserInfo(payload: getUserInfoRequest): Promise<defaultServerResponse> {
    return GlobalAxios.init(true, 'get', `/api/v1/admin/users/${payload.user_uuid}/info`, []);
};

export function attemptUserDataUpdate(payload: UserDataUpdate): Promise<defaultServerResponse> {
    return GlobalAxios.init(true, 'post', `/api/v1/admin/users/${payload.user_uuid}/info`, payload);
};