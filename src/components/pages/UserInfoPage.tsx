import React, {useEffect} from 'react';
import useUserInfo from 'hook/useUserInfo';
import { InfoSkeletonComponent, UserInfoTable } from 'components/elements';


function UserInfoPage() {

    const {
        userInfoItems
    } = useUserInfo();

    return (
        <>
            <InfoSkeletonComponent
                InfoTable={
                    <UserInfoTable
                        userInfoData = {userInfoItems}
                    />
                }
            />
        </>
    );
}

export default UserInfoPage;