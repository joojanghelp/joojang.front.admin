export interface ServerResponseInterface {
    token_type?: string;
    expires_in?: number;
    access_token?: string;
    refresh_token?: string;
    user_name?: string;
    message?: string;
}