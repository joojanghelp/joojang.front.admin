import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules/redux';
import { attemptGetUserInfoAction } from 'modules/redux/pages';
import * as Interfaces from 'modules/Interfaces';
import { useParams } from 'react-router-dom';

interface RouteParams {
    user_uuid: string
}

export default function useUserPage() {

    const params = useParams<RouteParams>();

    const dispatch = useDispatch();
    const state_user_info = useSelector((state: RootState) => state.pages_state.users.user_info);

    const [userInfoItems, setUserInfoItems ] = useState<Interfaces.userDetailData | undefined>({
        user_id: 0,
        user_uuid: '',
        user_name: '',
        user_email: '',
        user_type: '',
        user_type_code: '',
        user_state: '',
        user_state_code: '',
        user_level: '',
        user_level_code: '',
        user_activity_state: '',
        user_active: '',
        activity_count: 0,
        read_book_count: 0,
        upload_book_count: 0,
        user_created_at: '',
        updated_at: '',
        created_at_string: '',
        updated_at_string: '',
        email_verified_at_string: '',
    });

    const getUserInfo = (user_uuid : string) => {
        dispatch(attemptGetUserInfoAction({
            user_uuid: user_uuid
        }));
    }

    useEffect(() => {
        if(state_user_info !== undefined) {
            setUserInfoItems(state_user_info.data);
        }

    }, [state_user_info])

    useEffect(() => {
        if(params.user_uuid) {
            getUserInfo(params.user_uuid)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps,
    }, [])

    return {
        userInfoItems,
    };
};