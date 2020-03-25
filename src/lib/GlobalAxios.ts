import { apiResponseInterface } from 'modules/Interfaces';

import axios ,{
    AxiosInstance,
    AxiosPromise
} from 'axios';

import { cookieManager } from 'lib/Helper';

class GlobalAxios {

    axiosinstance: AxiosInstance;

    constructor() {

        const axiosinstance: AxiosInstance = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            timeout: 20000,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Request-Client-Type": "A02001",
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization" : "Bearer " + cookieManager.get("login_access_token"),

            }
        });

        this.axiosinstance = axiosinstance;
    }

    promise = <T>(axiosPromise: AxiosPromise): Promise<T> => {
        return new Promise<T | any>((resolve, reject) => {
            axiosPromise
                .then(response => {
                    resolve({
                        state: true,
                        data: response.data
                    });
                })
                .catch(error => {
                    if (error.response) {
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
                            message: "The request was made but no response was received"
                        });
                    } else {
                        resolve({
                            status: 417,
                            message: "Something happened in setting up the request that triggered an Error"
                        });
                    }
                });
        });
    };

    error(message: string): never {
        throw new Error(message);
    };

    init = (method : string, url: string, params: object): Promise<apiResponseInterface> => {

        switch(method) {
            case 'get': {
                return this.promise<apiResponseInterface>(this.axiosinstance.get(url, params));
            }
            case 'post': {
                return this.promise<apiResponseInterface>(this.axiosinstance.post(url, params));
            }
            case 'put': {
                return this.promise<apiResponseInterface>(this.axiosinstance.put(url, params));
            }
            case 'delete': {
                return this.promise<apiResponseInterface>(this.axiosinstance.put(url, params));
            }
            default:
                return this.error("Should never get here");
        }

    };
};

export default new GlobalAxios();