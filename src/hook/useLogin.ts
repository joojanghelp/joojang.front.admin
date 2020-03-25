import { FormEvent, MouseEvent, ChangeEvent,  useState, useEffect } from 'react';
import { loginRequestInterface } from 'modules/Interfaces';

export default function useLogin() {

    const [ inputEmail, setInputEmail ] = useState('');
    const [ inputPassword, setInputPassword ] = useState('');

    const __handleChangeEmail = (email: string) => {
        setInputEmail(email);
    };

    const __handleChangePassword = (password: string) => {
        setInputPassword(password);
    };

    const __handleClickLoginLink = (e: MouseEvent) => {
        e.preventDefault();
        const dataObject: loginRequestInterface = {
            email: inputEmail,
            password: inputPassword
        }

        console.debug(dataObject);

    }

    const __handleRememberMeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        console.debug(e.target.checked);
    }

    const handleLoginInfoReset = () => {
        setInputPassword('');
    }

    useEffect(() => {
        console.debug({
            email: inputEmail,
            password: inputPassword
        });
    }, [inputEmail, inputPassword])

    return {
        __handleChangeEmail,
        __handleChangePassword,
        __handleClickLoginLink,
        __handleRememberMeCheckbox
    };
};

