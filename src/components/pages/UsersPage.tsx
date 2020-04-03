import React from 'react';
import {
    ListSkeletonComponent,
    DefaultUserListTable,
    Pagination
} from 'components/elements';
import useUserPage from 'hook/useUserPage';

function UsersPage() {

    const {
        userListItems,
        listPageData,
        __handleClickUserInfoLink,
        __handlePaginate,
        __handleClickUserInfoPage,
        __handleUserActiveUpdateLink,
        __handleUserActiveDeleteLink,
        isLoading,
    } = useUserPage();

    return (
        <>
            <ListSkeletonComponent
                ListTable={
                    <DefaultUserListTable
                        isloading={isLoading}
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