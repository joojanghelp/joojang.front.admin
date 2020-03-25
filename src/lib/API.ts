import GlobalAxios from 'lib/GlobalAxios';
import {ServerResponseInterface} from 'modules/ServerResponseInterface';

import {
    loginRequestInterface
} from 'modules/Interfaces';


export function getSiteData(): Promise<ServerResponseInterface> {
    return GlobalAxios.init('get', '/api/v1/system/sitedata', {});
};

export function attemptLogin(payload: loginRequestInterface): Promise<ServerResponseInterface> {
    return GlobalAxios.init('post', '/api/v1/auth/login', payload);
};
