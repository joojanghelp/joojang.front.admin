
export interface reduxStateInterface {
    state: "idle" | "loading" | "success" | "failure";
};

export interface apiResponseInterface {
    state?: boolean;
};