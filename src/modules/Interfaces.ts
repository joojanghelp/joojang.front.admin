
export type baseSagaStateType = "idle" | "loading" | "success" | "failure";

export interface defaultServerResponse {
    token_type: string;
    expires_in: number;
    access_token: string;
    refresh_token: string;
    user_name: string;
    message: string;
    user_id: number;
    user_uuid: string;
    user_email: string;
    user_type: string;
    user_type_code: string;
    user_state: string;
    user_state_code: string;
    user_level: string;
    user_level_code: string;
    user_activity_state: string;
    user_active: string;
    activity_count: number;
    read_book_count: number;
    upload_book_count: number;
    user_created_at: string;
    updated_at: string;
    created_at_string: string;
    updated_at_string: string;
    email_verified_at_string: string;
}

export interface userDetailData {
    user_id: number,
    user_uuid: string,
    user_name: string,
    user_email: string,
    user_type: string,
    user_type_code: string,
    user_state: string,
    user_state_code: string,
    user_level: string,
    user_level_code: string,
    user_activity_state: string,
    user_active: string,
    activity_count: number,
    read_book_count: number,
    upload_book_count: number,
    user_created_at: string,
    updated_at: string,
    created_at_string: string,
    updated_at_string: string,
    email_verified_at_string: string,
}

export interface defaultApiResposePayload {
    state: boolean,
    data: defaultServerResponse
}

export interface defaultListItem {
    id: number;
    uuid: string;
    email: string;
    name: string;
    type: {
        code_id: string;
        code_name: string;
    },
    state: {
        code_id: string;
        code_name: string;
    },
    level: {
        code_id: string;
        code_name: string;
    },
    activity_count: number;
    read_book_count: number;
    created_at: string;
    created_at_atring: string;
}

export interface listTypeServerResponse {
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
    items: defaultListItem[];
}

export interface siteBaseDataResponse {
    items: {
        code_list: any
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 로그인 리퀘스트.
 */
export interface loginRequest {
    email: string;
    password: string;
}

export interface getUserListRequest {
    pageNumber: number;
}

export interface getUserInfoRequest {
    user_uuid: string;
}

export interface UserDataUpdate {
    user_uuid: string | undefined;
    user_email: string | undefined;
    user_name: string | undefined;
    user_type: string | undefined;
    user_state: string | undefined;
    user_level: string | undefined;
}

export interface loginState {
    state: baseSagaStateType;
    data?: {
        token_type?: string;
        expires_in?: number;
        access_token?: string;
        refresh_token?: string;
        user_name?: string;
    }
    message?: string;
}

export interface tempList {
    state: baseSagaStateType;
    list: listTypeServerResponse;
}

export interface pageState {
    users: {
        user_list: {
            state: baseSagaStateType;
            list?: listTypeServerResponse
        },
        user_info: {
            state: baseSagaStateType;
            data?: userDetailData
        },
        user_data_update: {
            state: baseSagaStateType;
            message?: string;
        }
    }
}

export interface siteDataState {
    state: baseSagaStateType
    code_list: any
};

export interface apiResponse {
    state?: boolean;
};

