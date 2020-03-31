import React from 'react';
import useDetail from 'hook/useDetail';
import { UserDetailForm, InfoSkeletonComponent } from 'components/elements';

function UserDetail() {

    const {
        useFormCode,
        userDetailPageData,
        __handleUserEmailChange,
        __handleUserNameChange,
        __handleUserTypeChange,
        __handleUserStateChange,
        __handleUserLevelChange,
        __handleUseDataSubmit,
    } = useDetail();

    return (
        <>
            <InfoSkeletonComponent
                InfoTable={
                    <UserDetailForm
                        useformcode = {useFormCode}
                        userdetaildata = {userDetailPageData}

                        handleUserEmailChange = {__handleUserEmailChange}
                        handleUserNameChange = {__handleUserNameChange}
                        handleUserTypeChange = {__handleUserTypeChange}
                        handleUserStateChange = {__handleUserStateChange}
                        handleUserLevelChange = {__handleUserLevelChange}
                        handleUseDataSubmit = {__handleUseDataSubmit}
                    />
                }
            />
        </>
    );
}

export default UserDetail;