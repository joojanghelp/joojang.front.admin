import React, {useEffect} from 'react';

import { LoginForm } from 'components/elements';
import useLogin from 'hook/useLogin';
import GlobalAlert from 'lib/GlobalAlert';
import {
    LoadingSpinner
} from 'components/elements';
import * as Helper from 'lib/Helper';
import history from 'routes/History';

function LoginPage() {
    document.body.classList.add("bg-gradient-primary");

    const {
        inputEmail,
        inputPassword,
        rememberme,
        __handleChangeEmail,
        __handleChangePassword,
        __handleClickLoginLink,
        __handleRememberMeCheckbox,
        __handleEnterKeyPress,
        loginState
    } = useLogin();


    useEffect(() => {

        if(loginState.state === "failure" && loginState.message) {
            GlobalAlert.error({
                text: loginState.message
            });
        } else if(loginState.state === "success") {
            GlobalAlert.thenHistoryPush({
                text: '로그인이 완료 되었습니다.',
                push_router: '/'
            });
        }

    }, [loginState])

    useEffect(() => {
        if(Helper.getAccessToken()) {
            history.push('/');
        }
    });

    return (
        <>
            <div className="container">
                {/* <!-- Outer Row --> */}
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                {/* <!-- Nested Row within Card Body --> */}
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome JoojangHelp Admin!</h1>
                                            </div>
                                            {loginState.state === "loading"
                                                ? <LoadingSpinner/>
                                                :<LoginForm
                                                    inputEmail = {inputEmail}
                                                    inputPassword = {inputPassword}
                                                    handelRememberme = {rememberme}
                                                    handleChangeEmail={ __handleChangeEmail }
                                                    handleChangePassword = { __handleChangePassword }
                                                    handleClickLoginLink = { __handleClickLoginLink }
                                                    handleRememberMeCheckbox = { __handleRememberMeCheckbox }
                                                    handleEnterKeyPress = { __handleEnterKeyPress }
                                                />
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;