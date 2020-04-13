import React from 'react';
import * as Interfaces from 'modules/Interfaces';
import {LoadingSpinner} from 'components/elements';

interface initialProps {
    isloading: Interfaces.baseSagaStateType;
    items: Interfaces.defaultListItem[] | undefined;
    handleUserInfoLink: ( user_uuid: string) => void;
    handleUserInfoPageLink: ( user_uuid: string) => void;
    handleUserActiveUpdateLink: ( user_uuid: string, active: 'Y' | 'N') => void;
    handleUserActiveDeleteLink: ( user_uuid: string) => void;
}

function DefaultUserListTable({ isloading, items, handleUserInfoLink, handleUserInfoPageLink, handleUserActiveUpdateLink, handleUserActiveDeleteLink } : initialProps) {
    return (
        <>
            {/* <!-- Begin table --> */}
            {/* <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0"> */}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>이메일</th>
                        <th>이름</th>
                        <th>가입형태</th>
                        <th>상태</th>
                        <th>등급</th>
                        <th>올린책</th>
                        <th>활동수</th>
                        <th>가입일</th>
                        <th>중지</th>
                        <th>탈퇴</th>
                    </tr>
                </thead>
                {isloading === 'loading'
                    ?
                    <tbody><tr><td colSpan={10}><div style={{ height: '10vh', display: 'flex', justifyContent: 'center', alignItems: 'center',}}><LoadingSpinner /></div></td></tr></tbody>
                    :
                    <tbody>
                    {
                    items && items.map((item: Interfaces.defaultListItem, i:number) =>
                        <tr key={i}>
                            <td>{item.email}&nbsp;<span className="badge badge-pill badge-primary" onClick={() => handleUserInfoLink(item.uuid)}>정보</span>&nbsp;<span className="badge badge-pill badge-primary" onClick={() => handleUserInfoPageLink(item.uuid)}>수정</span></td>
                            <td>{item.name}</td>
                            <td>{item.type.code_name}</td>
                            <td>{item.state.code_name}</td>
                            <td>{item.level.code_name}</td>
                            <td>{item.read_book_count}</td>
                            <td>{item.activity_count}</td>
                            <td>{item.created_at_atring}</td>
                            {
                                (function(){
                                    switch(item.active) {
                                        case 'Y' :
                                            return <td><button type="button" className="btn btn-primary btn-sm" onClick={() => handleUserActiveUpdateLink(item.uuid, 'N')}>중지</button></td>
                                        case 'N' :
                                            return <td><button type="button" className="btn btn-danger btn-sm" onClick={() => handleUserActiveUpdateLink(item.uuid, 'Y')}>활성</button></td>
                                    }
                                })()
                            }
                            <td><button type="button" className="btn btn-danger btn-sm" onClick={() => handleUserActiveDeleteLink(item.uuid)}>탈퇴</button></td>
                        </tr>
                    )
                    }
                    </tbody>
                }
            </table>
        </>
    );
}

export default DefaultUserListTable;