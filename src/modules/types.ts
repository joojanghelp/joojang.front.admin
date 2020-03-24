export type sitedataSagaResponseType = {
    state: "yet" | "success" | "failure" | "reset";
    code_list: any;
};

export type APIResponseType = {
    state?: boolean;
};