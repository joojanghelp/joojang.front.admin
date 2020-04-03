import React, { MouseEvent} from 'react';
// import { defaultServerResponse, userDetailData } from 'modules/Interfaces';

interface initialProps  {
    useformcode: any;
    userdetaildata: any;

    handleUserEmailChange: (e: string) => void;
    handleUserNameChange: (e: string) => void;
    handleUserTypeChange: (e: string) => void;
    handleUserStateChange: (e: string) => void;
    handleUserLevelChange: (e: string) => void;

    handleUseDataSubmit: ( event: MouseEvent) => void;
};

function UserDetailForm({
    useformcode,
    userdetaildata,
    handleUserEmailChange,
    handleUserNameChange,
    handleUserTypeChange,
    handleUserStateChange,
    handleUserLevelChange,
    handleUseDataSubmit,
 } : initialProps) {
    return (
        <>
            <form className="user">
                <div className="form-group">
                    <div className="mb-3 mb-sm-0">
                        <input type="text" className="form-control form-control-user" placeholder="사용자 이메일" onChange={ e => handleUserEmailChange(e.target.value)} value={userdetaildata.user_email}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="mb-3 mb-sm-0">
                        <input type="text" className="form-control form-control-user" placeholder="사용자 이름" onChange={ e => handleUserNameChange(e.target.value)} value={userdetaildata.user_name}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="mb-3 mb-sm-0">
                        <select className="form-control" id="user_type"
                            onChange={ e => handleUserTypeChange(e.target.value)}
                            value={userdetaildata.user_type}
                        >
                        {useformcode && useformcode.type_code.map((item: any, i: any) => {
                                return <option key={item['code_id']} value={item['code_id']}>{item['code_name']}</option>
                            })
                        }
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <div className="mb-3 mb-sm-0">
                    <select className="form-control" id="user_state"
                            onChange={ e => handleUserStateChange(e.target.value)}
                            value={userdetaildata.user_state}
                        >
                        {useformcode && useformcode.state_code.map((item: any, i: any) => {
                                return <option key={item['code_id']} value={item['code_id']}>{item['code_name']}</option>
                            })
                        }
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <div className="mb-3 mb-sm-0">
                    <select className="form-control" id="user_level"
                            onChange={ e => handleUserLevelChange(e.target.value)}
                            value={userdetaildata.user_level}
                        >
                        {useformcode && useformcode.level_code.map((item: any, i: any) => {
                                return <option key={item['code_id']} value={item['code_id']}>{item['code_name']}</option>
                            })
                        }
                        </select>
                    </div>
                </div>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={e => handleUseDataSubmit(e)}>Block level button</button>
            </form>
        </>
    );
}

export default UserDetailForm;