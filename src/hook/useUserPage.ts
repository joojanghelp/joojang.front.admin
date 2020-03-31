import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules/redux';
import { attemptGetUserListAction, attemptGetUserInfoAction } from 'modules/redux/pages';
import {  defaultListItem, userDetailData } from 'modules/Interfaces';
import history from 'routes/History';

export default function useUserPage() {

    const dispatch = useDispatch();
    const state_user_list = useSelector((state: RootState) => state.pages_state.users.user_list);
    const state_user_info = useSelector((state: RootState) => state.pages_state.users.user_info);

    const [userListItems, setUserListItems ] = useState<defaultListItem[]>();
    const [userInfoData, setUserInfoData ] = useState<userDetailData>();


    const __handleClickUserInfoLink = (user_uuid : string) => {
        dispatch(attemptGetUserInfoAction({
            user_uuid: user_uuid
        }));
    }

    const __handleClickUserInfoPage = (user_uuid : string) => {
       history.push(`/user/${user_uuid}/detail`);
    }

    useEffect(() => {
        if(state_user_list.state === 'success' && typeof state_user_list.list !== undefined && state_user_list.list) {
            // console.debug(state_user_list.list.items);
            setUserListItems(state_user_list.list.items);
        }

        if(state_user_info.state === 'success' && typeof state_user_info.data !== undefined && state_user_info.data) {
            setUserInfoData(state_user_info.data);
        }

        if(state_user_list.state === 'idle') {
            dispatch(attemptGetUserListAction({
                pageNumber: 1
            }));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps,
    },[state_user_list, state_user_info])

    useEffect(() => {

    }, [userListItems]);

    return {
        userListItems,
        userInfoData,
        __handleClickUserInfoLink,
        __handleClickUserInfoPage
    };
};

