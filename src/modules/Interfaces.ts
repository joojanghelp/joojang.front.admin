/**
 * 로그인 리퀘스트.
 */
export interface loginRequestInterface {
    email: string;
    password: string;
}



export interface reduxStateInterface {
    state: "idle" | "loading" | "success" | "failure";
};

export interface apiResponseInterface {
    state?: boolean;
};