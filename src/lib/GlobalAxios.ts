import {ServerResponseInterface} from 'modules/ServerResponseInterface';
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

class GlobalAxios {

    defaultAxiosinstance: AxiosInstance;

    user_access_token: string = '';

    constructor() {

        const defaultAxiosinstance: AxiosInstance = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            timeout: 20000,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Request-Client-Type": "A01001",
                "Accept": "application/json",
                "Content-Type": "application/json",
                // "Authorization" : "Bearer " + this.user_access_token,
            }
        });

        this.defaultAxiosinstance = defaultAxiosinstance;
    }

    promise = <T>(axiosPromise: AxiosPromise): Promise<T> => {
        return new Promise<T | any>((resolve, reject) => {
            axiosPromise.then(response => {
                resolve({
                    state: true,
                    data: response.data
                });
            })
            .catch(error => {
                if (error.response) {

                    if(error.response.status === 401) {
                        Helper.removeLoginInfo();
                        GlobalAlert.default({
                            text: error.response.data.error_message,
                        });
                        history.push('/login');
                    }

                    const errorMessage = error.response.data.error_message;
                    if(typeof errorMessage === 'object') {
                        console.debug(1);
                        // console.debug(errorMessage.toString());
                        // 어떻게 할것 인지?
                    } else {
                        console.debug(2);
                        resolve({
                            state: false,
                            message: (error.response.data.error_message) ? error.response.data.error_message : "처리중 문제가 발생했습니다."
                        });
                    }
                } else if (error.request) {
                    console.debug(3);
                    resolve({
                        status: 444,
                        message: "The request was made but no response was received"
                    });
                } else {
                    console.debug(4);
                    resolve({
                        status: 417,
                        message: "알수 없는 에러 입니다."
                    });
                }
            });
        });
    };

    error(message: string): never {
        throw new Error(message);
    };

    refresh_token = async () => this.defaultAxiosinstance.post('/api/v1/auth/refresh_token', {
            refresh_token: Helper.getRefreshToken()
        }).then(response => {

            Helper.setLoginInfoRefresh(response.data);
            this.user_access_token = response.data.access_token;
            return {
                state: true,
            }
        }).catch(error => {
            if(error.response.status === 400) {
                // 어떻게 할것 인가.
            } else if(error.response.status === 500){
                // 어떻게 할것 인가.
            }

            return {
                state:false
            }
        });


    init = async (auth: boolean, method : string, url: string, params: object): Promise<ServerResponseInterface> => {

        if(auth) {
            const refresh_token = await this.refresh_token();
            if(refresh_token.state === false) {
                Helper.removeLoginInfo();
                GlobalAlert.default({
                    text: '다시 로그인해 주세요.',
                });
                history.push('/login');
            } else {
                // Helper.setLoginInfoRefresh(refresh_token.data)
            }
        }


        const axiosinstance: AxiosInstance = axios.create({
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
                return this.promise<ServerResponseInterface>(axiosinstance.get(url, params));
            }
            case 'post': {
                return this.promise<ServerResponseInterface>(axiosinstance.post(url, params));
            }
            case 'put': {
                return this.promise<ServerResponseInterface>(axiosinstance.put(url, params));
            }
            case 'delete': {
                return this.promise<ServerResponseInterface>(axiosinstance.delete(url, params));
            }
            default:
                return this.error("Should never get here");
        }
    };
};

export default new GlobalAxios();