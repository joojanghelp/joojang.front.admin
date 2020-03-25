import GlobalAxios from 'lib/GlobalAxios';

import {
    apiResponseInterface,
} from 'modules/Interfaces';


export function getSiteData(): Promise<apiResponseInterface> {
    return GlobalAxios.init('get', '/api/justgram/v1/system/sitedata', {});
};

