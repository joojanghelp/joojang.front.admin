import GlobalService from 'lib/GlobalService';
import {
    APIResponseType,
} from 'modules/types';

/**
 * 사이트 기본 정보.
 * @param email
 * @param password
 */
export function getSiteData(): Promise<APIResponseType> {
    return GlobalService.init('get', '/api/justgram/v1/system/sitedata', {});
};

