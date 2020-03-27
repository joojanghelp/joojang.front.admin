import GlobalAxios from 'lib/GlobalAxios';
import {ServerResponseInterface} from 'modules/ServerResponseInterface';
import { getUserListRequestInterface } from 'modules/Interfaces';

import {
    loginRequestInterface
} from 'modules/Interfaces';

export function attemptLogin(payload: loginRequestInterface): Promise<ServerResponseInterface> {
    return GlobalAxios.init(false, 'post', '/api/v1/auth/login', payload);
};

export function getSiteData(): Promise<ServerResponseInterface> {
    return GlobalAxios.init(true , 'get', '/api/v1/system/sitedata', {});
};

export function attemptGetUserList(payload: getUserListRequestInterface): Promise<ServerResponseInterface> {
    return GlobalAxios.init(true, 'get', `/api/v1/admin/users/page/${payload.pageNumber}`, []);
};
