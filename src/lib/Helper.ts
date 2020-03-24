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
        localStorage[key] = (typeof object) === 'string' ? object : JSON.stringify(object);
    },
    get: (key: string) => {
        if(!localStorage) return null;

        if(!localStorage[key]) {
            return null;
        }

        try {
            return JSON.parse(localStorage[key]);
        } catch(e) {
            return localStorage[key];
        }
    },
    remove: (key: string) => {
        if(!localStorage) return null;

        if(localStorage[key]) {
            localStorage.removeItem(key);
        }
    }
};

// 쿠키삭제.
export function removeCookie(cname: string): void
{
	let expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC;"
	document.cookie = cname + "=;" + expires + ";path=/";
}

// 쿠키저장.
export function setCookie(cname: string, cvalue: string, hours: number = 1): void
{
	let d = new Date();
	d.setTime(d.getTime() + hours * 60 * 60 * 1000); // (exdays * 24 * 60 * 60 * 1000));
	let expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// 쿠키정보 읽어 오기.
export function getCookie(cname: string): string | null
{
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
}

// 로그인 정보 쿠키에 저장.
export function setLoginCookie(payload: any): void
{
    setCookie("login_state", "true");
    setCookie("login_expires_in", payload.expires_in);
    setCookie("login_access_token", payload.access_token);
    setCookie("login_refresh_token", payload.refresh_token);
    setCookie("login_user_name", payload.user_name);
    setCookie("login_profile_active", payload.profile_active);
    setCookie("login_profile_image_url", payload.profile_image_url);
}

export const isEmpty = function(value: any): boolean
{
    if( value === "" || value === null || value === undefined || ( value !== null && typeof value === "object" && !Object.keys(value).length ) ){
      return true
    }else{
      return false
    }
};