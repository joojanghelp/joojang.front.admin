/**
 * 개발 디버그
 * @param e
 * @constructor
 */
export const DEBUG = (e: object) => {
    console.debug('%c::DEBUG::', 'color: green; font-weight: bold;',e);
};

/**
 * 로컬 스토리지 관리
 */
export const storageManager = {
    set: (key: string, object: any) => {
        if(!localStorage) return;
        localStorage.setItem(key, (typeof object) === 'string' ? object : JSON.stringify(object) );
    },
    get: (key: string) => {
        if(!localStorage) return null;

        if(!localStorage[key]) {
            return null;
        }

        try {
            return JSON.parse(localStorage.getItem(key)!);
        } catch(e) {
            return localStorage.getItem(key);
        }
    },
    remove: (key: string) => {
        if(!localStorage) return null;

        if(localStorage[key]) {
            localStorage.removeItem(key);
        }
    }
};

export function getAccessToken() {
    return cookieManager.get('login_access_token');
}

export function getRefreshToken() {
    return cookieManager.get('login_refresh_token');
}

export function setLoginInfo(payload: any): void {
    cookieManager.set('login_token_type', payload.token_type!);
    cookieManager.set('login_expires_in', payload.expires_in!);
    cookieManager.set('login_access_token', payload.access_token!);
    cookieManager.set('login_refresh_token', payload.refresh_token!);
    cookieManager.set('login_user_name', payload.user_name!);
}

export function setLoginInfoRefresh(payload: any): void {
    cookieManager.set('login_token_type', payload.token_type!);
    cookieManager.set('login_expires_in', payload.expires_in!);
    cookieManager.set('login_access_token', payload.access_token!);
    cookieManager.set('login_refresh_token', payload.refresh_token!);
}

export function removeLoginInfo(): void {
    cookieManager.remove('login_token_type');
    cookieManager.remove('login_expires_in');
    cookieManager.remove('login_access_token');
    cookieManager.remove('login_refresh_token');
    cookieManager.remove('login_user_name');
}

/**
 * 쿠키정보.
 */
export const cookieManager = {
    set: (cname: string, cvalue: string | number, hours: number = 1) => {
        let d = new Date();
        d.setTime(d.getTime() + hours * 60 * 60 * 1000); // (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    get: (cname: string) => {

        let name = cname + "=";
        let ca = document.cookie.split(";");

        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }

        return "";
    },
    remove: (cname: string) => {
        let expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC;"
        document.cookie = cname + "=;" + expires + ";path=/";
    }
}

export const isEmpty = function(value: any): boolean
{
    if( value === "" || value === null || value === undefined || ( value !== null && typeof value === "object" && !Object.keys(value).length ) ){
      return true
    }else{
      return false
    }
};