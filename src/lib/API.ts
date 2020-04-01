import GlobalAxios from 'lib/GlobalAxios';
import * as Interfaces from 'modules/Interfaces';

export function attemptLogin(payload: Interfaces.loginRequest): Promise<Interfaces.defaultServerResponse> {
    return GlobalAxios.init(false, 'post', '/api/v1/auth/login', payload);
};

export function getSiteData(): Promise<Interfaces.defaultServerResponse> {
    return GlobalAxios.init(true , 'get', '/api/v1/system/basedata', {});
};

export function attemptGetUserList(payload: Interfaces.getUserListRequest): Promise<Interfaces.defaultServerResponse> {
    return GlobalAxios.init(true, 'get', `/api/v1/admin/users/page/${payload.pageNumber}`, []);
};

export function attemptGetUserInfo(payload: Interfaces.getUserInfoRequest): Promise<Interfaces.defaultServerResponse> {
    return GlobalAxios.init(true, 'get', `/api/v1/admin/users/${payload.user_uuid}/info`, []);
};

export function attemptUserDataUpdate(payload: Interfaces.UserDataUpdate): Promise<Interfaces.defaultServerResponse> {
    return GlobalAxios.init(true, 'post', `/api/v1/admin/users/${payload.user_uuid}/info`, payload);
};

export function attemptUserActiveUpdate(payload: Interfaces.userActiveRequest): Promise<Interfaces.defaultServerResponse> {
    return GlobalAxios.init(true, 'post', `/api/v1/admin/users/active`, payload);
};

export function attemptBookExitsCheckRequest(payload: Interfaces.bookExitsCheckRequest): Promise<Interfaces.defaultServerResponse> {
    return GlobalAxios.init(true, 'get', `/api/v1/admin/book/${payload.book_uuid}/exits`, {});
};

export function attemptBookCreateRequest(payload: Interfaces.bookCreateRequest): Promise<Interfaces.defaultServerResponse> {
    return GlobalAxios.init(true, 'post', `/api/v1/user/books`, payload);
};