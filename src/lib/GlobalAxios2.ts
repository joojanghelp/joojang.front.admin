import axios,{
    // AxiosResponse
} from "axios";
import * as Helper from 'lib/Helper';
import History from 'routes/History';
import GlobalAlert from 'lib/GlobalAlert';
// import _ from 'lodash';

const CancelToken = axios.CancelToken;

export const defaultAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    // timeout: 20000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Request-Client-Type": "A01001",
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
});

// Add a response interceptor
defaultAxios.interceptors.response.use(function (response) : any {
    return {
        state: true,
        data: response.data
    }
}, function (error) {
    const { status, statusText, data } = error.response;
    const { name, result, message } = data;

    return Promise.reject({
        status: status,
        statusText: statusText,
        data: {
            name: name,
            result: result,
            message: message
        }
    });
});

export const authAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    // timeout: 20000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Request-Client-Type": "A01001",
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
});

authAxios.interceptors.request.use( config => {
    const refreshToken = Helper.getRefreshToken();
    return new Promise((resolve, reject) => {
        return defaultAxios.post('/api/v1/auth/refresh_token', {"refresh_token": refreshToken}).then((response) => {
            Helper.setLoginInfoRefresh(response.data);
            resolve(response)
        }).catch((error) => {
            GlobalAlert.default({text:'죄송합니다 버그 입니다 잠시만 기다려 주세요.n 반복되면 새로고침 해주세요.'})
            Helper.removeLoginInfo();
            // History.push(process.env.PUBLIC_URL + '/login')
            return reject({
                cancelToken: new CancelToken((cancel) => cancel('Cancel repeated request'))
            })
        })
    }).then((r: any) => {
        config.headers.Authorization = 'Bearer ' + r.data.access_token;
        return Promise.resolve(config)
    }).catch((error) => {
        return Promise.reject(error)
    })
},
    error => Promise.reject(error),
);

// Add a response interceptor
authAxios.interceptors.response.use(function (response) : any {
    return {
        state: true,
        data: response.data
    }
}, function (error) {
    return {
        state: false,
        data: error.data
    }
});