import { useState, useEffect, MouseEvent} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules/redux';
import { attemptGetUserInfoAction, attemptUserDataUpdateAction } from 'modules/redux/pages';
import { userDetailData } from 'modules/Interfaces';
import { useParams } from 'react-router-dom';
import GlobalAlert from 'lib/GlobalAlert';


interface formCode {
    type_code: string[]
    state_code: string[]
    level_code: string[]
}

interface RouteParams {
    user_uuid: string
}

export default function useDetail() {

    const params = useParams<RouteParams>();

    const dispatch = useDispatch();
    const state_sitedata = useSelector((state: RootState) => state.sitedata);
    const state_user_info = useSelector((state: RootState) => state.pages_state.users.user_info);
    const state_user_data_update = useSelector((state: RootState) => state.pages_state.users.user_data_update);

    //TODO: 배열처리를 어떻게 해야 할지 몰라서 나중에 수정하자.


    const [useFormCode, setUserFormCode] = useState<Partial<{type_code: any, state_code: any, level_code: any}> | formCode>({
        type_code: [],
        state_code: [],
        level_code: []
    });


    const [userDetailPageData, setUserDetailPageData] = useState<Partial<{user_uuid: string, user_id: number,user_email: string, user_name: string, user_type: string, user_state: string, user_level: string}> | userDetailData>({
        user_uuid: '',
        user_id: 0,
        user_email: '',
        user_name: '',
        user_type: '',
        user_state: '',
        user_level: ''
    });

    const __handleUserEmailChange = (e: string) => {
        setUserDetailPageData({
            ...userDetailPageData,
            user_email: e
        });
    }

    const __handleUserNameChange = (e: string) => {
        setUserDetailPageData({
            ...userDetailPageData,
            user_name: e
        });
    }

    const __handleUserTypeChange = (e: string) => {
        setUserDetailPageData({
            ...userDetailPageData,
            user_type: e
        });
    }

    const __handleUserStateChange = (e: string) => {
        setUserDetailPageData({
            ...userDetailPageData,
            user_state: e
        });
    }

    const __handleUserLevelChange = (e: string) => {
        setUserDetailPageData({
            ...userDetailPageData,
            user_level: e
        });
    }

    // const __handleUseDataSubmit = (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    // }

    const __handleUseDataSubmit = (e: MouseEvent) => {
        e.preventDefault();
        dispatch(attemptUserDataUpdateAction({
            user_uuid: userDetailPageData.user_uuid,
            user_email: userDetailPageData.user_email,
            user_name: userDetailPageData.user_name,
            user_type: userDetailPageData.user_type,
            user_state: userDetailPageData.user_state,
            user_level: userDetailPageData.user_level,
        }))
    }

    useEffect(() => {
        if(state_user_info.state === 'success' && typeof state_user_info.data !== undefined && state_user_info.data) {
            setUserDetailPageData({
                user_uuid:state_user_info.data.user_uuid,
                user_id:state_user_info.data.user_id,
                user_email: state_user_info.data.user_email,
                user_name: state_user_info.data.user_name,
                user_type: state_user_info.data.user_type_code,
                user_state: state_user_info.data.user_state_code,
                user_level: state_user_info.data.user_level_code,
            });
        }
    }, [state_user_info])

    useEffect(() => {
        if(state_sitedata.state === "success") {
            setUserFormCode({
                type_code: state_sitedata.code_list['A01'],
                state_code: state_sitedata.code_list['A10'],
                level_code: state_sitedata.code_list['A20']
            });

        }
    }, [state_sitedata])

    useEffect(() => {
        dispatch(attemptGetUserInfoAction({
            user_uuid: params.user_uuid
        }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if(state_user_data_update.state === "failure" && state_user_data_update.message) {
            GlobalAlert.error({
                text: state_user_data_update.message
            });
        } else if(state_user_data_update.state === "success") {
            GlobalAlert.thenHistoryPush({
                text: '완료 되었습니다.',
                push_router: '/'
            });
        }
    }, [state_user_data_update])


    return {
        userDetailPageData,
        useFormCode,
        __handleUserEmailChange,
        __handleUserNameChange,
        __handleUserTypeChange,
        __handleUserStateChange,
        __handleUserLevelChange,
        __handleUseDataSubmit

    };
};

