import * as React from 'react';

import { LoginForm } from 'components/elements';
import useLogin from 'hook/useLogin';


function LoginPage() {
    document.body.classList.add("bg-gradient-primary");

    const {
        __handleChangeEmail,
        __handleChangePassword,
        __handleClickLoginLink,
        __handleRememberMeCheckbox
    } = useLogin();


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

                                            <LoginForm
                                                handleChangeEmail={ __handleChangeEmail }
                                                handleChangePassword = { __handleChangePassword }
                                                handleClickLoginLink = { __handleClickLoginLink }
                                                handleRememberMeCheckbox = { __handleRememberMeCheckbox }
                                            />

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