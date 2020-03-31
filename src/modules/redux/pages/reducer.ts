import { ActionType } from 'modules/ActionType';
import { createReducer } from "typesafe-actions";
import { PageState } from './types';
import { listTypeServerResponse, defaultServerResponse } from 'modules/Interfaces';

type Action<T> = {
    type: ActionType;
    payload: T;
}

const initialState: PageState = {
    users: {
        user_list: {
            state: 'idle',
        },
        user_info: {
            state: 'idle',
        },
        user_data_update : {
            state: 'idle',
        }
    }
}


export const pagesActionReducer = createReducer<PageState>(initialState, {
    [ActionType.GET_USER_LIST_REQUEST](state: PageState) {
        return {
            ...state,
            users: {
                user_list: {
                    state: 'loading',
                },
                user_info: {
                    state: 'idle',
                },
                user_data_update: {
                    state: 'idle',
                }
            }
        }
    },
    [ActionType.GET_USER_LIST_SUCCESS](state: PageState, action: Action<listTypeServerResponse>) {
        return {
            ...state,
            users: {
                user_list: {
                    state: 'success',
                    list: action.payload
                },
                user_info: {
                    state: 'idle',
                },
                user_data_update: {
                    state: 'idle',
                }
            }
        };
    },
    [ActionType.GET_USER_LIST_ERROR](state: PageState, action: Action<listTypeServerResponse>) {
        return {
            ...state,
            users: {
                user_list: {
                    state: 'failure',
                },
                user_info: {
                    state: 'idle',
                },
                user_data_update: {
                    state: 'idle',
                }
            }
        };
    },

    [ActionType.GET_USER_INFO_REQUEST](state: PageState) {
        return {
            ...state,
            users: {
                user_list: state.users.user_list,
                user_info: {
                    state: 'loading',
                },
                user_data_update: {
                    state: 'idle',
                }
            }
        };
    },
    [ActionType.GET_USER_INFO_SUCCESS](state: PageState, action: Action<defaultServerResponse>) {
        return {
            ...state,
            users: {
                user_list: state.users.user_list,
                user_info: {
                    state: 'success',
                    data: action.payload
                },
                user_data_update: {
                    state: 'idle',
                }
            }
        };
    },
    [ActionType.GET_USER_INFO_ERROR](state: PageState, action: Action<defaultServerResponse>) {
        return {
            ...state,
            users: {
                user_list: state.users.user_list,
                user_info: {
                    state: 'failure',
                },
                user_data_update: {
                    state: 'idle',
                }
            }
        };
    },
    [ActionType.USER_DATA_UPDATE_SUCCESS](state: PageState, action: Action<defaultServerResponse>) {
        return {
            ...state,
            users: {
                user_list: state.users.user_list,
                user_info: state.users.user_info,
                user_data_update: {
                    state: 'success',
                }
            }
        };
    },
    [ActionType.USER_DATA_UPDATE_ERROR](state: PageState, action: Action<defaultServerResponse>) {
        return {
            ...state,
            users: {
                user_list: state.users.user_list,
                user_info: state.users.user_info,
                user_data_update: {
                    state: 'failure',
                }
            }
        };
    }
});

export default pagesActionReducer;
