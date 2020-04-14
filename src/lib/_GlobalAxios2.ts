import axios,{
    AxiosResponse
} from "axios";
import * as Helper from 'lib/Helper';
import History from 'routes/History';
import _ from 'lodash';


export const _axios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Request-Client-Type": "A01001",
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
  });

// Add a request interceptor
_axios.interceptors.request.use(
   config => {
       const token = Helper.getAccessToken();
       if (token) {
           config.headers['Authorization'] = 'Bearer ' + token;
       }
    //    config.headers['Content-Type'] = 'application/json';
       return config;
   },
   error => {
       Promise.reject(error)
   });

const __reFreshToken__ = (originalRequest: any) => {
    const refreshToken = Helper.getRefreshToken();
    return new Promise((resolve, reject) => {
        return _axios.post('/api/v1/auth/refresh_token', {"refresh_token": refreshToken}).then((r) => {
            console.debug(1);
            console.debug({befor: _axios.defaults.headers})

            Helper.setLoginInfoRefresh(r.data);
            _axios.defaults.headers.common['Authorization']  = 'Bearer ' + r.data.access_token

            console.debug({after: _axios.defaults.headers})
            console.debug(1)
            _axios(originalRequest)
            console.debug(2)
        //   resolve(_axios(originalRequest))
        }).catch((error) => {
            console.debug(2);
          reject(error)
        })
      })
}
//Add a response interceptor

_axios.interceptors.response.use(<T>(response: AxiosResponse): any => {
    return {
        state: true,
        data:response.data
    }
}, function (error) {
    const originalRequest = error.config;
    const refreshToken = Helper.getRefreshToken();

    if ((error.response.status === 401 || error.response.status === 400)) {
        if(_.isEmpty(refreshToken) === false) {
           const aa = __reFreshToken__(originalRequest);

           console.debug(aa);




            // return _axios.post('/api/v1/auth/refresh_token',{
            //         "refresh_token": refreshToken
            //     })
            //     .then( async r => {


            //         console.debug('start get refreshToken');
            //         console.debug({befor_access_token: Helper.getAccessToken()})
            //         Helper.setLoginInfoRefresh(r.data);
            //         console.debug({after_access_token: r.data.access_token})
            //         axios.defaults.headers['Authorization'] = 'Bearer ' + r.data.access_token
            //         const ress = await axios(originalRequest).then(r=>{console.debug(r)});
            //         // console.debug({refreshToken : ress});
            //         // console.debug('end get refreshToken');
            //         return ress;
            //     })
            //     .catch(error => {
            //         // console.debug({refreshTokenError : error});
            //         Helper.removeLoginInfo();
            //         History.push(process.env.PUBLIC_URL + '/login');
            //     });
        } else {
            History.push(process.env.PUBLIC_URL + '/login');
        }
            // return _axios.post('/api/v1/auth/refresh_token',
            // {
            //     "refresh_token": refreshToken
            // })
            // .then(response => {
            //     Helper.setLoginInfoRefresh(response.data);
            // })
            // .catch(error => {
            //     console.log(error.response)
            // });

    } else {
        return Promise.reject({
            state: false,
            message: (error.response.data.error_message) ? error.response.data.error_message : "처리중 문제가 발생했습니다."
        });
    }

//    if ((error.response.status === 401 || error.response.status === 400) && originalRequest.url === '/api/v1/auth/login') {
    // if(error.response.status === 401 || error.response.status === 403) {
    //     Helper.removeLoginInfo();
    //     GlobalAlert.default({
    //         text: error.response.data.error_message,
    //     });
    //     History.push(process.env.PUBLIC_URL + '/login');
        // return Promise.reject({
        //     state: false,
        //     message: (error.response.data.error_message) ? error.response.data.error_message : "처리중 문제가 발생했습니다."
        // });
    // }

//    if ((error.response.status === 401 || error.response.status === 400) && !originalRequest._retry) {
//         console.debug({type:2, error: originalRequest});
//        originalRequest._retry = true;
//        const refreshToken = Helper.getRefreshToken();
    //    return _axios.post('/api/v1/auth/refresh_token',
    //        {
    //            "refresh_token": refreshToken
    //        })
    //        .then(res => {
    //            if (res.status === 200) {
    //                console.debug(res.data);
    //                Helper.setLoginInfoRefresh(res.data);
    //                axios.defaults.headers.common['Authorization'] = 'Bearer ' + Helper.getAccessToken();
    //                return axios(originalRequest);
    //            } else {

    //            }

    //            History.push(process.env.PUBLIC_URL + '/login');
    //        })
//    }

//    console.debug({type:3, error: originalRequest});


//    return Promise.reject(error);
});