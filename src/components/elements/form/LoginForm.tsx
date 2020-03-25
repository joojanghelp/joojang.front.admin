import React, {FormEvent, MouseEvent, ChangeEvent} from 'react';

interface LoginFormProps  {
    handleChangeEmail: ( email: string ) => void;
    handleChangePassword: ( password: string ) => void;
    handleClickLoginLink: ( event: MouseEvent ) => void;
    handleRememberMeCheckbox: ( event: ChangeEvent<HTMLInputElement> ) => void;
};

function LoginForm({handleChangeEmail, handleChangePassword, handleClickLoginLink, handleRememberMeCheckbox}: LoginFormProps ) {
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
                        onChange={ e => handleChangeEmail(e.target.value) }
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                        onChange={ e => handleChangePassword(e.target.value) }
                    />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox small">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                            onChange={ e => handleRememberMeCheckbox(e)}
                        />
                        <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                    </div>
                </div>
                <a href="{null}"
                    className="btn btn-primary btn-user btn-block"
                    onClick={(e: MouseEvent) => handleClickLoginLink(e)}
                >Login</a>
            </form>
        </>
    );
}

export default LoginForm;