import { MouseEvent, ChangeEvent,  useState, useEffect, useMemo } from 'react';
import { loginRequestInterface } from 'modules/Interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { attemptLoginAction } from 'modules/redux/logins';
import { RootState } from 'modules/redux';
import { cookieManager } from 'lib/Helper';

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
        const dataObject: loginRequestInterface = {
            email: inputEmail,
            password: inputPassword
        }
        dispatch(attemptLoginAction(dataObject));
    }

    const __handleRememberMeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        // console.debug(typeof e.target.checked);
        if(e.target.checked) {
            setRememberme(true);
        } else {
            setRememberme(false);
            cookieManager.remove('rememberme');
        }


    }

    const handleLoginInfoReset = () => {
        setInputPassword('');
    }

    useEffect(() => {

    }, [inputEmail, inputPassword])


    useEffect(() => {
        if(cookieManager.get('rememberme')) {
            __handleChangeEmail(cookieManager.get('rememberme'));
            setRememberme(true);
        }
    }, [])

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

