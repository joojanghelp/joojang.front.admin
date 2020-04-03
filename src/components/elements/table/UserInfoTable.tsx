import React from 'react';
import * as Interfaces from 'modules/Interfaces';

interface initialProps {
    userInfoData: Interfaces.userDetailData | undefined
}

function UserInfoTable({userInfoData} : initialProps) {
    return (
        <>
            {/* <!-- DataTales Example --> */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">사용자 정보</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        {/* <!-- Begin table --> */}
                        {/* <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0"> */}
                        <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>구분</th>
                                <th>정보</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>user_uuid</td>
                                <td>{userInfoData && userInfoData.user_uuid}</td>
                            </tr>
                            <tr>
                                <td>이름</td>
                                <td>{userInfoData && userInfoData.user_name}</td>
                            </tr>
                            <tr>
                                <td>이메일</td>
                                <td>{userInfoData && userInfoData.user_email}</td>
                            </tr>
                            <tr>
                                <td>가입경로</td>
                                <td>{userInfoData && userInfoData.user_type}</td>
                            </tr>
                            <tr>
                                <td>사용자 상태</td>
                                <td>{userInfoData && userInfoData.user_state}</td>
                            </tr>
                            <tr>
                                <td>사용자 레벨</td>
                                <td>{userInfoData && userInfoData.user_level}</td>
                            </tr>
                            <tr>
                                <td>활동 공개 여부</td>
                                <td>{userInfoData && userInfoData.user_activity_state}</td>
                            </tr>
                            <tr>
                                <td>독서 활동 등록수</td>
                                <td>{userInfoData && userInfoData.activity_count}</td>
                            </tr>
                            <tr>
                                <td>읽은 책수</td>
                                <td>{userInfoData && userInfoData.read_book_count}</td>
                            </tr>
                            <tr>
                                <td>업로드 책 수</td>
                                <td>{userInfoData && userInfoData.upload_book_count}</td>
                            </tr>
                            <tr>
                                <td>가입일</td>
                                <td>{userInfoData && userInfoData.created_at_string}</td>
                            </tr>
                            <tr>
                                <td>수정일</td>
                                <td>{userInfoData && userInfoData.updated_at_string}</td>
                            </tr>
                            <tr>
                                <td>이메일 인증일</td>
                                <td>{userInfoData && userInfoData.email_verified_at_string}</td>
                            </tr>
                        </tbody>
                    </table>
                        {/* <!-- End of table --> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserInfoTable;