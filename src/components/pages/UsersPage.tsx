import React from 'react';

import {
    ListSkeletonComponent,
} from 'components/elements';

function ListTable() {
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
                    <tr>
                        <td>sm.park@healthmax.co.kr</td>
                        <td>sm.park</td>
                        <td>안드로이드</td>
                        <td>정상</td>
                        <td>일반회원</td>
                        <td>10</td>
                        <td>3</td>
                        <td>2020/03/26</td>
                        <th>중지</th>
                        <th>삭제</th>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

function UsersPage() {
    return (
        <>
            <ListSkeletonComponent
                ListTable={ <ListTable/> }
            />
        </>
    );
}

export default UsersPage;