import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules/redux';
import { attemptGetUserListAction, attemptGetUserInfoAction, attemptUserActiveUpdateAction } from 'modules/redux/pages';
import { defaultListItem, userDetailData, defaultPaginationData } from 'modules/Interfaces';
import history from 'routes/History';
import { useParams } from 'react-router-dom';

interface RouteParams {
    page_number: string;
}

export default function useUserPage() {

    const params = useParams<RouteParams>();

    const dispatch = useDispatch();
    const state_user_list = useSelector((state: RootState) => state.pages_state.users.user_list);
    const state_user_info = useSelector((state: RootState) => state.pages_state.users.user_info);
    const state_user_active_update = useSelector((state: RootState) => state.pages_state.users.user_active_update);

    const [userListItems, setUserListItems ] = useState<defaultListItem[]>();
    const [userInfoData, setUserInfoData ] = useState<userDetailData>();
    const [listPageData, setlistPageData ] = useState<defaultPaginationData>({
        current_page: 0,
        from: 0,
        last_page: '',
        per_page: 0,
        prev_page_url: '',
        to: 0,
        total: 0,
        first_page: '',
        next_page: '',
        prev_page: '',
    });



    const __handleClickUserInfoLink = (user_uuid : string) => {
        dispatch(attemptGetUserInfoAction({
            user_uuid: user_uuid
        }));
    }

    const __handleClickUserInfoPage = (user_uuid : string) => {
       history.push(`/user/${user_uuid}/detail`);
    }

    const __handlePaginate = (e: any) => {
        const selected_page = e.selected + 1;
        history.push(`/users/${selected_page}`);
    }

    const __handleUserActiveUpdateLink = (user_uuid: string, active: 'Y' | 'N') => {
        dispatch(attemptUserActiveUpdateAction({
            user_uuid: user_uuid,
            active: active
        }));
    }

    const __handleUserActiveDeleteLink = (user_uuid: string) => {
        alert('어떻게 할것 인가?');
    }

    useEffect(() => {
        if(state_user_list.state === 'success' && typeof state_user_list.list !== undefined && state_user_list.list) {
            setUserListItems(state_user_list.list.items);

            setlistPageData({
                current_page: state_user_list.list.current_page,
                from: state_user_list.list.from,
                last_page: state_user_list.list.last_page,
                per_page: state_user_list.list.per_page,
                prev_page_url: state_user_list.list.prev_page_url,
                to: state_user_list.list.to,
                total: state_user_list.list.total,
                first_page: state_user_list.list.first_page,
                next_page: state_user_list.list.next_page,
                prev_page: state_user_list.list.prev_page,
            });
        }

        if(state_user_info.state === 'success' && typeof state_user_info.data !== undefined && state_user_info.data) {
            setUserInfoData(state_user_info.data);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps,
    },[state_user_list, state_user_info])

    useEffect(() => {
        dispatch(attemptGetUserListAction({
            pageNumber: (params.page_number) ? params.page_number : '1'
        }));
    // eslint-disable-next-line react-hooks/exhaustive-deps,
    }, [params]);

    useEffect(() => {
    }, [listPageData]);

    useEffect(() => {
        if(state_user_active_update.state === "success") {
            dispatch(attemptGetUserListAction({
                pageNumber: (params.page_number) ? params.page_number : '1'
            }));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps,
    }, [state_user_active_update]);

    return {
        userListItems,
        userInfoData,
        listPageData,
        __handleClickUserInfoLink,
        __handlePaginate,
        __handleClickUserInfoPage,
        __handleUserActiveUpdateLink,
        __handleUserActiveDeleteLink
    };
};