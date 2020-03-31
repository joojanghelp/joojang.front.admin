import { MouseEvent, ChangeEvent,  useState, useEffect, useMemo } from 'react';
import { loginRequest } from 'modules/Interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { attemptLoginAction, attemptLoginResetAction } from 'modules/redux/logins';
import { RootState } from 'modules/redux';
import { cookieManager, setLoginInfo } from 'lib/Helper';

export default function useLogin() {

    const login_state = useSelector((state: RootState) => state.login_state);
    const loginState = useMemo(() => login_state, [login_state]);

    const dispatch = useDispatch();
    const [ inputEmail, setInputEmail ] = useState('');
    const [ inputPassword, setInputPassword ] = useState('');
    const [ rememberme, setRememberme ] = useState(false);

    const __handleChangeEmail = (email: string) => {
        setInputEmail(email);
    };

    const __handleChangePassword = (password: string) => {
        setInputPassword(password);
    };

    const __handleClickLoginLink = (e: MouseEvent) => {
        e.preventDefault();
        if(rememberme) {
            cookieManager.set('rememberme', inputEmail);
        }
        const dataObject: loginRequest = {
            email: inputEmail,
            password: inputPassword
        }
        dispatch(attemptLoginAction(dataObject));
    }

    const __handleRememberMeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.checked) {
            setRememberme(true);
        } else {
            setRememberme(false);
            cookieManager.remove('rememberme');
        }
    }


    useEffect(() => {
        if(cookieManager.get('rememberme')) {
            __handleChangeEmail(cookieManager.get('rememberme'));
            setRememberme(true);
        }
    }, [])

    useEffect(() => {
        if(loginState.state === 'success') {
            new Promise(function(resolve, reject) {
                setLoginInfo({
                    token_type: loginState.data!.token_type!,
                    expires_in: loginState.data!.expires_in!,
                    access_token: loginState.data!.access_token!,
                    refresh_token: loginState.data!.refresh_token!,
                    user_name: loginState.data!.user_name!,
                });
                dispatch(attemptLoginResetAction());
            }).then((e) => {
                console.debug(e);
            });
        }
    })

    return {
        inputEmail,
        inputPassword,
        rememberme,
        __handleChangeEmail,
        __handleChangePassword,
        __handleClickLoginLink,
        __handleRememberMeCheckbox,
        loginState
    };
};

