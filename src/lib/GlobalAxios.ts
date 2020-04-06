import { defaultServerResponse } from 'modules/Interfaces';
import history from 'routes/History';

import axios ,{
    AxiosInstance,
    AxiosPromise
} from 'axios';

import * as Helper from 'lib/Helper';
import GlobalAlert from 'lib/GlobalAlert';

export interface tokenRefreshInterface {
    state: boolean;
    data?: {
        token_type?: string;
        expires_in?: number;
        access_token?: string;
        refresh_token?: string;
        user_name?: string;
    }
    message?: string;
}

export interface apiRequest {
    authType: boolean;
    method: 'get'|'post'|'delete'|'put';
    endpoint: string;
    payload: any

}

const promise = <T>(axiosPromise: AxiosPromise): Promise<T> => {
    return new Promise<T | any>((resolve, reject) => {
        axiosPromise.then(response => {
            resolve({
                state: true,
                data: response.data
            });
        })
        .catch(error => {
            if (error.response) {

                if(error.response.status === 401 || error.response.status === 403) {
                    Helper.removeLoginInfo();
                    GlobalAlert.default({
                        text: error.response.data.error_message,
                    });
                    history.push('/joojang.front.admin/login');
                }

                const errorMessage = error.response.data.error_message;
                if(typeof errorMessage === 'object') {
                    // console.debug(errorMessage.toString());
                    // 어떻게 할것 인지?
                } else {
                    resolve({
                        state: false,
                        message: (error.response.data.error_message) ? error.response.data.error_message : "처리중 문제가 발생했습니다."
                    });
                }
            } else if (error.request) {
                resolve({
                    status: 444,
                    message: "서버와의 통신중 문제가 발생했습니다."
                });
            } else {
                resolve({
                    status: 417,
                    message: "알수 없는 에러 입니다."
                });
            }
        });
    });
};

export const refresh_token = async ()  => {

    const defaultAxiosinstance: AxiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        timeout: 20000,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Request-Client-Type": "A01001",
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization" : "Bearer " + Helper.getAccessToken(),
        }
    });

    await defaultAxiosinstance.post('/api/v1/auth/refresh_token', {
        refresh_token: await Helper.getRefreshToken()
    }).then(async response => {
        await Helper.setLoginInfoRefresh(response.data);
        return true;
    }).catch(error => {
        console.debug(error);
        return false;
    });

    return true;
}

const error = (message: string): never => {
    throw new Error(message);
};

export const start = async ( {authType, method, endpoint, payload}: apiRequest) => {
    if(authType) {
        await refresh_token();
    }
    const defaultAxiosinstance: AxiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        timeout: 20000,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Request-Client-Type": "A01001",
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization" : "Bearer " + Helper.getAccessToken(),
        }
    });

    switch(method) {
        case 'get': {
            return promise<defaultServerResponse>(defaultAxiosinstance.get(endpoint, payload));
        }
        case 'post': {
            return promise<defaultServerResponse>(defaultAxiosinstance.post(endpoint, payload));
        }
        case 'put': {
            return promise<defaultServerResponse>(defaultAxiosinstance.put(endpoint, payload));
        }
        case 'delete': {
            return promise<defaultServerResponse>(defaultAxiosinstance.delete(endpoint, payload));
        }
        default:
            return error("Should never get here");
    }
}