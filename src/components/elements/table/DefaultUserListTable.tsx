import React from 'react';
import { defaultListItem } from 'modules/Interfaces';

interface initialProps {
    items: defaultListItem[] | undefined;
    handleUserInfoLink: ( user_uuid: string) => void;
    handleUserInfoPageLink: ( user_uuid: string) => void;
    handleUserActiveUpdateLink: ( user_uuid: string, active: 'Y' | 'N') => void;
    handleUserActiveDeleteLink: ( user_uuid: string) => void;
}

function DefaultUserListTable({ items, handleUserInfoLink, handleUserInfoPageLink, handleUserActiveUpdateLink, handleUserActiveDeleteLink } : initialProps) {
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
                <tfoot>
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
                </tfoot>
                <tbody>
                    {items && items.map((item: defaultListItem, i:number) =>
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
                                            return <th><button type="button" className="btn btn-primary" onClick={() => handleUserActiveUpdateLink(item.uuid, 'N')}>중지</button></th>
                                        case 'N' :
                                            return <th><button type="button" className="btn btn-danger" onClick={() => handleUserActiveUpdateLink(item.uuid, 'Y')}>활성</button></th>
                                    }
                                })()
                            }
                            <th><button type="button" className="btn btn-danger" onClick={() => handleUserActiveDeleteLink(item.uuid)}>탈퇴</button></th>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default DefaultUserListTable;