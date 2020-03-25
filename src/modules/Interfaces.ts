
type baseSagaStateType = "idle" | "loading" | "success" | "failure";

/**
 * 로그인 리퀘스트.
 */
export interface loginRequestInterface {
    email: string;
    password: string;
}

export interface loginStateInterface {
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


export interface reduxStateInterface {
    state: baseSagaStateType
};

export interface apiResponseInterface {
    state?: boolean;
};