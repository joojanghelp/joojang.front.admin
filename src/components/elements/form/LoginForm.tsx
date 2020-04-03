import React, {MouseEvent, ChangeEvent, KeyboardEvent} from 'react';

interface LoginFormProps  {
    inputEmail: string;
    inputPassword: string;
    handelRememberme: boolean;
    handleChangeEmail: ( email: string ) => void;
    handleChangePassword: ( password: string ) => void;
    handleClickLoginLink: ( event: MouseEvent ) => void;
    handleEnterKeyPress: () => void;
    handleRememberMeCheckbox: ( event: ChangeEvent<HTMLInputElement> ) => void;
};

function LoginForm({inputEmail, inputPassword, handelRememberme, handleChangeEmail, handleChangePassword, handleClickLoginLink, handleRememberMeCheckbox, handleEnterKeyPress}: LoginFormProps ) {
    const onEnter = (event: KeyboardEvent<HTMLInputElement>) => event.key === 'Enter' && handleEnterKeyPress();

    return (
        <>
            <form className="user">
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control form-control-user"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="이메일을 입력해 주세요...."
                        value={inputEmail}
                        onChange={ e => handleChangeEmail(e.target.value) }
                        onKeyPress={e => onEnter(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="비밀번호를 입력해 주세요..."
                        value={inputPassword}
                        onChange={ e => handleChangePassword(e.target.value) }
                        onKeyPress={e => onEnter(e)}
                    />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox small">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                            checked={handelRememberme}
                            onChange={ e => handleRememberMeCheckbox(e)}
                        />
                        <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                    </div>
                </div>
                <a href="null"
                    className="btn btn-primary btn-user btn-block"
                    onClick={(e: MouseEvent) => handleClickLoginLink(e)}
                >Login</a>
            </form>
        </>
    );
}

export default LoginForm;