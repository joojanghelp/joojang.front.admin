import React, {useEffect} from 'react';
import {
    ListSkeletonComponent,
    DefaultUserListTable,
    Pagination
} from 'components/elements';
import useUserPage from 'hook/useUserPage';
import GlobalAlert from 'lib/GlobalAlert';

function UsersPage() {

    const {
        userListItems,
        userInfoData,
        listPageData,
        __handleClickUserInfoLink,
        __handlePaginate,
        __handleClickUserInfoPage,
        __handleUserActiveUpdateLink,
        __handleUserActiveDeleteLink
    } = useUserPage();

    useEffect(() =>{

        if(userInfoData) {
            GlobalAlert.defaultUserInfo({
                title: `<strong><u>${userInfoData.user_name}</u> 상용자 정보.</strong>`,

                html:   `
                <table class="table table-bordered"width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>구분</th>
                      <th>정보</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>user_uuid</td>
                      <td>${userInfoData.user_uuid}</td>
                    </tr>
                    <tr>
                      <td>이름</td>
                      <td>${userInfoData.user_name}</td>
                    </tr>
                    <tr>
                      <td>이메일</td>
                      <td>${userInfoData.user_email}</td>
                    </tr>
                    <tr>
                      <td>가입경로</td>
                      <td>${userInfoData.user_type}</td>
                    </tr>
                    <tr>
                      <td>사용자 상태</td>
                      <td>${userInfoData.user_state}</td>
                    </tr>
                    <tr>
                      <td>사용자 레벨</td>
                      <td>${userInfoData.user_level}</td>
                    </tr>
                    <tr>
                      <td>활동 공개 여부</td>
                      <td>${userInfoData.user_activity_state}</td>
                    </tr>
                    <tr>
                      <td>독서 활동 등록수</td>
                      <td>${userInfoData.activity_count}</td>
                    </tr>
                    <tr>
                      <td>읽은 책수</td>
                      <td>${userInfoData.read_book_count}</td>
                    </tr>
                    <tr>
                      <td>업로드 책 수</td>
                      <td>${userInfoData.upload_book_count}</td>
                    </tr>
                    <tr>
                      <td>가입일</td>
                      <td>${userInfoData.created_at_string}</td>
                    </tr>
                    <tr>
                      <td>수정일</td>
                      <td>${userInfoData.updated_at_string}</td>
                    </tr>
                    <tr>
                      <td>이메일 인증일</td>
                      <td>${userInfoData.email_verified_at_string}</td>
                    </tr>

                  </tbody>
                </table>
                `
            });
        }
    },[userInfoData])

    useEffect(() =>{
        // console.debug(state_user_list);
    },[userListItems])


    return (
        <>
            <ListSkeletonComponent
                ListTable={
                    <DefaultUserListTable
                        items={userListItems}
                        handleUserInfoLink={__handleClickUserInfoLink}
                        handleUserInfoPageLink={__handleClickUserInfoPage}
                        handleUserActiveUpdateLink={__handleUserActiveUpdateLink}
                        handleUserActiveDeleteLink={__handleUserActiveDeleteLink}
                    />
                }
                Pagination={
                    <Pagination
                    handlePaginate={__handlePaginate}
                    listpagedata={listPageData}
                    />
                }
            />
        </>
    );
}

export default UsersPage;